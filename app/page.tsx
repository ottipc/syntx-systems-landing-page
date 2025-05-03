import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <Navigation />
      <Hero />
      <Footer />
    </div>
  )
}
