'use client'

import React from 'react'

type CyberCardProps = {
  title: string
  subtitle: string
}

export const CyberCard = ({ title, subtitle }: CyberCardProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.2)] hover:shadow-[0_0_80px_rgba(0,255,255,0.35)] transition-all duration-300 border border-cyan-400/30">
      {/* Hintergrund-Blur-Ebene */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl z-0 rounded-2xl" />

      {/* Inhalt */}
      <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full">
        <h3 className="text-3xl font-extrabold tracking-wide text-cyan-300 text-center mb-4 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]">
          {title}
        </h3>
        <p className="text-lg text-white/90 text-center leading-relaxed drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
