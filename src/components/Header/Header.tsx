import BackgroundShadow from '@/components/shared/BackgroundShadow'
import Logo from './Logo'
import DesktopMenu from './Menu/Desktop/Menu'
import MobileMenu from './Menu/Mobile/Menu'

export default function Component() {
  // TIP: We need to add `backdrop-blur` in the `before` pseudo element because the `MobileMenu` will also have a `backdrop-blur` effect, and nested backdrop-blur effects are not supported in CSS. @see https://github.com/tailwindlabs/tailwindcss/discussions/15103

  return (
    <header className='absolute top-0 z-50 w-full animate-appear-slower'>
      <div className='relative flex items-center justify-between px-2 py-[0.2rem] before:absolute before:inset-0 before:-z-10 before:backdrop-blur-xl'>
        <BackgroundShadow bgColor='bg-white/30' blur='blur-xl' />
        <Logo />
        <div>
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
