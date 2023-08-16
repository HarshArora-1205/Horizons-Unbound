import './globals.css';
import type { Metadata } from 'next';
import { Alegreya } from 'next/font/google';

const alegreya = Alegreya({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Horizons Unbound',
  description: "Horizons Unbound: Beyond Time's Edge. Explore tomorrow's mysteries, today. Unveil visions, spark curiosity, and dive into the uncharted with captivating chronicles and visionary insights.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={alegreya.className}>
        {children}
        </body>
    </html>
  )
}
