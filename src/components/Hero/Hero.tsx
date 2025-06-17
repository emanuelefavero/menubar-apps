import BackgroundImage from '@/components/shared/BackgroundImage'
import { heroAppName } from '@/config/hero'
import Link from 'next/link'
import Card from './Card'

export default function Component() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden pt-12'>
      <BackgroundImage
        src='/paul-pastourmatzis-unsplash.jpg'
        alt='Background'
        className='-z-10 object-cover object-center'
        priority
      />
      <Card>
        <h1 className='text-4xl'>{heroAppName}</h1>
      </Card>

      <div className='absolute right-4 bottom-4 rounded-full text-[0.6rem] text-white/70'>
        <span>Photo by</span>{' '}
        <Link
          href='https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg'
          target='_blank'
          rel='noopener noreferrer'
        >
          Paul Pastourmatzis
        </Link>
      </div>
    </section>
  )
}
