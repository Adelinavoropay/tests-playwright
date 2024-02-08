import { test, expect } from '@playwright/test';

test('add to cart', async ({ page }) => {

  await page.goto('https://prom.ua/',  { timeout: 30000 });
  await page.getByRole('link',{name:'Красота и здоровье'}).click();
  await page.locator('div:nth-child(19) > div > div:nth-child(6) > .MafxA > div > .VS-Ex').click();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Корзина' }).click();
  await page.waitForLoadState('load');
  await page.getByRole('button', { name: 'Оформить заказ'}).click();

 await page.getByTestId('phone_input').getByTestId('input_field_textbox').click();
 await page.getByTestId('phone_input').getByTestId('input_field_textbox').fill('+380 (98) 764-53-542');

 await page.getByTestId('last_name_block').getByTestId('input_field_textbox').click();
 await page.getByTestId('last_name_block').getByTestId('input_field_textbox').fill('Ноновна');

 await page.getByTestId('first_name_block').getByTestId('input_field_textbox').click();
 await page.getByTestId('first_name_block').getByTestId('input_field_textbox').fill('Валя');
 await page.getByTestId('save_btn').click();

 await page.getByText('Киев').click();
 await page.getByText('Выбери отделение').click();
 await page.getByPlaceholder('Введи номер отделения').click();
 await page.waitForLoadState('load');
 await page.getByText('№1: ул. Пироговский путь').click();
 await page.getByTestId('create_order_btn').click();
});