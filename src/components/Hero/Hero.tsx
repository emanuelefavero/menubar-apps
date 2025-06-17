import BackgroundImage from '@/components/shared/BackgroundImage'
import LinkAttribution from '@/components/shared/LinkAttribution'
import { heroAppName } from '@/config/hero'
import Image from 'next/image'
import Card from './Card'

export default function Component() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-12'>
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
          className='mb-12'
          priority
        />

        <h1 className='text-3xl font-medium'>{heroAppName}</h1>
      </Card>

      <LinkAttribution
        name='Paul Pastourmatzis'
        href='https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg'
      />
    </section>
  )
}
