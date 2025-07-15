import DeveloperLink from './DeveloperLink'
import Divider from './Divider'
import Logo from './Logo'

export default function Component() {
  return (
    <footer className='flex w-full flex-col items-center justify-center bg-(--background) px-4 py-6 text-(--foreground) 5xs:px-6'>
      <div className='flex w-full flex-wrap items-center justify-center gap-4'>
        <Logo />
        <Divider />
        <DeveloperLink />
      </div>
    </footer>
  )
}
