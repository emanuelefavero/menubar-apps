import { heroAppName } from '@/config/hero'
import './Card.css'

export default function Component() {
  return (
    <div className='card relative flex min-h-[480px] w-full max-w-[440px] items-center justify-center rounded-[2.5rem] bg-(--card-background) text-center shadow-(--card-shadow) backdrop-blur-[6px] select-none'>
      <h1 className='text-4xl'>{heroAppName}</h1>
    </div>
  )
}
