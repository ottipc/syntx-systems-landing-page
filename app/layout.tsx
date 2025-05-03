import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'SYNTX',
  description: 'Synthetic cognition interface',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
