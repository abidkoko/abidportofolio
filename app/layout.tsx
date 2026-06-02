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
      <body className="font-sans antialiased relative z-10">

        <LanguageProvider>
          {children}
        </LanguageProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}

        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_60%)]" />

          <div className="absolute inset-0 bg-white/5" />
        </div>

      </body>
    </html>
  )
}