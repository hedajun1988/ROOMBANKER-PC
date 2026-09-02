import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const ignoredDirectories = new Set(['.git', 'node_modules', 'playwright-report', 'test-results']);
const allowedFiles = new Set([
  'README.md',
  '.gitignore',
  'package.json',
  'pnpm-lock.yaml',
  '.github/workflows/docs-pages.yml',
  'playwright.manual-site.config.ts',
  'scripts/check-manual-assets.mjs',
  'scripts/check-public-scope.mjs',
  'scripts/start-manual-preview.mjs',
  'tests/manual/site-preview.spec.ts'
]);
const forbiddenExtensions = new Set(['.env', '.pem', '.key', '.p12', '.pfx', '.map', '.zip', '.tar', '.gz', '.tgz', '.exe', '.dll', '.so', '.dylib']);
const errors = [];

function runGit(args) {
  const result = spawnSync('git', args, { cwd: root, encoding: 'utf8' });
  if (result.status !== 0) throw result.error || new Error(result.stderr);
  return result.stdout.trim();
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    const repoPath = relative(root, path).replaceAll('\\\\', '/');
    if (entry.isDirectory()) {
      if (ignoredDirectories.has(entry.name) || repoPath === 'docs/manual/.vitepress/dist') return [];
      return walk(path);
    }
    return [repoPath];
  });
}

function isManualFile(path) {
  return path === 'docs/manual/index.md'
    || /^docs\/manual\/(?:en|zh|tr)\/.+\.md$/.test(path)
    || new Set([
      'docs/manual/.vitepress/config.ts',
      'docs/manual/.vitepress/screenshot-manifest.ts',
      'docs/manual/.vitepress/theme/custom.css',
      'docs/manual/.vitepress/theme/index.ts',
      'docs/manual/public/images/brand/roombanker-mark.svg'
    ]).has(path)
    || /^docs\/manual\/public\/images\/.+\.png$/.test(path);
}

function assertAllowedPath(path, source) {
  const prefix = source ? `${source}: ` : '';
  if (!allowedFiles.has(path) && !isManualFile(path)) errors.push(`${prefix}out-of-scope file: ${path}`);
  if (forbiddenExtensions.has(path.slice(path.lastIndexOf('.')))) errors.push(`${prefix}forbidden extension: ${path}`);
}

const trackedFiles = runGit(['ls-files', '-z']).split('\0').filter(Boolean);
for (const path of trackedFiles) assertAllowedPath(path, 'tracked');
for (const path of walk(root)) assertAllowedPath(path, 'working tree');

for (const path of ['docs/manual', '.github/workflows/docs-pages.yml', 'playwright.manual-site.config.ts', 'scripts/check-manual-assets.mjs', 'scripts/start-manual-preview.mjs', 'tests/manual/site-preview.spec.ts']) {
  if (!existsSync(join(root, path))) errors.push(`missing required public file: ${path}`);
}

const textFiles = trackedFiles.filter((path) => /\.(?:md|ts|mjs|json|ya?ml|css|svg)$/.test(path));
const publicMarkdownFiles = trackedFiles.filter((path) => path === 'docs/manual/index.md' || /^docs\/manual\/(?:en|zh|tr)\/.+\.md$/.test(path));
const sensitivePatterns = [
  [/\b(?:\d{1,3}\.){3}\d{1,3}\b/, 'bare IP address'],
  [new RegExp(['9c', '048fd'].join(''), 'i'), 'source commit identifier'],
  [/(?:Bearer\s+|token[=:]\s*)[A-Za-z0-9._-]{12,}/i, 'token-like value'],
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, 'private key']
];
for (const path of textFiles) {
  const text = readFileSync(join(root, path), 'utf8');
  for (const [pattern, description] of sensitivePatterns) {
    if (pattern.test(text)) errors.push(`${path}: ${description}`);
  }
}

