import BackgroundImage from '@/components/shared/BackgroundImage'
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
      <Card />
    </section>
  )
}
