import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');
  await page.getByTestId('item-input').click();
  await page.getByTestId('item-input').fill('Added ITEM');
  await page.getByTestId('item-submit').click();
  const locator = page.getByTestId('item-list')
  await expect(locator).toContainText('Added ITEM')
  await page.getByTestId('item-remove-0').click();
  await expect(locator).not.toContainText('Setup tests')
});