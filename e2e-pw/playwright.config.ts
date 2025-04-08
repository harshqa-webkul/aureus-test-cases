import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: "./tests",

  timeout: 30 * 1000,

  expect: { timeout: 20 * 1000 },

  outputDir: "./test-results",

  fullyParallel: false,

  workers: 1,

  forbidOnly: !!process.env.CI,

  retries: 0,

  reportSlowTests: null,

  reporter: [
    [
      "html",
      {
        outputFolder: "./playwright-report",
      },
    ],
  ],
  use: {
    baseURL: `http://127.0.0.1:8000`,
    screenshot: { mode: "only-on-failure", fullPage: true },
    video: "retain-on-failure",
    trace: "retain-on-failure",
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
