import { getMarkdownAsHtml } from '@/lib/markdown'

export default async function Page() {
  const html = await getMarkdownAsHtml('src/app/terms-of-use/terms-of-use.md')

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} className='px-4 py-24' />
    </>
  )
}
