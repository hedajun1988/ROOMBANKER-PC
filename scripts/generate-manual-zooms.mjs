import { resolve } from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const publicRoot = resolve('docs/manual/public');
const crops = [
  ['images/auth/login.png', 'login-form-controls.png', 410, 240, 460, 360],
  ['images/auth/register.png', 'registration-form-controls.png', 410, 60, 460, 650],
  ['images/auth/recovery.png', 'password-recovery-form-controls.png', 410, 130, 460, 550],
  ['images/hubs/hub-list-actions.png', 'hub-list-add-hub.png', 240, 145, 1080, 120],
  ['images/hubs/hub-add-step-3.png', 'hub-add-confirm.png', 500, 780, 420, 150],
  ['images/hubs/hub-super-admin-transfer-confirm.png', 'hub-super-admin-transfer-confirm.png', 500, 530, 440, 250],
  ['images/hubs/hub-restart-confirm.png', 'hub-restart-confirm.png', 500, 520, 440, 270],
  ['images/settings/settings-delete-account-confirm.png', 'settings-delete-account-confirm.png', 500, 500, 440, 310]
];

const run = promisify(execFile);
for (const [source, output, x, y, width, height] of crops) {
  const file = resolve(publicRoot, source);
  await run('ffmpeg', ['-y', '-i', file, '-vf', `crop=${width}:${height}:${x}:${y}`, '-frames:v', '1', resolve(publicRoot, 'images/zoom', output)]);
}
