import TestScroll from '@/components/__dev__/TestScroll'
import BackgroundGradientTop from '@/components/shared/BackgroundGradientTop'
import BackgroundImage from '@/components/shared/BackgroundImage'
import BackgroundShadow from '@/components/shared/BackgroundShadow'
import LinkAttribution from '@/components/shared/LinkAttribution'
import LinkButton from '@/components/shared/LinkButton'

// TODO: Remove TestScroll component used for testing scrolling effect ↓

export default function NotFound() {
  return (
    <>
      <div className='relative flex min-h-screen flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-t from-(--bg-image-bottom) via-(--bg-image-bottom)/50 via-10% to-transparent to-20% px-4 py-14 text-center text-white'>
        <BackgroundGradientTop />

        <BackgroundImage
          src='/images/paul-pastourmatzis-unsplash.jpg'
          alt='Background'
          className='-z-10 object-cover object-center'
          priority
        />

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

        <LinkAttribution
          name='Paul Pastourmatzis'
          href='https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg'
        />
      </div>

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
