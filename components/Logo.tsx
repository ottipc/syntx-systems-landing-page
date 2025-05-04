'use client'

import Image from 'next/image'

type LogoProps = {
  size?: 'sm' | 'md' | 'xl'
  className?: string
}

const sizeMap = {
  sm: 'w-[40px] h-[40px]',
  md: 'w-[80px] h-[80px]',
  xl: 'w-[200px] h-[200px]',
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <div className={`relative ${sizeMap[size]} ${className}`}>
      <Image
        src="/Logo_trans.png"
        alt="SYNTX Logo"
        fill
        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.7)]"
        priority
      />
    </div>
  )
}
