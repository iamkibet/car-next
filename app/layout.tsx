import { Footer, Navbar } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Car',
  description: 'Best Car Rental Service in the Market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative' />
      < Navbar />
        {children}
      < Footer />
    </html>
  )
}
