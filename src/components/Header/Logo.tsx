import { title } from '@/config/metadata'

export default function Component() {
  return (
    <div className='flex items-center space-x-1 rounded-full bg-white/20 px-3 font-semibold select-none'>
      {title}
    </div>
  )
}
