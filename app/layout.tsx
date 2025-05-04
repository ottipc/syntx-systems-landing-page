import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'SYNTX',
  description: 'Synthetic cognition interface',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white">
        {/* FIXED LOGO OBEN RECHTS */}
        <div className="fixed top-4 right-4 z-50 w-[60px] h-[60px]">
          <img
            src="/Logo_trans.png"
            alt="SYNTX Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          />
        </div>
        {children}
      </body>
    </html>
  )
}
