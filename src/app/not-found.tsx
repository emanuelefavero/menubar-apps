import TestScroll from '@/components/__dev__/TestScroll'
import HeroSection from '@/components/Hero/Section/Section'
import BackgroundShadow from '@/components/shared/BackgroundShadow'
import LinkButton from '@/components/shared/LinkButton'

// TODO: Remove TestScroll component used for testing scrolling effect ↓

export default function NotFound() {
  return (
    <>
      <HeroSection className='text-center text-white'>
        <div className='relative'>
          <BackgroundShadow bgColor='bg-gray-900/20' blur='blur-3xl' />

          <div className='relative z-10 flex flex-col items-center gap-4 text-center'>
            <span className='text-4xl font-medium'>404</span>

            <h1 className='text-4xl font-bold text-shadow-[var(--text-shadow-lg)]'>
              Page Not Found
            </h1>

            <p className='text-lg text-shadow-[var(--text-shadow-sm)]'>
              Sorry, the page you are looking for does not exist.
            </p>

            <LinkButton className='mt-1'>← Go back to Home</LinkButton>
          </div>
        </div>
      </HeroSection>

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
