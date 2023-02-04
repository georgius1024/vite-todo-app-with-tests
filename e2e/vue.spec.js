const { test, expect } = require('@playwright/test');
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Todo App');
})
