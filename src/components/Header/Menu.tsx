import Link from './Link'

export default function Component() {
  return (
    <nav>
      <ul className='flex space-x-4 select-none'>
        <li>
          <Link href='/about-us'>About Us</Link>
        </li>
        <li>
          <Link href='/support'>Support</Link>
        </li>
      </ul>
    </nav>
  )
}
