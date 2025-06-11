import Logo from './Logo'
import Menu from './Menu'

export default function Component() {
  return (
    <header className='flex items-center justify-between bg-red-500 px-2'>
      <Logo />
      <Menu />
    </header>
  )
}
