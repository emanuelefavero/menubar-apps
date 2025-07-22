import { description, pageMetadata, title } from '@/config/metadata'
import { expect, test } from '@playwright/test'

test('homepage has correct metadata', async ({ page }) => {
  await page.goto('/')

  // Check title
  await expect(page).toHaveTitle(new RegExp(title, 'i'))

  // Check description meta tag
  const descriptionMeta = page.locator('meta[name="description"]')
  await expect(descriptionMeta).toHaveAttribute(
    'content',
    new RegExp(description, 'i'),
  )
})

test('terms of use page has correct metadata', async ({ page }) => {
  await page.goto('/terms-of-use')

  // Check title
  await expect(page).toHaveTitle(
    new RegExp(pageMetadata['terms-of-use'].title, 'i'),
  )

  // Check description meta tag
  const descriptionMeta = page.locator('meta[name="description"]')
  await expect(descriptionMeta).toHaveAttribute(
    'content',
    new RegExp(pageMetadata['terms-of-use'].description, 'i'),
  )
})
