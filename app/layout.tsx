import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
  description: 'Portfolio profesional Muhamad Abid Maulana - Electronics Engineer, Embedded Systems Developer, dan IoT Developer. Spesialisasi dalam Arduino, ESP32, PCB Design, dan pengembangan sistem IoT.',
  keywords: ['Electronics Engineer', 'IoT Developer', 'Embedded Systems', 'Arduino', 'ESP32', 'PCB Design', 'Indonesia'],
  authors: [{ name: 'Muhamad Abid Maulana' }],
  creator: 'Muhamad Abid Maulana',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: 'Muhamad Abid Maulana | Electronics Engineer & IoT Developer',
    description: 'Portfolio profesional - Electronics Engineer, Embedded Systems Developer, dan IoT Developer',
    siteName: 'Muhamad Abid Maulana Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhamad Abid Maulana | Electronics Engineer & IoT Developer',
    description: 'Portfolio profesional - Electronics Engineer, Embedded Systems Developer, dan IoT Developer',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
