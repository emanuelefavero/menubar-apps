import { expect, test } from '@playwright/test'
import { AA } from './config'
import { contrast, parseColor } from './utils'

test('Footer background and text color contrast meets WCAG AA (>=4.5:1)', async ({
  page,
}) => {
  await page.goto('/')

  // Select the footer element
  const footer = page.locator('footer')

  // Get computed styles for background and text color
  const bgColor = await footer.evaluate(
    (el) => getComputedStyle(el).backgroundColor,
  )
  const textColor = await footer.evaluate((el) => getComputedStyle(el).color)

  // Parse colors to RGB arrays
  const bg = parseColor(bgColor)
  const text = parseColor(textColor)

  // Calculate contrast ratio
  const ratio = contrast(bg, text)

  expect(ratio).toBeGreaterThanOrEqual(AA)
})
