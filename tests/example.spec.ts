import { title } from '@/config/metadata'
import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(new RegExp(title, 'i'))
})
