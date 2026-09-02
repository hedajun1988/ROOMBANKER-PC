import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { transformWithEsbuild } from 'vite';

const root = 'docs/manual';
const publicRoot = join(root, 'public');
const errors = [];
const exemptAppendixImages = new Set();

function walk(dir, extension) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    const path = join(dir, item.name);
    return item.isDirectory() ? walk(path, extension) : item.name.endsWith(extension) ? [path] : [];
  });
}

function imagePaths(markdown) {
  return [...markdown.matchAll(/!\[[^\]]*]\((\/images\/[^)]+\.png)\)/g)].map((match) => match[1]);
}

function imageTableNumbers(markdown, image) {
  const imageIndex = markdown.indexOf(`](${image})`);
  if (imageIndex < 0) return [];
  const after = markdown.slice(imageIndex + image.length + 3);
  const nextImage = after.indexOf('](/images/');
  const section = nextImage >= 0 ? after.slice(0, nextImage) : after;
  return [...section.matchAll(/^\|\s*(\d+)(?:\s*-\s*(\d+))?\s*\|/gm)]
    .flatMap((match) => {
      const start = Number(match[1]);
      const end = Number(match[2] || match[1]);
      return Array.from({ length: end - start + 1 }, (_, index) => String(start + index));
    });
}

function addError(message) {
  errors.push(message);
}

function assertSafeText(path, text) {
  const ipPattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
  for (const ip of text.match(ipPattern) || []) {
    addError(`${path}: prohibited IP ${ip}`);
  }
  for (const email of text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) || []) {
    if (!email.endsWith('@example.com')) addError(`${path}: non-example email ${email}`);
  }
  for (const phone of text.match(/\+\d[\d ()-]{7,}\d/g) || []) {
    const normalized = phone.replace(/[^\d+]/g, '');
    if (!['+12025550100', '+12025550101', '+12025550102'].includes(normalized)) addError(`${path}: unapproved phone ${phone}`);
  }
  for (const token of text.match(/(?:Bearer\s+|token[=:]\s*)[A-Za-z0-9._-]{12,}/gi) || []) addError(`${path}: token-like value ${token}`);
  for (const serial of text.match(/\b(?:DEMO[-A-Z0-9]*HUB[-A-Z0-9]*|SN[-:_-]?[A-Z0-9-]{5,})\b/g) || []) {
    if (!serial.startsWith('DEMO')) addError(`${path}: unapproved serial ${serial}`);
  }
}

const manifestPath = join(process.cwd(), root, '.vitepress/screenshot-manifest.ts');
const manifestSource = readFileSync(manifestPath, 'utf8');
const transformedManifest = await transformWithEsbuild(manifestSource, manifestPath, { loader: 'ts', format: 'esm', target: 'esnext' });
const { screenshotManifest } = await import(`data:text/javascript;base64,${Buffer.from(transformedManifest.code).toString('base64')}`);

const operationLogsEntry = screenshotManifest.find((entry) => entry.id === 'operation-logs');
const operationLogsControls = [
  ['1', 'Type filter', '.content .toolbar > select.control'],
  ['2', 'Keyword', '.content .toolbar > input.search-control'],
  ['3', 'Date range (From/To)', '.content .toolbar > .event-date-picker:has(input[placeholder="From"])']
];
if (!operationLogsEntry || JSON.stringify(operationLogsEntry.controls.map((control) => [control.number, control.name, control.selector])) !== JSON.stringify(operationLogsControls)) {
  addError('operation-logs: controls must use the required numbered selector contract');
}

const chapters = walk(join(root, 'en'), '.md')
  .map((path) => relative(join(root, 'en'), path).replace(/\.md$/, ''))
  .filter((chapter) => chapter.startsWith('getting-started/') || chapter.startsWith('guide/'));
const manifestFiles = new Set();
const markdownFiles = new Set();

