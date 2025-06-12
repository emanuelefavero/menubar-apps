import Link from 'next/link'
import './not-found.css'

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1 className='flex flex-col items-center'>
        <span>404</span>
        Page Not Found
      </h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href='/'>← Go back to Home</Link>
    </div>
  )
}
