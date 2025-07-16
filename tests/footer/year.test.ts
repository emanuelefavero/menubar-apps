import { expect, test } from '@playwright/test'

const year = new Date().getFullYear().toString()

test('Footer displays the current year', async ({ page }) => {
  await page.goto('/')

  const footer = page.locator('footer')
  const yearElement = footer.getByText(year, { exact: false })

  await expect(yearElement).toBeVisible()
})
