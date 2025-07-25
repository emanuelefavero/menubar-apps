import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import BackgroundNoise from '@/components/shared/BackgroundNoise'
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
        <BackgroundNoise url='/images/noise.png' />
        <Header />
        <main className='flex min-h-screen flex-col items-center justify-center'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
