import { title } from '@/config/metadata'
import { headerLinks } from '@/data/headerLinks'
import { expect, test } from '@playwright/test'

const links = [{ label: title, href: '/' }, ...headerLinks]

test.describe('Header Navigation', () => {
  for (const link of links) {
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
})
