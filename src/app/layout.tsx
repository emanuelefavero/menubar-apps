import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import BackgroundOverflow from '@/components/shared/BackgroundOverflow/BackgroundOverflow'
import { description, title } from '@/config/metadata'
import type { Metadata } from 'next'
import './globals.css'

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
      <body>
        <Header />
        <main>{children}</main>
        <BackgroundOverflow />
        <Footer />
      </body>
    </html>
  )
}
