import { test, expect } from '@playwright/test';
import { getAuthData } from './utils.regist';

  test('register', async ({page})=> {
  const authData = getAuthData();

  await page.goto('https://demo.learnwebdriverio.com/register/');

  await page.getByPlaceholder('Username').fill(authData.username);
  await page.getByPlaceholder('Email').fill(authData.email); 
  await page.getByPlaceholder('Password').fill(authData.password); 
  await page.getByRole('button', { name: 'Sign up' }).click();
});