import HeaderLink from './HeaderLink'

export default function Component() {
  return (
    <nav>
      <ul className='flex space-x-4 select-none'>
        <li>
          <HeaderLink href='/about-us'>About Us</HeaderLink>
        </li>
        <li>
          <HeaderLink href='/support'>Support</HeaderLink>
        </li>
      </ul>
    </nav>
  )
}
