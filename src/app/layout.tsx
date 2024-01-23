import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Void Genesis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <div className="relative overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
