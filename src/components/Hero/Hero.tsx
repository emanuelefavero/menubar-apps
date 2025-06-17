import BackgroundImage from '@/components/shared/BackgroundImage'
import LinkAttribution from '@/components/shared/LinkAttribution'
import { heroAppName } from '@/config/hero'
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

      <LinkAttribution
        name='Paul Pastourmatzis'
        href='https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg'
      />
    </section>
  )
}
