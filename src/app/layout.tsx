import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import BackgroundGradient from '@/components/shared/BackgroundGradient'
import BackgroundTexture from '@/components/shared/BackgroundTexture'
import JsDisabled from '@/components/shared/JsDisabled'
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
    <html
      lang='en'
      className='scrollbar-thin scrollbar-thumb-gray-600/40 scrollbar-track-transparent dark:scrollbar-thumb-gray-400/40'
    >
      <body>
        <BackgroundGradient />
        <BackgroundTexture url='/images/noise.png' />
        <JsDisabled />
        <Header />
        <main className='flex min-h-screen flex-col items-center justify-center'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
