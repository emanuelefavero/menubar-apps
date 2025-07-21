import fs from 'fs/promises'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

export async function getMarkdownAsHtml(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath)
  const fileContents = await fs.readFile(fullPath, 'utf8')

  const processedContent = await remark().use(html).process(fileContents)
  return processedContent.toString()
}
