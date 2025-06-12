import { expect, test } from '@playwright/test'

// Check that the page has a header element
test.describe('header presence', () => {
  test('on homepage', async ({ page }) => {
    await page.goto('/')

    const header = page.locator('header')

    await expect(header).toBeVisible()
  })
})
