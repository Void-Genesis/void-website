import type { Metadata } from 'next'
import './globals.css'

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
      <body className="">{children}</body>
    </html>
  )
}
