import { heroAppName } from '@/config/hero'
import { expect, test } from '@playwright/test'

// Check that the page has only one h1
test('has one h1', async ({ page }) => {
  await page.goto('/')

  const h1s = page.locator('h1')
  await expect(h1s).toHaveCount(1)
})

// Check that the h1 has the correct text
test('h1 has correct text', async ({ page }) => {
  await page.goto('/')

  const h1 = page.locator('h1')
  await expect(h1).toHaveText(new RegExp(heroAppName, 'i'))
})