for (const chapter of chapters) {
  const enPath = join(root, 'en', `${chapter}.md`);
  const zhPath = join(root, 'zh', `${chapter}.md`);
  const trPath = join(root, 'tr', `${chapter}.md`);
  if (!existsSync(zhPath)) {
    addError(`missing Chinese chapter: ${chapter}`);
    continue;
  }
  const entries = screenshotManifest.filter((entry) => entry.chapter === chapter);
  if (!entries.length) addError(`${chapter}: no manifest entry`);
  const enText = readFileSync(enPath, 'utf8');
  const zhText = readFileSync(zhPath, 'utf8');
  const trText = readFileSync(trPath, 'utf8');
  assertSafeText(enPath, enText);
  assertSafeText(zhPath, zhText);
  const enImages = new Set(imagePaths(enText));
  const zhImages = new Set(imagePaths(zhText));
  const trImages = new Set(imagePaths(trText));
  for (const image of new Set([...enImages, ...zhImages, ...trImages])) {
    if (!enImages.has(image) || !zhImages.has(image) || !trImages.has(image)) addError(`${chapter}: locale image mismatch ${image}`);
  }
  for (const entry of entries) {
    const file = entry.file;
    manifestFiles.add(file);
    if (!existsSync(join(publicRoot, file))) addError(`${entry.id}: missing ${file}`);
    if (!enImages.has(file) || !zhImages.has(file)) addError(`${entry.id}: ${file} must be referenced by both chapter languages`);
    if (!entry.chapter || entry.chapter.includes('*') || entry.route.includes('*')) addError(`${entry.id}: wildcard chapter or route`);
    if (entry.appCommit === 'working-tree') addError(`${entry.id}: working-tree is not a commit`);
    if (!entry.controls.length) addError(`${entry.id}: no controls`);
    const numbers = entry.controls.map((control) => control.number);
    if (new Set(numbers).size !== numbers.length) addError(`${entry.id}: duplicate control numbers`);
    for (const control of entry.controls) {
      if (!control.name.trim() || !control.selector.trim()) addError(`${entry.id}: empty control name or selector`);
      if (/generic|primary control|filter or field|record control/i.test(`${control.name} ${control.selector}`)) addError(`${entry.id}: generic control contract`);
    }
    const enNumbers = imageTableNumbers(enText, file);
    const zhNumbers = imageTableNumbers(zhText, file);
    const expected = [...numbers].sort();
    if (JSON.stringify([...new Set(enNumbers)].sort()) !== JSON.stringify(expected) || JSON.stringify([...new Set(zhNumbers)].sort()) !== JSON.stringify(expected)) {
      addError(`${entry.id}: table numbering must exactly match manifest controls`);
    }
  }
  for (const image of enImages) markdownFiles.add(image);
  for (const image of zhImages) markdownFiles.add(image);
  for (const image of trImages) markdownFiles.add(image);
}

for (const appendix of walk(join(root, 'en/appendix'), '.md')) {
  const chapter = relative(join(root, 'en'), appendix).replace(/\.md$/, '');
  const zhPath = join(root, 'zh', `${chapter}.md`);
  if (!existsSync(zhPath)) addError(`missing Chinese appendix: ${chapter}`);
  for (const path of [appendix, zhPath]) {
    if (!existsSync(path)) continue;
    const text = readFileSync(path, 'utf8');
    assertSafeText(path, text);
    for (const image of imagePaths(text)) {
      markdownFiles.add(image);
      if (!manifestFiles.has(image) && !exemptAppendixImages.has(image)) addError(`${path}: appendix image needs an explicit exemption`);
    }
  }
}

for (const image of markdownFiles) {
  if (!manifestFiles.has(image) && !exemptAppendixImages.has(image)) addError(`Markdown image is absent from manifest: ${image}`);
  if (!existsSync(join(publicRoot, image))) addError(`missing Markdown image: ${image}`);
}
for (const path of walk(join(publicRoot, 'images'), '.png')) {
  const image = `/${relative(publicRoot, path).replaceAll('\\', '/')}`;
  if (!manifestFiles.has(image) || !markdownFiles.has(image)) addError(`orphan PNG: ${image}`);
}

if (errors.length) {
  console.error(`Manual asset check failed:\n${errors.join('\n')}`);
  process.exit(1);
}
console.log(`Manual asset check passed (${screenshotManifest.length} manifest entries).`);
