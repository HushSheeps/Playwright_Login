import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.letskodeit.com/practice');
  await page.locator('#multiple-select-example').selectOption('orange');
  await page.getByRole('button', { name: 'Disable' }).click();
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.frameLocator('iframe[name="iframe-name"]').getByRole('link', { name: 'HOME', exact: true }).click();
  await page.frameLocator('iframe[name="iframe-name"]').locator('#course-list div').filter({ hasText: 'Anil $199 Selenium WebDriver' }).nth(3).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Tab' }).click();
  const page1 = await page1Promise;
});