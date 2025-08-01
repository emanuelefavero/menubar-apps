import { heroAppName } from '@/config/hero'
import { expect, test } from '@playwright/test'

test('homepage h1 has correct text', async ({ page }) => {
  await page.goto('/')

  const h1 = page.locator('h1')
  await expect(h1).toHaveText(new RegExp(heroAppName, 'i'))
})
