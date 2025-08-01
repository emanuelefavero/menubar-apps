import { routes } from '@/data/routes'
import { expect, test } from '@playwright/test'

routes.forEach((route) => {
  test(`${route.label} page has one h1`, async ({ page }) => {
    await page.goto(route.href)

    const h1s = page.locator('h1')
    await expect(h1s).toHaveCount(1)
  })
})
