const { test, expect } = require('@playwright/test');

test('visits the app root url', async ({ page }) => {

  await page.route('/', async route => {
    const json = [{id: 1, title: 'mocked list item'}]
    await route.fulfill({json});
    expect('data-test-id=item-list').toContainText('mocked list item')
  });  
})
