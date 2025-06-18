import BackgroundImage from '@/components/shared/BackgroundImage'
import LinkAttribution from '@/components/shared/LinkAttribution'
import { heroAppName } from '@/config/hero'
import Image from 'next/image'
import Link from 'next/link'
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
        <Image
          src='/images/menubar-tasks.png'
          alt='Logo'
          width={124}
          height={124}
          className='rounded-4xl shadow-md shadow-black/15'
          priority
        />

        <h1 className='mt-12 text-3xl font-medium text-shadow-(--text-shadow-lg)'>
          {heroAppName}
        </h1>
        <p className='mt-2.5 text-lg text-shadow-(--text-shadow-sm)'>
          Your Tasks, Always Within Reach
        </p>

        {/* Line */}
        <div className='mt-2.5 h-[1px] w-full bg-white/20'></div>

        {/* Download button */}
        <Link
          href='/images/menubar-tasks.png'
          className='mt-4 inline-block w-full rounded-full bg-white/80 px-4 py-2 text-lg font-medium text-gray-800 no-underline shadow-2xs inset-shadow-sm shadow-black/25 inset-shadow-white transition duration-250 hover:bg-white active:scale-[97%]'
          download
          aria-label='Download Menubar Tasks App'
          title='Download Menubar Tasks App'
        >
          Download Now{' '}
          <span className='hidden 2xs:inline-block'>- 100% Free</span>
        </Link>

        {/* Support button */}
        <Link
          href='https://buymeacoffee.com/emanuelefavero'
          className='mt-2.5 inline-block w-full rounded-full border-b border-white/20 bg-black/10 px-4 py-2 text-lg font-medium text-white no-underline shadow-md inset-shadow-[0_2px_2px_0_rgba(0,0,0,0.6)] inset-shadow-black/60 transition duration-250 hover:bg-gray-500/5 active:scale-[97%]'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Support on Buy Me a Coffee'
          title='Support on Buy Me a Coffee'
        >
          Support the App <span aria-hidden='true'>☕</span>
        </Link>
      </Card>

      <LinkAttribution
        name='Paul Pastourmatzis'
        href='https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg'
      />
    </section>
  )
}
