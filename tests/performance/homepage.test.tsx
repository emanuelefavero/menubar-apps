import { expect, test } from '@playwright/test'

// * Test for homepage load time
test('homepage load time', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Load time is only tested in Chromium')

  // Calculate the load time in milliseconds
  const start = Date.now()
  await page.goto('/')
  const end = Date.now()
  const duration = end - start

  // Log and assert the load time
  console.log('Page load time:', duration, 'ms')
  expect(duration).toBeLessThan(1000) // Adjust threshold as needed
})

// * Test for First Contentful Paint (FCP) and Largest Contentful Paint (LCP)
test('homepage FCP and LCP', async ({ page, browserName }) => {
  test.skip(
    browserName !== 'chromium',
    'FCP and LCP metrics are only tested in Chromium',
  )

  await page.goto('/')

  // Wait for the page to be fully loaded
  await page.waitForLoadState('networkidle')

  // Get FCP and LCP metrics from the browser
  const metrics = await page.evaluate(() => {
    const perfEntries = performance.getEntriesByType('paint')
    const fcp = perfEntries.find(
      (e) => e.name === 'first-contentful-paint',
    )?.startTime

    // LCP is a bit more complex, but can be accessed via PerformanceObserver
    return new Promise<{ fcp?: number; lcp?: number }>((resolve) => {
      let lcp: number | undefined
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            lcp = entry.startTime
          }
        }
        resolve({ fcp, lcp })
      }).observe({ type: 'largest-contentful-paint', buffered: true })

      setTimeout(() => resolve({ fcp, lcp }), 1000)
    })
  })

  // Log and assert FCP and LCP metrics
  console.log('FCP:', metrics.fcp, 'ms')
  console.log('LCP:', metrics.lcp, 'ms')
  expect(metrics.fcp).toBeLessThan(1000) // Adjust threshold as needed
  expect(metrics.lcp).toBeLessThan(1000) // Adjust threshold as needed
})
