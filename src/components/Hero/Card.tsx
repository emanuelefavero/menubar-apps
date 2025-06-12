import { heroAppName } from '@/config/hero'
import './Card.css'

export default function Component() {
  return (
    <div className='card'>
      <h1 className='text-4xl'>{heroAppName}</h1>
    </div>
  )
}
