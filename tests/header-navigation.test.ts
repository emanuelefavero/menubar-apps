import { title } from '@/config/metadata'
import { expect, test } from '@playwright/test'

const headerLinks = [
  { label: title, path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Support', path: '/support' },
]

test.describe('Header Navigation', () => {
  for (const link of headerLinks) {
    test(`navigates to ${link.label} page when clicking header link`, async ({
      page,
    }) => {
      await page.goto('/')
      const navLink = page.getByRole('link', {
        name: new RegExp(`^${link.label}$`, 'i'),
      })
      await expect(navLink).toBeVisible()
      await navLink.click()
      await expect(page).toHaveURL(link.path)
    })
  }
})
