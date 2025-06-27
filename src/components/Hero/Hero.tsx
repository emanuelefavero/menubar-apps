'use client'

import BackgroundImage from '@/components/shared/BackgroundImage'
import { DraggableWithinViewport } from '@/components/shared/DraggableWithinViewport'
import LinkAttribution from '@/components/shared/LinkAttribution'
import LinkButton from '@/components/shared/LinkButton'
import { heroAppName } from '@/config/hero'
import Image from 'next/image'
import React from 'react'
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

      <DraggableWithinViewport className='w-full max-w-[400px]'>
        <Card className='animate-appear'>
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
            Your Tasks, Always Within Reach
          </p>

          {/* Line */}
          <div className='mt-2.5 h-[1px] w-full bg-white/20'></div>

          {/* Download button */}
          <LinkButton
            href='/images/menubar-tasks.png'
            className='mt-4'
            download
            aria-label='Download Menubar Tasks App'
            title='Download Menubar Tasks App'
            size='lg'
          >
            Download Now{' '}
            <span className='hidden 2xs:inline-block'>- 100% Free</span>
          </LinkButton>

          {/* Support button */}
          <LinkButton
            href='https://buymeacoffee.com/emanuelefavero'
            variant='secondary'
            className='mt-2.5'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Support on Buy Me a Coffee'
            title='Support on Buy Me a Coffee'
            size='lg'
          >
            Support the App <span aria-hidden='true'>☕</span>
          </LinkButton>
        </Card>
      </DraggableWithinViewport>

      <LinkAttribution
        name='Paul Pastourmatzis'
        href='https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg'
      />
    </section>
  )
}
