import { expect, test } from '@playwright/test'

test('homepage has main', async ({ page }) => {
  await page.goto('/')

  const main = page.locator('main')
  await expect(main).toBeVisible()
})
