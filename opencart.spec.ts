import { test, expect } from '@playwright/test';

test('register', async ({ page }) => {
  await page.waitForLoadState('load');
  await page.goto('http://opencart.qatestlab.net/index.php?route=account/register', { timeout: 10000 });

  await page.waitForLoadState('load');
  await page.getByText('First Name').click();
  const getByPlaceholder7 = 'First Name';
  await page.getByText('First Name').fill('Adel');

  await page.waitForLoadState('load');
  await page.getByText('Last Name').click();
  const getByPlaceholder8 = 'Last Name';
  await page.getByText('Last Name').fill('111111');

  await page.waitForLoadState('load');
  await page.getByPlaceholder('E-Mail', { exact: true }).click();
  const getByPlaceholder9 = 'E-Mail';
  await page.getByPlaceholder('E-Mail', { exact: true }).fill('gewg@greh.hre');

  await page.waitForLoadState('load');
  await page.getByPlaceholder('Telephone').click();
  const getByPlaceholder10 = 'Telephone';
  await page.getByPlaceholder('Telephone').fill('aaaaaaaaa');

  await page.waitForLoadState('load');
  await page.getByRole('group', { name: 'password' }).click();
  await page.getByPlaceholder('Password').click();
  const getByPlaceholder11 = 'Password';
  await page.getByPlaceholder('Password').fill('11111');

  await page.waitForLoadState('load');
  await page.getByLabel('Password Confirm').click();
  const getByPlaceholder12 = 'Password Confirm';
  await page.getByLabel('Password Confirm').fill('11111');

  await page.getByRole('radio').check();
  
  await page.getByRole('button', { name: 'Continue' }).click();
});


test('addtocart', async ({ page }) => {
  await page.waitForLoadState('load');

  await page.goto('http://opencart.qatestlab.net/index.php?route=product/product&product_id=35');
  await page.getByRole('link', { name: 'Best Friends' }).click();
  await page.locator('.caption > .btn-primary').first().click();
  await page.getByRole('button', { name: '' }).click();
  await page.waitForLoadState('load');
  await page.getByRole('link', { name: 'View Cart' }).click();
});
