import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',
  timeout: 45_000,
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      maxDiffPixelRatio: 0.005,
    },
  },
  use: {
    ...devices['Desktop Chrome'],
    baseURL: 'http://127.0.0.1:6006',
    colorScheme: 'light',
    locale: 'en-US',
    timezoneId: 'UTC',
  },
  webServer: {
    command: 'pnpm storybook --ci --no-open',
    url: 'http://127.0.0.1:6006',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  reporter: process.env.CI ? [['line']] : [['list']],
});
