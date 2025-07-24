export default function MarkdownLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='max-w-screen-lg px-4 py-24'>{children}</div>
}
