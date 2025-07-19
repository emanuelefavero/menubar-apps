'use client'

import DraggableSnapBack from '@/components/motion/DraggableSnapBack'
import LinkButton from '@/components/shared/LinkButton'
import { heroAppDescription, heroAppName } from '@/config/hero'
import Image from 'next/image'
import Card from './Card'
import EasterEgg from './EasterEgg/EasterEgg'
import HeroSection from './Section/Section'
import { useDragStore } from './store/useDragStore'

export default function Component() {
  const { setIsDragging } = useDragStore()

  return (
    <HeroSection>
      <EasterEgg className='animate-appear'>
        <DraggableSnapBack
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          <Card>
            {/* Icon */}
            <Image
              src='/images/menubar-tasks.png'
              alt='Logo'
              width={124}
              height={124}
              className='rounded-4xl shadow-md shadow-black/15'
              priority
              draggable={false}
            />

            {/* Title and description */}
            <h1 className='mt-12 text-3xl font-medium text-shadow-(--text-shadow-lg)'>
              {heroAppName}
            </h1>
            <p className='mt-2.5 text-lg text-shadow-(--text-shadow-sm)'>
              {heroAppDescription}
            </p>

            {/* Line */}
            <div className='mt-2.5 h-[1px] w-full bg-white/20'></div>

            {/* Download button */}
            <LinkButton
              theme='light'
              size='lg'
              href='/images/menubar-tasks.png'
              className='mt-4'
              download
              aria-label='Download Menubar Tasks App'
              title='Download Menubar Tasks App'
              draggable={false}
            >
              Download Now{' '}
              <span className='hidden 2xs:inline-block'>- 100% Free</span>
            </LinkButton>

            {/* Support button */}
            <LinkButton
              size='lg'
              href='https://buymeacoffee.com/emanuelefavero'
              variant='secondary'
              className='mt-2.5'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Support on Buy Me a Coffee'
              title='Support on Buy Me a Coffee'
              draggable={false}
            >
              Support the App <span aria-hidden='true'>☕</span>
            </LinkButton>
          </Card>
        </DraggableSnapBack>
      </EasterEgg>
    </HeroSection>
  )
}
