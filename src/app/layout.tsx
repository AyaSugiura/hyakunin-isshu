import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '百人一首 de asobo',
  description: '百人一首で遊ぶアプリです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head></head>
      <body>
        <div className='header'>
          <h1>百人一首 であそぼ</h1>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}
