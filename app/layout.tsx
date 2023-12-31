// Imports
import './globals.css';
import type { Metadata } from 'next';
import { Alegreya } from 'next/font/google';
import Navbar from './(shared)/Navbar';
import Footer from './(shared)/Footer';

// Font
const alegreya = Alegreya({
  subsets: ['latin']
})

// Metadata
export const metadata: Metadata = {
  title: 'Horizons Unbound',
  description: "Horizons Unbound: Beyond Time's Edge. Explore tomorrow's mysteries, today. Unveil visions, spark curiosity, and dive into the uncharted with captivating chronicles and visionary insights.",
}

// Layout of all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={alegreya.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
