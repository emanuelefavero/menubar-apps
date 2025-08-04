import { title } from '@/config/metadata'
import { headerLinks } from '@/data/headerLinks'
import type { Route } from '@/types/route'
import { expect, test } from '@playwright/test'

const desktopLinks: Route[] = [{ label: title, href: '/' }, ...headerLinks]

test.describe('Header Navigation', () => {
  for (const link of desktopLinks) {
    test(`navigates to ${link.label} page when clicking header link`, async ({
      page,
    }) => {
      await page.goto('/')
      const navLink = page.getByRole('link', {
        name: new RegExp(`^${link.label}$`, 'i'),
      })
      await expect(navLink).toBeVisible()
      await navLink.click()
      await expect(page).toHaveURL(link.href)
    })
  }

  for (const link of headerLinks) {
    test(`navigates to ${link.label} via mobile menu`, async ({ page }) => {
      await page.setViewportSize({ width: 400, height: 800 })
      await page.goto('/')

      // Click hamburger button to open menu
      const hamburger = page.getByLabel('Open menu', { exact: true })
      await expect(hamburger).toBeVisible()
      await hamburger.click()
      await page.waitForTimeout(300) // Wait for animation to finish

      // Click the link in the mobile menu
      const navLink = page.getByRole('link', {
        name: new RegExp(`^${link.label}$`, 'i'),
      })
      await expect(navLink).toBeVisible()
      await navLink.click()

      // Verify navigation
      await expect(page).toHaveURL(link.href)
    })
  }
})
