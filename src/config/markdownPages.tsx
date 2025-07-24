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

// TIP: Don't forget to add the corresponding markdown file in the `src/content` directory

// * Add Markdown Pages Here
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
  'privacy-policy': {
    titleMetadata: `${title} - Privacy Policy`,
    descriptionMetadata: `How we handle your data at ${title}.`,
    imageSrc: '/images/privacy-policy-icon.png',
    imageAlt: 'Privacy Policy Icon',
    description: (
      <>
        Your <strong>privacy</strong> matters to us. Read below to learn more
      </>
    ),
  },
}

export function getMarkdownPage(slug: string) {
  return markdownPages[slug] || null
}
