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
        'relative flex min-h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-t from-(--bg-image-bottom) via-(--bg-image-bottom)/50 via-10% to-transparent to-20% px-4 py-14',
        className,
      )}
    >
      <BackgroundGradientTop />

      <BackgroundImage
        src='/images/paul-pastourmatzis-unsplash.jpg'
        alt='Background'
        className='-z-10 object-cover object-center'
        priority
      />

      {children}

      <LinkAttribution
        name='Paul Pastourmatzis'
        href='https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg'
      />
    </section>
  )
}
