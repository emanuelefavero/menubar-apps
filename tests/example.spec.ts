import { heroAppName } from '@/config/hero'
import { title } from '@/config/metadata'
import { expect, test } from '@playwright/test'

// ? The title here is the tab title, not the h1
test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(new RegExp(title, 'i'))
})

// Check that the h1 has the correct text
test('h1 has correct text', async ({ page }) => {
  await page.goto('/')

  const h1 = page.locator('h1')

  await expect(h1).toHaveText(new RegExp(heroAppName, 'i'))
})
