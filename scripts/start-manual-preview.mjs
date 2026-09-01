import { spawn, spawnSync } from 'node:child_process';

const command = process.platform === 'win32' ? 'corepack.cmd' : 'corepack';
if (process.env.MANUAL_DOCS_BUILT !== '1') {
  const build = spawnSync(command, ['pnpm', 'docs:build'], {
    env: { ...process.env, DOCS_BASE: '/ROOMBANKER-PC/' },
    stdio: 'inherit'
  });
  if (build.status !== 0) process.exit(build.status || 1);
}

const preview = spawn(command, [
  'pnpm', 'exec', 'vitepress', 'preview', 'docs/manual', '--host=localhost', '--port', '5191', '--strictPort'
], { stdio: 'inherit' });

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => preview.kill(signal));
}
preview.on('exit', (code) => process.exit(code || 0));
