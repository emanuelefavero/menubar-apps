import clsx from 'clsx'

// TIP: This component is used to create a background overflow effect at the top and bottom of the page since the Hero component has a different color at the top compared to the bottom of the page

interface Props {
  topClassName?: string
  bottomClassName?: string
}

export default function Component({ topClassName, bottomClassName }: Props) {
  return (
    <>
      {/* Top */}
      <div
        className={clsx(
          'pointer-events-none fixed top-0 right-0 left-0 z-[-9999] h-1/2 bg-linear-to-r from-(--bg-image-top-left) to-(--bg-image-top-right)',
          topClassName,
        )}
        aria-hidden='true'
      />

      {/* Bottom */}
      <div
        className={clsx(
          'pointer-events-none fixed right-0 bottom-0 left-0 z-[-9999] h-1/2 bg-(--background)',
          bottomClassName,
        )}
        aria-hidden='true'
      />
    </>
  )
}
