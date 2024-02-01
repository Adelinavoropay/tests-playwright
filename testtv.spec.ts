import { test, expect } from '@playwright/test';

test('tv', async ({ page }) => {
  await page.goto('https://sweet.tv/uk');
  await page.locator('#header-navigation-block').getByRole('link', { name: 'ТБ' }).click();
  await page.locator('li').filter({ hasText: 'Новий Канал HD' }).getByRole('link').click();
  await page.getByRole('link', { name: 'Фільми' }).click();
  await page.locator('#swt1-item1 > .movie__item-link').click();
  await page.getByRole('img', { name: 'share' }).click();
  await page.getByText('Скопіювати посилання на фільм').click();
  await page.getByLabel('Close').click();
});