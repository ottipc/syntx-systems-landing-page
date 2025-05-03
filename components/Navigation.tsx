'use client'

export default function Navigation() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-black/80 backdrop-blur-md py-4 px-8 flex justify-center gap-10 text-white text-lg font-semibold shadow-[0_0_40px_rgba(0,0,0,0.3)]">
      <a href="#data" className="hover:text-syntxGreen transition-all duration-300 uppercase">Data Analysis</a>
      <a href="#ai" className="hover:text-syntxPink transition-all duration-300 uppercase">AI Analysis</a>
    </nav>
  )
}
