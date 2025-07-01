import { expect, test } from '@playwright/test'

test('homepage has header', async ({ page }) => {
  await page.goto('/')

  const header = page.locator('header')
  await expect(header).toBeVisible()
})
