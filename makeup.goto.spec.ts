import { test, expect } from '@playwright/test';
import { waitForDebugger } from 'inspector';

test('addtocart', async ({ page }) => {
  await page.goto('https://makeup.com.ua/', { timeout: 10000 });
  await page.waitForLoadState('load');
  const locator = page.locator('text="Парфумерія, косметика Calvin Klein CK IN2U Her - Туалетна вода"');

  await page.waitForLoadState('load');
  await page.locator('label').filter({ hasText: '150ml' });

});
    

test('order', async ({ page }) => {
  await page.waitForLoadState('load');
  await page.goto('https://makeup.com.ua/ua/product/977/', { timeout: 10000 });
  await page.getByText('Купити', { exact: true }).click();

  await page.getByText('Оформити замовлення').click();

  await page.getByText('Особисті дані').click();

  await page.waitForLoadState('load');
  await page.getByText('Ваше ім\'я*').click();
  const getByPlaceholder3 = 'Ваше ім\'я*';
  await page.getByText('Ваше ім\'я*').fill('Adel');
  

  await page.waitForLoadState('load');
  await page.getByText('Ваше прізвище*').click();
  await page.getByPlaceholder('Ваше прізвище*').fill('Тест');

  await page.getByText('Телефон*').click();
  await page.getByPlaceholder('Телефон*').fill('+380987654654');
  
  await page.waitForLoadState('load');
  await page.getByText('E-mail?',{ exact: true }).click();
  const getByPlaceholder2 = 'E-mail?';
  await page.getByText('E-mail?').fill('dwf@fewf.fewf');

  await page.getByText('Далі').click();

  await page.waitForLoadState('load');
  await page.getByLabel('Місто*').click();
  await page.getByLabel('Місто*').fill('Київ');

  await page.waitForLoadState('load');
  await page.getByPlaceholder('Варіанти доставки*').click();
  const getByPlaceholder17 = 'Варіанти доставки*';
  await page.getByText('Безкоштовно кур\'єром (0 ₴)').click();

  await page.waitForLoadState('load');
  await page.getByPlaceholder('Вулиця*').click();
  await page.getByPlaceholder('Вулиця*').fill('гер');
  await page.getByText('алея Героїв Небесної Сотні').click();

  await page.getByText('Будинок*').click();
  await page.getByPlaceholder('Будинок*').fill('13');

  await page.getByPlaceholder('Кв').click();
  await page.getByPlaceholder('Кв').fill('40');

  await page.getByRole('button', { name: 'Оформити замовлення' }).click();
});