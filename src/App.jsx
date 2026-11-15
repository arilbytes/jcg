import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Destinations from './components/Destinations'
import Imat from './components/Imat'
import Reviews from './components/Reviews'
import Location from './components/Location'
import CtaBand from './components/CtaBand'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="sheet">
          <Features />
          <Destinations />
        </div>
        <Imat />
        <Reviews />
        <Location />
        <CtaBand />
        <Stats />
      </main>
      <Footer />
    </>
  )
}
