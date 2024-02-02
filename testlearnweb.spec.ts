import { test, expect } from '@playwright/test';
import { getAuthData } from './utils.regist';
import { LoginPage } from './LoginPage';

  test('register', async ({page})=> {
  const authData = getAuthData();

  await page.goto('https://demo.learnwebdriverio.com/register/');

  await page.getByPlaceholder('Username').fill(authData.username);
  await page.getByPlaceholder('Email').fill(authData.email); 
  await page.getByPlaceholder('Password').fill(authData.password); 
  await page.getByRole('button', { name: 'Sign up' }).click();
});

test('newarticle', async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/login/');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('adelinavoropay@gmail.com');

  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Adel2000!');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'New Article' }).click();
  await page.getByPlaceholder('Article Title').click();
  await page.getByPlaceholder('Article Title').fill('Adel new');

  await page.getByPlaceholder('What\'s this article about?').click();
  await page.getByPlaceholder('What\'s this article about?').fill('about me');

  await page.getByPlaceholder('Write your article (in').click();
  await page.getByPlaceholder('Write your article (in').fill('Lorem ipsum');
  
  await page.getByPlaceholder('Enter tags').click();
  await page.getByPlaceholder('Enter tags').fill('#new');
  await page.getByRole('button', { name: 'Publish Article' }).click();
});


test('test', async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/settings', { timeout: 10000 });
  await page.getByRole('button', { name: 'Or click here to logout.' }).click();
});
