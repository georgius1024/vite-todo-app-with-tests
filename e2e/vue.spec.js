const { test, expect } = require('@playwright/test');

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {

  await page.route('/', async route => {
    const json = [{id: 1, title: 'item 1'}]
    await route.fulfill({json});
    expect('data-test-id=item-list').toContainText('item 1')
  });  
  // await page.goto('/');

  // await expect(page.locator('div.greetings > h1')).toHaveText('You did it!');
})
