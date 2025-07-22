import { description, pageMetadata, title } from '@/config/metadata'
import { expect, test, type Page } from '@playwright/test'

// * Helpers
// Helper to check page title
async function expectTitle(page: Page, title: string) {
  await expect(page).toHaveTitle(new RegExp(title, 'i'))
}

// Helper to check meta description
async function expectDescription(page: Page, description: string) {
  const foundDescription = page.locator('meta[name="description"]')
  await expect(foundDescription).toHaveAttribute(
    'content',
    new RegExp(description, 'i'),
  )
}

// * Tests
test('homepage has correct metadata', async ({ page }) => {
  await page.goto('/')
  await expectTitle(page, title)
  await expectDescription(page, description)
})

test('terms of use page has correct metadata', async ({ page }) => {
  const route = 'terms-of-use'
  await page.goto(`/${route}`)
  await expectTitle(page, pageMetadata[route].title)
  await expectDescription(page, pageMetadata[route].description)
})
