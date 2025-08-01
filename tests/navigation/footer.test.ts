import { footerLinks } from '@/data/footerLinks'
import { expect, test } from '@playwright/test'

test.describe('Footer Navigation', () => {
  for (const link of footerLinks) {
    test(`navigates to ${link.label} page when clicking footer link`, async ({
      page,
    }) => {
      await page.goto('/')
      const footerLink = page.getByRole('link', {
        name: new RegExp(`^${link.label}$`, 'i'),
      })
      await expect(footerLink).toBeVisible()
      await footerLink.click()
      await expect(page).toHaveURL(link.href)
    })
  }
})
