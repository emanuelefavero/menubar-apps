import BackgroundShadow from '@/components/shared/BackgroundShadow'
import Logo from './Logo'
import Menu from './Menu'

export default function Component() {
  return (
    <header className='absolute top-0 z-50 w-full'>
      <div className='relative flex items-center justify-between px-2 py-[0.2rem] backdrop-blur-xl'>
        <BackgroundShadow bgColor='bg-white/30' blur='blur-xl' />
        <Logo />
        <Menu />
      </div>
    </header>
  )
}
