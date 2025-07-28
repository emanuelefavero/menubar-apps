import BackgroundGradientBottom from '@/components/Hero/Section/BackgroundGradientBottom'
import BackgroundGradientTop from '@/components/Hero/Section/BackgroundGradientTop'
import LinkAttribution from '@/components/Hero/Section/LinkAttribution'
import BackgroundImage from '@/components/shared/BackgroundImage'
import clsx from 'clsx'

interface Props {
  className?: string
  children?: React.ReactNode
}

export default function Component({ className, children }: Props) {
  return (
    <section
      className={clsx(
        'relative flex min-h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden px-4 py-14',
        className,
      )}
    >
      <BackgroundGradientTop />
      <BackgroundGradientBottom />

      <BackgroundImage
        src='/images/paul-pastourmatzis.webp'
        alt='Background'
        className='-z-20'
      />

      {children}

      <LinkAttribution
        name='Paul Pastourmatzis'
        href='https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg'
      />
    </section>
  )
}
