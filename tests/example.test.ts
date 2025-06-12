import { expect, test } from '@playwright/test'

// Check that the page has a main element
test('has main element', async ({ page }) => {
  await page.goto('/')

  const main = page.locator('main')

  await expect(main).toBeVisible()
})
