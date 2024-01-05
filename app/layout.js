import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './provider'
import ToasterContext from '@/context/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Codify',
  description: 'A Cloud-Based-IDE',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}><Providers><ToasterContext/>{children}</Providers></body>
    </html>
    
  )
}
