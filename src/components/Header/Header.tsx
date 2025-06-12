import Logo from './Logo'
import Menu from './Menu'

export default function Component() {
  return (
    <header className='absolute top-0 z-50 flex w-full items-center justify-between px-2 py-[0.2rem] backdrop-blur-xl'>
      <Logo />
      <Menu />
    </header>
  )
}
