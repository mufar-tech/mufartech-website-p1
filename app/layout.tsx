import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mufar Technologies - Unified Business Software Ecosystem',
  description: 'Mufar Technologies provides a comprehensive suite of business applications including Forms, Inventory, Payroll, Billing, Tasks, CRM, and AI-powered solutions. Streamline your operations with our unified platform.',
  keywords: ['business software', 'SaaS', 'inventory management', 'payroll', 'CRM', 'forms', 'billing', 'task management'],
  authors: [{ name: 'Mufar Technologies' }],
  openGraph: {
    title: 'Mufar Technologies - Unified Business Software Ecosystem',
    description: 'Streamline your business operations with our integrated suite of enterprise applications.',
    type: 'website',
  },
  icons: {
    icon: '/mufar_favicon.png',
    shortcut: '/mufar_favicon.png',
    apple: '/mufar_favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
