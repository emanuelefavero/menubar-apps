import { getMarkdownAsHtml } from '@/lib/markdown'

export default async function Page() {
  const html = await getMarkdownAsHtml('terms-of-use.md')

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} className='px-4 py-24' />
    </>
  )
}
