import fs from 'fs/promises'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

export async function getMarkdownAsHtml(filePath: string) {
  // TIP: Markdown files are stored in the `src/content` directory
  const contentDir = path.join(process.cwd(), 'src', 'content')

  const fullPath = path.join(contentDir, filePath)
  const fileContents = await fs.readFile(fullPath, 'utf8')

  const processedContent = await remark().use(html).process(fileContents)
  return processedContent.toString()
}
