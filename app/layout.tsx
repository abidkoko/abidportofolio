import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { LanguageProvider } from "@/context/language-context"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Muhamad Abid Maulana | Electronics Engineer',
  description: 'Portfolio profesional Muhamad Abid Maulana - Electronics Engineer, Embedded Systems Developer, dan IoT Developer.',
  keywords: ['Electronics Engineer', 'IoT Developer', 'Embedded Systems', 'Arduino', 'ESP32', 'PCB Design', 'Indonesia'],
  authors: [{ name: 'Muhamad Abid Maulana' }],
  creator: 'Muhamad Abid Maulana',
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">

        {/* 🔥 INI FIX UTAMA */}
        <LanguageProvider>
          {children}
        </LanguageProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}

      </body>
    </html>
  )
}