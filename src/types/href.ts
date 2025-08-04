export type RelativeHref = `/${Lowercase<string>}`
export type AbsoluteHref = `https://${string}` | `http://${string}`
export type HashHref = `#${string}`
export type QueryHref = `?${string}`
export type MailHref = `mailto:${string}`
export type Href = RelativeHref | AbsoluteHref | HashHref | QueryHref | MailHref
