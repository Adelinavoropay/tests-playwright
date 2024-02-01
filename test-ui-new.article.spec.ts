import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
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