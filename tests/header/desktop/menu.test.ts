import { expect, test } from '@playwright/test'

test.describe('Desktop Menu', () => {
  test.beforeEach(async ({ page }) => {
    // Set viewport to desktop size (> 448px) so desktop menu is visible
    await page.setViewportSize({ width: 1024, height: 800 })
    await page.goto('/')
  })

  test('desktop menu is visible', async ({ page }) => {
    // Menu should be visible
    const menu = page.getByTestId('desktop-menu')
    await expect(menu).toBeVisible()
  })
})
