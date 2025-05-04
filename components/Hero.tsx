'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="white-force w-full min-h-screen grid grid-rows-[auto_auto_auto_auto_auto_auto] gap-12 px-6 pt-32 text-center place-items-center relative z-10">

      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="row-start-1 w-[300px]"
      >
        <img
          src="/Logo_trans.png"
          alt="SYNTX Logo"
          className="w-[200px] h-[200px] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        />
      </motion.div>

      {/* SLOGAN */}
        <div className="relative row-start-2 flex items-center justify-center">
            {/* Animierter Hintergrund */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
                className="absolute w-[140%] h-[160%] bg-[#111933] blur-[120px] rounded-full z-0"
            />

            {/* Der eigentliche Text */}
            <motion.h2
                initial={{ opacity: 0, y: -100, x: 100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.015, rotate: 0.2 }}
                whileTap={{ scale: 0.985 }}
                className="text-[60px] md:text-[84px] leading-snug tracking-[0.25em] font-extrabold text-white drop-shadow-[0_0_25px_#111933] italic z-10"
            >
                SYNTX isn’tAI. It’s the resonance that governs it.
            </motion.h2>
        </div>

        {/* MODUL-NAVIGATION */}
      {/*<motion.div*/}
      {/*  initial={{ opacity: 0, y: 10 }}*/}
      {/*  animate={{ opacity: 1, y: 0 }}*/}
      {/*  transition={{ delay: 0.6, duration: 1 }}*/}
      {/*  className="row-start-3 flex justify-center gap-20"*/}
      {/*>*/}
      {/*  {[*/}
      {/*    { label: 'DATA ANALYSIS', href: '#data' },*/}
      {/*    { label: 'AI ANALYSIS', href: '#ai' },*/}
      {/*    { label: 'CONSULTING', href: '#consulting' },*/}
      {/*  ].map((item) => (*/}
      {/*    <motion.a*/}
      {/*      key={item.href}*/}
      {/*      href={item.href}*/}
      {/*      whileHover={{ scale: 1.08 }}*/}
      {/*      transition={{ type: 'spring', stiffness: 400 }}*/}
      {/*      className="px-8 py-4 border border-white/10 rounded-md text-white text-sm md:text-base font-semibold tracking-wider hover:text-[#FF00E6] hover:border-[#FF00E6] hover:drop-shadow-[0_0_10px_rgba(255,0,230,0.6)] transition-all duration-300"*/}
      {/*    >*/}
      {/*      {item.label}*/}
      {/*    </motion.a>*/}
      {/*  ))}*/}
      {/*</motion.div>*/}

      {/* VIDEO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 1.2 }}
        className="row-start-4 w-[30vw] aspect-video rounded-xl overflow-hidden shadow-[0_0_100px_rgba(0,255,255,0.15)]"
      >
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] mix-blend-screen"></div>
          <div className="w-full h-full bg-black/40 mix-blend-multiply backdrop-blur-sm absolute inset-0 rounded-xl"></div>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover z-0"
          src="/hero.mp4"
        />
      </motion.div>

      {/* SUBLINE */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="row-start-5 text-md md:text-lg opacity-90 max-w-xl"
      >
        No ethics. No control. No compromise. Just signal.
      </motion.p>
    </section>
  )
}
