import { expect, mergeExpects, test } from '@playwright/test'
import { getAuthData } from './utils';
import { LoginPage } from './LoginPage';

test('auth via ui - basic scenario', async ({page})=> {

  const authData = getAuthData();

  await page.goto('https://demo.learnwebdriverio.com/login/');

  await page.getByPlaceholder('Email').fill(authData.email); 
  await page.getByPlaceholder('Password').fill(authData.password); 
  await page.click('//button'); 
  await expect(page.locator('[href=\'/@adelinavoropay/\']')).toBeVisible({ timeout: 3000 });
});

//база

test('auth via ui - pom scenario', async ({page})=> {
  
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo()
  await loginPage.login();
  await expect(page.locator('[href=\'/@adelinavoropay/\']')).toBeVisible({ timeout: 3000 });
});