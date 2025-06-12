import Hero from '@/components/Hero/Hero'
import { title } from '@/config/metadata'

export default function Home() {
  return (
    <>
      <h1 className='text-4xl'>{title}</h1>

      <Hero />
    </>
  )
}
