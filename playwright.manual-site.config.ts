import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/manual',
  testMatch: 'site-preview.spec.ts',
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:5191/ROOMBANKER-PC/',
    viewport: { width: 1440, height: 900 }
  },
  webServer: {
    command: 'node scripts/start-manual-preview.mjs',
    url: 'http://localhost:5191/ROOMBANKER-PC/en/',
    reuseExistingServer: false,
    timeout: 120000
  },
  projects: [{ name: 'chromium', use: devices['Desktop Chrome'] }]
});
