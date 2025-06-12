import { description, title } from '@/config/metadata'
import { expect, test } from '@playwright/test'

// Check that the page has a title (tab title, not h1)
test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(new RegExp(title, 'i'))
})

// Check that the page has a description meta tag
test('has description meta tag', async ({ page }) => {
  await page.goto('/')

  const descriptionMeta = page.locator('meta[name="description"]')
  await expect(descriptionMeta).toHaveAttribute(
    'content',
    new RegExp(description, 'i'),
  )
})
