import Link from './Link'

export default function Component() {
  return (
    <nav className='group flex -space-x-2 select-none'>
      <Link href='/about-us'>About Us</Link>
      <Link href='/support'>Support</Link>
    </nav>
  )
}
