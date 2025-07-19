import TestScroll from '@/components/__dev__/TestScroll'
import Hero from '@/components/Hero/Hero'
import BackgroundOverflow from '@/components/shared/BackgroundOverflow/BackgroundOverflow'

// TODO: Remove TestScroll component used for testing scrolling effect ↓

export default function Home() {
  return (
    <>
      <Hero />
      <BackgroundOverflow />

      {/* This is a test scroll component for development purposes */}
      {process.env.NODE_ENV === 'development' && (
        <>
          <TestScroll />
          <TestScroll />
        </>
      )}
    </>
  )
}
