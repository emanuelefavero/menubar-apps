import Logo from './Logo'
import Menu from './Menu'

export default function Component() {
  return (
    <header className='flex items-center justify-between px-2 py-[0.2rem]'>
      <Logo />
      <Menu />
    </header>
  )
}
