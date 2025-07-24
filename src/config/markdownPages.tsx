import { title } from '@/config/metadata'

interface MarkdownPage {
  [slug: string]: {
    titleMetadata: string
    descriptionMetadata: string
    imageSrc?: string
    imageAlt?: string
    description?: React.ReactNode
  }
}

export const markdownPages: MarkdownPage = {
  'terms-of-use': {
    titleMetadata: `${title} - Terms of Use`,
    descriptionMetadata: `Terms and conditions for using ${title} services.`,
    imageSrc: '/images/terms-of-use-icon.png',
    imageAlt: 'Terms of Use Icon',
    description: (
      <>
        Here{"'"}s some <strong className='font-medium'>important info</strong>{' '}
        about using our services
      </>
    ),
  },
}

export function getMarkdownPage(slug: string) {
  return markdownPages[slug] || null
}
