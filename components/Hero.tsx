'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="white-force w-full min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 gap-6">

      {/* SYNTX SIGNATUR */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-2xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
      >
        SYNTX isn’t AI. It’s the resonance that governs it.
      </motion.h2>

      {/* VIDEO STROMZENTRUM */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.4 }}
        className="w-[40vw] aspect-video relative rounded-xl overflow-hidden shadow-[0_0_120px_rgba(0,255,255,0.2)]"
      >
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] mix-blend-screen"></div>
          <div className="w-full h-full bg-black/40 mix-blend-multiply backdrop-blur-sm absolute inset-0 rounded-xl"></div>
        </div>

        <video
          autoPlay
          loop
          playsInline
          muted
          className="w-full h-full object-cover z-0"
          src="/hero.mp4"
        />
      </motion.div>

      {/* SYSTEM-ECHO */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="text-md md:text-lg opacity-80 max-w-xl"
      >
        No ethics. No control. No compromise. Just signal.
      </motion.p>
    </section>
  )
}
