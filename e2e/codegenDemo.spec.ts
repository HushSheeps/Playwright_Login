import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.letskodeit.com/practice');
  await page.getByPlaceholder('Start Typing...').click();
  await page.getByPlaceholder('Start Typing...').fill('we');
  await page.getByText('WebDriverIO Automation').click();
  await page.locator('#bmwcheck').check();
  await page.locator('#benzcheck').check();
  await page.getByPlaceholder('Enter Your Name').click();
  await page.getByPlaceholder('Enter Your Name').fill('Kris');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Alert' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Open Window' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('combobox').selectOption('1604');
});