for (const path of publicMarkdownFiles) {
  const text = readFileSync(join(root, path), 'utf8');
  const publicTerms = [
    [/\bJWT\b/i, 'JWT'], [/\bOpenAPI\b/i, 'OpenAPI'], [/\bSwagger\b/i, 'Swagger'], [/\bAPIs?\b/i, 'API'], [/\bHTTP\b/i, 'HTTP'],
    [/\bendpoints?\b/i, 'endpoint'], [/\bpayloads?\b/i, 'payload'], [/\bDTOs?\b/i, 'DTO'], [/\bNode\.js\b/i, 'Node.js'], [/\bVitePress\b/i, 'VitePress'], [/\bPlaywright\b/i, 'Playwright'],
    [/\bfixtures?\b/i, 'fixture'], [/\bmocks?\b/i, 'mock'], [/\bprototypes?\b/i, 'prototype'], [/\bmanifests?\b/i, 'manifest'], [/\bDOM\b/i, 'DOM'], [/\broutes?\b/i, 'route'],
    [/\blocalStorage\b/i, 'localStorage'], [/\bsessionStorage\b/i, 'sessionStorage'], [/\bMQTT\b/i, 'MQTT'], [/\bRPC\b/i, 'RPC'], [/\bACK\b/i, 'ACK'], [/\bbrokers?\b/i, 'broker'],
    [/\btokens?\b/i, 'token'], [/\bRFC3339\b/i, 'RFC3339'], [/\bchunks?\b/i, 'chunk'], [/\bartifacts?\b/i, 'artifact'], [/\bdemo-only\b/i, 'demo-only'],
    [/\/api\//i, '/api/'], [/\/reports\b/i, '/reports'], [/\/devices\b/i, '/devices'], [/intercepted locally/i, 'intercepted locally'],
    [/capture[^\n]{0,80}(?:does not|not) submit/i, 'capture does not submit'], [/pre-submit/i, 'pre-submit'], [/production APIs?/i, 'production API'], [/write request/i, 'write request'],
    [/server-side/i, 'server-side'], [/front-end session/i, 'front-end session'], [/persisted/i, 'persisted'], [/request sequence/i, 'request sequence'], [/fail-closed/i, 'fail-closed'], [/mode-query/i, 'mode-query'],
    [/screenshots?[^\n]{0,100}\b(?:cancel(?:s|led|ing)?|stop(?:s|ped|ping)?|(?:do|does|did|will)\s+not\s+submit|(?:is|are|was|were)\s+not\s+submit(?:ted|ting)?|rather\s+than\s+submit(?:s|ted|ting)?)\b/i, 'screenshot test narration'],
    [/\bdirect(?:ly)?\s+navigat(?:e|es|ed|ing|ion|ions)\b/i, 'direct navigation'], [/\bredirect(?:s|ed|ing|ion|ions)?\b/i, 'redirect'], [/\bserver(?:-side)?\s+validat(?:e|es|ed|ing|ion|ions)\b/i, 'server validation'], [/\b(?:the\s+)?service\s+(?:does|did|will)\s+not\s+(?:declare|state|specify)\b/i, 'service declaration'], [/\bUI\b/, 'UI'],
    [/soft delete|physical erase|current UI|current interface|service acceptance|\bpolling\b|\bclient\b|\bsession\b|test SN/i, 'technical or test narration'],
    [/本地拦截|提交前状态|生产接口|写请求|服务端|前端会话|持久化|请求序列|模式查询|故障关闭|本截图不提交|截图刻意不提交|截图停在提交前|客户端|轮询|会话|路由|重定向|软删除|物理擦除|测试 SN|当前 UI|当前界面|SSH 端点|截图[^\n]{0,100}(?:取消|停止|不(?:会)?提交|没有提交|未提交)|服务\s*(?:未|没有|不)\s*(?:声明|说明)/i, 'technical or test narration']
  ];
  for (const [pattern, term] of publicTerms) if (pattern.test(text)) errors.push(`${path}: prohibited public term: ${term}`);
}

const prohibitedWelcomeCopy = new Map([
  ['docs/manual/en/index.md', 'Screenshots use isolated, fictional data;'],
  ['docs/manual/zh/index.md', '截图均使用隔离的虚构数据；']
]);
for (const [path, phrase] of prohibitedWelcomeCopy) {
  if (readFileSync(join(root, path), 'utf8').includes(phrase)) errors.push(`${path}: prohibited welcome-page copy`);
}

if (existsSync(join(root, '.git'))) {
  const commits = runGit(['rev-list', '--all']).split('\n').filter(Boolean);
  for (const commit of commits) {
    const files = runGit(['ls-tree', '-r', '-z', '--name-only', commit]).split('\0').filter(Boolean);
    for (const path of files) assertAllowedPath(path, `commit ${commit}`);
  }
}

if (errors.length) {
  console.error(`Public repository scope check failed:\n${errors.join('\n')}`);
  process.exit(1);
}
console.log(`Public repository scope check passed (${trackedFiles.length} tracked files).`);
