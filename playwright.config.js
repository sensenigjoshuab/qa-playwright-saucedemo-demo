// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['html'], ['list']] : [['list']],
  use: {
    baseURL: 'https://www.saucedemo.com/',
    ...(process.env.CI ? { channel: 'chrome' } : {}),
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  }
});
