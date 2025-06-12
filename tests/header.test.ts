import { expect, test } from '@playwright/test'

// Check that the page has a header
test('has header', async ({ page }) => {
  await page.goto('/')

  const header = page.locator('header')

  await expect(header).toBeVisible()
})
