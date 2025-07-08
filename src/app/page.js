import Navigation from '../components/Navigation.jsx'
import Hero from '../components/sections/Hero.jsx'
import Services from '../components/sections/Services.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import Booking from '../components/sections/Booking.jsx'
import Footer from '../components/sections/Footer.jsx'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  )
}