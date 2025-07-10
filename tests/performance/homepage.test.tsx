import { expect, test } from '@playwright/test'

test.describe('Homepage Performance', () => {
  test.beforeEach(async ({ browserName }) => {
    // Only run performance tests in Chromium
    test.skip(
      browserName !== 'chromium',
      'Performance tests are only run in Chromium',
    )
  })

  // * Load time
  test('load time', async ({ page }) => {
    // Calculate the load time in milliseconds
    const start = Date.now()
    await page.goto('/')
    const end = Date.now()
    const duration = end - start

    // Log and assert the load time
    console.log('Page load time:', duration, 'ms')
    expect(duration).toBeLessThan(1000) // Adjust threshold as needed
  })

  // * First Contentful Paint (FCP) and Largest Contentful Paint (LCP)
  test('FCP and LCP', async ({ page }) => {
    // Only run in development mode
    test.skip(
      process.env.NODE_ENV !== 'development',
      'FCP and LCP tests are only run in development mode',
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

  // * No console errors
  test('has no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (err) => errors.push(err.message))
    page.on('console', (msg) => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        errors.push(msg.text())
      }
    })

    await page.goto('/')
    expect(errors).toEqual([])
  })
})
