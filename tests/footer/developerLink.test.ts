import { devName, devUrl } from '@/config/metadata'
import { expect, test } from '@playwright/test'

test('DeveloperLink is visible and links to the correct external profile', async ({
  page,
}) => {
  await page.goto('/')

  // Find the link by accessible name (aria-label or text)
  const link = page.getByRole('link', { name: new RegExp(devName, 'i') })

  await expect(link).toBeVisible()
  await expect(link).toHaveAttribute('href', devUrl)
  await expect(link).toHaveAttribute('target', '_blank')
})

test('DeveloperLink opens in a new tab', async ({ page }) => {
  await page.goto('/')

  // Find the link by accessible name (aria-label or text)
  const link = page.getByRole('link', { name: new RegExp(devName, 'i') })

  // Click the link and check if it opens in a new tab
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    link.click(),
  ])

  // Normalize URLs by removing trailing slashes for comparison
  const normalize = (url: string) => url.replace(/\/?$/, '')

  expect(normalize(newPage.url())).toBe(normalize(devUrl))
})
