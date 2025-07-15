import { title } from '@/config/metadata'

export default function Logo() {
  const year = new Date().getFullYear()

  return (
    <span className='flex items-center gap-2 text-sm'>
      <span className='text-center font-semibold 4xs:text-left'>{title}</span>
      <span className='hidden text-(--foreground-secondary) 4xs:inline-block'>
        &copy; {year}
      </span>
    </span>
  )
}
