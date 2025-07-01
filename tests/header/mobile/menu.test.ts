import { expect, test } from '@playwright/test'

// const mobileMenuLinks = [
//   { label: 'Home', path: '/' },
//   { label: 'About Us', path: '/about-us' },
//   { label: 'Support', path: '/support' },
// ]

test.describe('Mobile Menu', () => {
  test.beforeEach(async ({ page }) => {
    // Set viewport to mobile size (<= 448px) so mobile menu is visible
    await page.setViewportSize({ width: 400, height: 800 })
    await page.goto('/')
  })

  test('hamburger button is visible and menu opens/closes', async ({
    page,
  }) => {
    // Click hamburger button to open menu
    const hamburger = page.getByLabel('Open menu', { exact: true })
    await expect(hamburger).toBeVisible()
    await hamburger.click()
    await page.waitForTimeout(300) // Wait for animation to finish

    // Menu should now be visible
    const menu = page.getByTestId('mobile-menu')
    await expect(menu).toBeVisible()

    // Close menu (simulate clicking hamburger again)
    await hamburger.click()
    await expect(menu).not.toBeVisible()
  })

  // for (const link of mobileMenuLinks) {
  //   test(`navigates to ${link.label} via mobile menu`, async ({ page }) => {
  //     const hamburger = page.getByRole('button', { name: /menu|open/i })
  //     await hamburger.click()
  //     const navLink = page.getByRole('link', { name: new RegExp(`^${link.label}$`, 'i') })
  //     await expect(navLink).toBeVisible()
  //     await navLink.click()
  //     await expect(page).toHaveURL(link.path)
  //   })
  // }

  // test('clicking outside menu closes it', async ({ page }) => {
  //   const hamburger = page.getByRole('button', { name: /menu|open/i })
  //   await hamburger.click()
  //   const menu = page.locator('nav[role="menu"], [data-testid="mobile-menu"]')
  //   await expect(menu).toBeVisible()
  //   // Click outside (top left corner)
  //   await page.mouse.click(10, 10)
  //   await expect(menu).not.toBeVisible()
  // })
})
