import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.route('/', async route => {
    const json = []
    await route.fulfill({json});
    await page.getByTestId('item-input').click();
    await page.getByTestId('item-input').fill('New Item');
    await page.getByTestId('item-submit').click();
    expect('data-test-id=item-list').toContainText('New Item')
    await page.getByText('&times;').click();
    expect('data-test-id=item-list').not.toContainText('New Item')
  });  
});