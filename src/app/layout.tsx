import Header from '@/components/Header/Header'
import { description, title } from '@/config/metadata'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: title,
  description: description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* OverflowBackgroundTop */}
        <div
          className='pointer-events-none fixed top-0 right-0 left-0 z-[-9999] h-1/2 bg-linear-to-r from-(--bg-image-top-left) to-(--bg-image-top-right)'
          aria-hidden='true'
        />

        <Header />
        <main>{children}</main>

        {/* OverflowBackgroundBottom */}
        <div
          className='pointer-events-none fixed right-0 bottom-0 left-0 z-[-9999] h-1/2 bg-(--background)'
          aria-hidden='true'
        />
      </body>
    </html>
  )
}
