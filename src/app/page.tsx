import TestScroll from '@/components/__dev__/TestScroll'
import Hero from '@/components/Hero/Hero'

// TODO: Remove TestScroll component used for testing scrolling effect ↓

export default function Home() {
  return (
    <>
      <Hero />

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
