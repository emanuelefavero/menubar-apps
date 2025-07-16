import { title } from '@/config/metadata'
import { expect, test } from '@playwright/test'

test('Footer Logo is visible', async ({ page }) => {
  await page.goto('/')

  const footer = page.locator('footer')
  const logo = footer.getByText(title, { exact: false })

  await expect(logo).toBeVisible()
})
