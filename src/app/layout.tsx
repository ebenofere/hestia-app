import type { Metadata } from 'next'
import { Inter, Andada_Pro } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] });

const Andada = Andada_Pro({
  display: "swap",
  subsets:["latin"],
  weight:["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: 'Hestia',
  description: 'Designing spaces you will love to be in',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Andada.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
