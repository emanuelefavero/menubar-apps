import { expect, test } from '@playwright/test'

test('homepage performance', async ({ page }) => {
  const start = Date.now()
  await page.goto('/')
  const end = Date.now()
  const duration = end - start

  console.log(`Page load time: ${duration} ms`)

  expect(duration).toBeLessThan(1000) // Adjust threshold as needed
})
