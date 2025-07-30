import LinkExternal from '@/components/shared/LinkExternal'
import { devName, devUrl } from '@/config/metadata'

export default function DeveloperLink() {
  return (
    <div className='text-center text-xs'>
      <span className='text-(--foreground-secondary)'>Developed by </span>
      <LinkExternal
        href={devUrl}
        aria-label={`Visit ${devName}'s website`}
        title={`Visit ${devName}'s website`}
      >
        {devName}
      </LinkExternal>
    </div>
  )
}
