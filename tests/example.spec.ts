import { heroAppName } from '@/config/hero'
import { description, title } from '@/config/metadata'
import { expect, test } from '@playwright/test'

// Check that the page has a title (tab title, not h1)
test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(new RegExp(title, 'i'))
})

// Check that the page has a description meta tag
test('has description meta tag', async ({ page }) => {
  await page.goto('/')
  const descriptionMeta = page.locator('meta[name="description"]')
  await expect(descriptionMeta).toHaveAttribute(
    'content',
    new RegExp(description, 'i'),
  )
})

// Check that the page has a header
test('has header', async ({ page }) => {
  await page.goto('/')

  const header = page.locator('header')

  await expect(header).toBeVisible()
})

// Check that the page has only one h1
test('has one h1', async ({ page }) => {
  await page.goto('/')

  const h1s = page.locator('h1')

  await expect(h1s).toHaveCount(1)
})

// Check that the h1 has the correct text
test('h1 has correct text', async ({ page }) => {
  await page.goto('/')

  const h1 = page.locator('h1')

  await expect(h1).toHaveText(new RegExp(heroAppName, 'i'))
})

// Check that the page has an header element
test('has header element', async ({ page }) => {
  await page.goto('/')

  const header = page.locator('header')

  await expect(header).toBeVisible()
})

// Check that the page has a main element
test('has main element', async ({ page }) => {
  await page.goto('/')

  const main = page.locator('main')

  await expect(main).toBeVisible()
})
