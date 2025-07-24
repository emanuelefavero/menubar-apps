import { title } from '@/config/metadata'

interface PageData {
  [slug: string]: {
    titleMetadata: string
    descriptionMetadata: string
    imageSrc: string
    imageAlt: string
    description: React.ReactNode
  }
}

export const pageData: PageData = {
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

export function getPageData(slug: string) {
  return pageData[slug] || null
}
