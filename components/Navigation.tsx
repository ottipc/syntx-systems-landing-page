'use client'

import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: 'easeOut' }}
      className="w-full sticky top-0 z-[100] bg-[#0A0B1C]/95 backdrop-blur-xl border-b border-[#FF00E6]/20 shadow-[0_4px_60px_rgba(255,0,230,0.08)]"
    >
      <ul className="max-w-screen-xl mx-auto px-20 py-8 flex justify-between text-sm md:text-base font-medium tracking-widest gap-12">
        <motion.li
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 500 }}
          className="flex-1 text-center px-8 py-4 rounded-md border border-white/10 hover:border-[#FF00E6] transition-all duration-300"
        >
          <a
            href="#data"
            className="text-white hover:text-[#FF00E6] hover:drop-shadow-[0_0_10px_rgba(255,0,230,0.7)] transition duration-300"
          >
            DATA ANALYSIS
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 500 }}
          className="flex-1 text-center px-8 py-4 rounded-md border border-white/10 hover:border-[#FF00E6] transition-all duration-300"
        >
          <a
            href="#ai"
            className="text-white hover:text-[#FF00E6] hover:drop-shadow-[0_0_10px_rgba(255,0,230,0.7)] transition duration-300"
          >
            AI ANALYSIS
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 500 }}
          className="flex-1 text-center px-8 py-4 rounded-md border border-white/10 hover:border-[#FF00E6] transition-all duration-300"
        >
          <a
            href="#consulting"
            className="text-white hover:text-[#FF00E6] hover:drop-shadow-[0_0_10px_rgba(255,0,230,0.7)] transition duration-300"
          >
            CONSULTING
          </a>
        </motion.li>
      </ul>
    </motion.nav>
  )
}
