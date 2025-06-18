import BackgroundImage from '@/components/shared/BackgroundImage'
import LinkAttribution from '@/components/shared/LinkAttribution'
import { heroAppName } from '@/config/hero'
import Image from 'next/image'
import Button from './Button'
import Card from './Card'

export default function Component() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12'>
      <BackgroundImage
        src='/images/paul-pastourmatzis-unsplash.jpg'
        alt='Background'
        className='-z-10 object-cover object-center'
        priority
      />

      <Card>
        {/* Icon */}
        <Image
          src='/images/menubar-tasks.png'
          alt='Logo'
          width={124}
          height={124}
          className='rounded-4xl shadow-md shadow-black/15'
          priority
        />

        {/* Title and description */}
        <h1 className='mt-12 text-3xl font-medium text-shadow-(--text-shadow-lg)'>
          {heroAppName}
        </h1>
        <p className='mt-2.5 text-lg text-shadow-(--text-shadow-sm)'>
          Your Tasks, Always Within Reach
        </p>

        {/* Line */}
        <div className='mt-2.5 h-[1px] w-full bg-white/20'></div>

        {/* Download button */}
        <Button
          href='/images/menubar-tasks.png'
          className='mt-4'
          download
          aria-label='Download Menubar Tasks App'
          title='Download Menubar Tasks App'
        >
          Download Now{' '}
          <span className='hidden 2xs:inline-block'>- 100% Free</span>
        </Button>

        {/* Support button */}
        <Button
          href='https://buymeacoffee.com/emanuelefavero'
          variant='secondary'
          className='mt-2.5'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Support on Buy Me a Coffee'
          title='Support on Buy Me a Coffee'
        >
          Support the App <span aria-hidden='true'>☕</span>
        </Button>
      </Card>

      <LinkAttribution
        name='Paul Pastourmatzis'
        href='https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg'
      />
    </section>
  )
}
