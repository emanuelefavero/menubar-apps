// Href types
type RelativeHref = `/${Lowercase<string>}`
type AbsoluteHref = `https://${string}` | `http://${string}`
type HashHref = `#${string}`
type QueryHref = `?${string}`
type MailHref = `mailto:${string}`
type Href = RelativeHref | AbsoluteHref | HashHref | QueryHref | MailHref

// Route type
interface Route {
  href: Href
  label: string
}
