import { getMarkdownAsHtml } from '@/lib/markdown'

export default async function Page() {
  const html = await getMarkdownAsHtml('terms-of-use.md')

  return (
    <>
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className='prose max-w-screen-lg px-4 py-24 lg:prose-lg dark:prose-invert'
      />
    </>
  )
}
