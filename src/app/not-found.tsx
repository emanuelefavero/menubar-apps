import LinkButton from '@/components/shared/LinkButton'
import './not-found.css'

export default function NotFound() {
  return (
    <div className='not-found relative flex min-h-screen flex-col items-center justify-center gap-4 overflow-hidden pt-12 text-center text-white'>
      <h1 className='flex flex-col items-center gap-4 text-4xl font-bold text-shadow-(--text-shadow-lg)'>
        <span className='text-4xl font-medium'>404</span>
        Page Not Found
      </h1>
      <p className='text-lg text-shadow-(--text-shadow-sm)'>
        Sorry, the page you are looking for does not exist.
      </p>
      <LinkButton>← Go back to Home</LinkButton>
    </div>
  )
}
