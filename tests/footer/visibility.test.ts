import { expect, test } from '@playwright/test'

test('homepage has footer', async ({ page }) => {
  await page.goto('/')

  const footer = page.locator('footer')
  await expect(footer).toBeVisible()
})
