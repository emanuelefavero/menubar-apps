import { expect, test } from '@playwright/test'

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
    const openHamburger = page.getByLabel('Open menu', { exact: true })
    await expect(openHamburger).toBeVisible()
    await openHamburger.click()
    await page.waitForTimeout(300) // Wait for animation to finish

    // Menu should now be visible
    const menu = page.getByTestId('mobile-menu')
    await expect(menu).toBeVisible()

    // Close menu (simulate clicking hamburger again)
    const closeHamburger = page.getByLabel('Close menu', { exact: true })
    await expect(closeHamburger).toBeVisible()
    await closeHamburger.click()
    await expect(menu).not.toBeVisible()
  })

  test('clicking outside menu closes it', async ({ page }) => {
    // Click hamburger button to open menu
    const hamburger = page.getByLabel('Open menu', { exact: true })
    await expect(hamburger).toBeVisible()
    await hamburger.click()
    await page.waitForTimeout(300) // Wait for animation to finish

    // Menu should now be visible
    const menu = page.getByTestId('mobile-menu')
    await expect(menu).toBeVisible()

    // Click outside (top left corner)
    await page.mouse.click(10, 10)
    await expect(menu).not.toBeVisible()
  })
})
