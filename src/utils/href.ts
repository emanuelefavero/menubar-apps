export function isExternalHref(href: string): boolean {
  return /^(https?:\/\/|\/\/)/.test(href)
}

export function isEmailHref(href: string): boolean {
  return /^mailto:/.test(href)
}

export function isTelHref(href: string): boolean {
  return /^tel:/.test(href)
}

export function isNavigationHref(href: string): boolean {
  return !isExternalHref(href) && !isEmailHref(href) && !isTelHref(href)
}
