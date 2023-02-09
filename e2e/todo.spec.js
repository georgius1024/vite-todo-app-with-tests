import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');
  await page.getByTestId('item-input').click();
  await page.getByTestId('item-input').fill('Added ITEM');
  await page.getByTestId('item-submit').click();
  expect('data-test-id=item-list').toContainText('Added ITEM')
  await page.getByTestId('item-remove-0').click();
  expect('data-test-id=item-list').not.toContainText('Setup tests')
});