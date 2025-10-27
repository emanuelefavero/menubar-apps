# MenuBar Apps - Copilot Instructions

## Project Overview

A Next.js marketing website for MenuBar Apps, lightweight macOS applications that run in the menu bar. The site showcases the primary app (MenuBar Tasks) with interactive hero sections, downloadable content, and markdown-based pages (About Us, Support, Terms, Privacy).

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Zustand, Motion (animations), Remark (markdown), Vitest (unit tests), Playwright (e2e tests).

---

## Architecture & Data Flow

### Component Structure

- **`src/components/`** - Organized by feature with shared utilities:
  - `Hero/` - Main landing hero with draggable card (uses `useDragStore` for state)
  - `Header/` & `Footer/` - Navigation and global links
  - `shared/` - Reusable UI components (buttons, backgrounds, animations)
  - `motion/` - Animation primitives (e.g., `DraggableSnapBack`)
  - `__dev__/` - Development-only components (e.g., `TestScroll`)

### Data Organization

- **`src/data/`** - Static route and link definitions (typed as `Route[]`, see `headerLinks.ts`)
- **`src/config/`** - App constants and metadata (hero name, site title, developer info)
- **`src/content/`** - Markdown files rendered via `getMarkdownAsHtml()` in dynamic routes

### Client vs Server

- Components marked `'use client'` for interactivity (Hero, draggable elements)
- Server-side markdown rendering in `src/lib/markdown.ts` using `remark` + `remark-html`
- Dynamic routes via `(markdown)/[slug]/` pattern for content pages

---

## Critical Developer Workflows

### Development & Testing

```bash
npm run dev        # Start dev server (localhost:3000)
npm test           # Unit tests with Vitest (jsdom environment)
npm run e2e        # Playwright e2e tests (tests/ directory)
npm run e2e:ui     # Interactive Playwright UI
npm run e2e:debug  # Debug mode with step-through
npm run lint       # ESLint (extends next/core-web-vitals + next/typescript)
```

**Test Patterns:**

- Unit tests co-located with components (`.test.tsx`)
- Vitest configured with jsdom; mocks Next.js modules (`next/navigation`)
- Playwright tests in `tests/` directory; base URL `http://127.0.0.1:3000`
- Example: Mock `usePathname` in Footer tests to avoid null errors in `useIsActiveLink` hook

### Bundle Analysis

```bash
npm run analyze    # Generates bundle analysis with @next/bundle-analyzer
```

### Build & Deployment

```bash
npm run build      # Production build
npm run start      # Production server
```

---

## Project-Specific Conventions

### Naming & File Organization

- **Components:** PascalCase exports as default (e.g., `Hero.tsx`, `Card.tsx`)
- **Hooks:** `use*` prefix, co-located in `src/hooks/`, exported as named exports with JSDoc
- **Types:** Minimal interfaces in `src/types/` (e.g., `Route`, `Href` for type safety)
- **Data:** Constants in `src/data/` and `src/config/` (read-only const arrays, often with `as const`)

### Styling & CSS Classes

- **Tailwind CSS v4** with custom theme values (CSS variables like `--text-shadow-lg`)
- **Class Utilities:** Use `cn()` from `src/lib/utils.ts` for merging Tailwind classes with `clsx` + `tailwind-merge`
  - Alternative `cx()` for simple concatenation without merging (for performance)
- **CVA (class-variance-authority):** Define component variants (see `LinkButton.tsx` for theme/size/variant pattern)
- **Scrollbar Styling:** `scrollbar-thin scrollbar-thumb-gray-600/40` in `globals.css`
- **Custom Inset Shadows:** Use inline Tailwind like `inset-shadow-sm`, `inset-shadow-white`

### State Management

- **Zustand stores:** `src/components/Hero/store/useDragStore.ts` pattern
  - Minimal, feature-scoped stores (e.g., tracking drag state for interactions)
  - Export hooks directly; keep stores co-located with features

### Hooks & Performance

- **Event Listeners:** Use `throttle` from `lodash-es` (e.g., scroll events throttled to ~60fps)
- **Passive Event Listeners:** `{ passive: true }` for scroll handlers
- **Cleanup:** Always unsubscribe in useEffect cleanup (see `useScrollPosition`)
- **Mocking in Tests:** Mock Next.js hooks like `usePathname` to prevent test errors

### Accessibility & Attributes

- **Images:** Use Next.js `Image` component with `priority`, `alt`, `draggable={false}`, `aria-hidden='true'` for decorative elements
- **Links:** Provide `aria-label` and `title` attributes for clarity
- **Download Links:** Set `download` prop on link anchors; use `href` to image/file paths
- **Dark Mode:** Use `dark:` Tailwind prefix for theme variants (see `LinkButton.tsx`)

---

## Integration Points & Key Dependencies

### Next.js Specific

- **Dynamic Routes:** `(markdown)/[slug]/page.tsx` pattern for parameterized pages
- **Metadata:** Exported from `src/config/metadata.ts` (title, description)
- **Image Optimization:** Always use `next/image` Image component with proper props
- **Layout Nesting:** Root layout includes Header, main, Footer; nested layouts in `(markdown)` group

### Markdown Processing

- Markdown files in `src/content/` (e.g., `about-us.md`, `privacy-policy.md`)
- Processed on-demand via `getMarkdownAsHtml()` with Remark
- Rendered in dynamic routes; file path parameter matches markdown filename

### Motion & Animations

- **Motion Library:** `motion` v12+ for animations; used in `DraggableSnapBack` component
- **Animate Classes:** `animate-appear` in Tailwind (custom or via Motion)
- **Drag State:** Synced with Zustand store for cross-component awareness

### ESLint & Code Quality

- **Config:** `eslint.config.mjs` extends `next/core-web-vitals` + `next/typescript`
- No additional rules beyond Next.js defaults; relies on TypeScript strict mode

---

## Common Patterns & Examples

### Type-Safe Routes

```typescript
// src/types/route.ts
export interface Route {
  href: Href
  label: string
}

// src/data/headerLinks.ts
export const headerLinks: readonly Route[] = [
  { href: '/about-us', label: 'About Us' },
]
```

### CVA Component with Compound Variants

```typescript
// LinkButton uses theme + variant compound variants for light/dark modes
const variants = cva([baseStyles], {
  compoundVariants: [
    { variant: 'primary', theme: 'light', class: 'bg-white/80 ...' },
    { variant: 'primary', theme: 'dark', class: 'bg-gray-800 ...' },
  ],
})
```

### Throttled Hook

```typescript
// useScrollPosition throttles scroll events to ~60fps using lodash
const throttledScroll = throttle(handleScroll, 16)
window.addEventListener('scroll', throttledScroll, { passive: true })
```

### Test with Mocked Next.js Module

```typescript
// Mock usePathname to prevent null errors
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}))
```

---

## Gotchas & Tips

1. **Development Components:** Check `process.env.NODE_ENV === 'development'` before rendering dev-only components (e.g., `TestScroll`)
2. **Markdown File Paths:** Keep slugs in URL routes matching markdown filenames exactly
3. **Zustand Store Cleanup:** Zustand automatically handles subscriptions; no manual cleanup needed for stores
4. **Passive Event Listeners:** Already used in scroll hooks; crucial for performance with many listeners
5. **Image Dragging:** Set `draggable={false}` on interactive images to prevent browser drag behavior conflicting with motion drag handlers
6. **TextShadow CSS:** Custom CSS variable `--text-shadow-lg` applied via className; ensure postcss processes CSS variables
7. **Test Isolation:** Always mock child components in component tests to isolate the unit under test (see Footer test)
