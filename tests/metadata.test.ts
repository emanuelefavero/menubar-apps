import { markdownPages } from '@/config/markdownPages'
import { description, title } from '@/config/metadata'
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

// Loop through each markdown page and check metadata
for (const route of Object.keys(markdownPages)) {
  test(`${route} page has correct metadata`, async ({ page }) => {
    await page.goto(`/${route}`)
    await expectTitle(page, markdownPages[route].titleMetadata)
    await expectDescription(page, markdownPages[route].descriptionMetadata)
  })
}
