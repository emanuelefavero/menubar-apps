import { routes } from '@/data/routes'
import { expect, test } from '@playwright/test'

routes.forEach((route) => {
  test(`${route.label} page has main`, async ({ page }) => {
    await page.goto(route.href)

    const main = page.locator('main')
    await expect(main).toBeVisible()
  })
})
