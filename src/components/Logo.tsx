import { titlePrefix, titleSuffix } from '@/config/metadata'

export default function Component() {
  return (
    <div className='select-none'>
      {titlePrefix} <span>{titleSuffix}</span>
    </div>
  )
}
