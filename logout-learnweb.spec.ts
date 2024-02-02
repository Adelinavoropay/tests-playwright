import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/settings', { timeout: 10000 });
  await page.getByRole('button', { name: 'Or click here to logout.' }).click();
});