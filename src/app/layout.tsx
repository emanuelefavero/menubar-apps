import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
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
        <div
          className='fixed inset-0 -z-10 bg-repeat select-none'
          style={{
            backgroundImage: "url('/images/n1.png')",
            backgroundSize: '256px 256px',
          }}
          aria-hidden='true'
        />
        <Header />
        <main className='flex min-h-screen flex-col items-center justify-center'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
