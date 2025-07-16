import { devName, title } from '@/config/metadata'
import { expect, test } from '@playwright/test'

const year = new Date().getFullYear().toString()

const viewports = [
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'mobile', width: 390, height: 844 }, // iPhone 14 Pro
]

for (const viewport of viewports) {
  test(`Footer is visible and displays content correctly on ${viewport.name}`, async ({
    page,
  }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    })
    await page.goto('/')

    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    // Check logo, developer link, and year are visible in the footer
    await expect(footer.getByText(title, { exact: false })).toBeVisible()
    await expect(footer.getByText(devName, { exact: false })).toBeVisible()
    await expect(footer.getByText(year, { exact: false })).toBeVisible()
  })

  test(`Footer divider visibility on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    })
    await page.goto('/')

    const footer = page.locator('footer')
    const divider = footer.locator('span[role="presentation"]')

    // Check that the divider is visible on desktop and hidden on mobile
    if (viewport.name === 'desktop') {
      await expect(divider).toBeVisible()
    } else {
      await expect(divider).toBeHidden()
    }
  })
}
