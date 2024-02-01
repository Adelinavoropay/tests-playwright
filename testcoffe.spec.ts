import { test, expect } from '@playwright/test';

test('12345', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByLabel('Name').fill('Adel');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('fqwf@reh.gre');
  await page.getByRole('button', { name: 'Submit' }).click();
});
