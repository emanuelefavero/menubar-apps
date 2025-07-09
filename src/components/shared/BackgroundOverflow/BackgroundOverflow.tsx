'use client'

// Dynamic import for client-side rendering (needed to fix glitchy refresh on page load)
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useViewportSize } from '@/hooks/useViewportSize'
import dynamic from 'next/dynamic'
const Top = dynamic(
  () => import('@/components/shared/BackgroundOverflow/Top'),
  {
    ssr: false,
  },
)
const Bottom = dynamic(
  () => import('@/components/shared/BackgroundOverflow/Bottom'),
  {
    ssr: false,
  },
)

// TIP: This component is used to create a background overflow effect at the top and bottom of the page since the Hero component has a different color at the top compared to the bottom of the page

export default function Component() {
  const { scrollY } = useScrollPosition()
  const { height } = useViewportSize()

  return (
    <>
      {/* Display Top component only when the user has not scrolled more than halfway */}
      {scrollY < height / 2 && <Top />}

      {/* Display Bottom component only when the user has scrolled more than halfway */}
      {scrollY > height / 2 && <Bottom />}
    </>
  )
}
