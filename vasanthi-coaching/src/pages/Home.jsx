import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import WhoIHelp from '../components/WhoIHelp'
import Programs from '../components/Programs'
import Transformation from '../components/Transformation'
import Testimonials from '../components/Testimonials'
import Booking from '../components/Booking'
import ContactForm from '../components/ContactForm'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import ParallaxStrip from '../components/ParallaxStrip'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location.hash])
  return (
    <>
      <Helmet>
        <title>Write Your Own Script | Life Coaching</title>
        <meta name="description" content="Transformational life coaching for women and young adults. Rebuild confidence, find clarity and rise into your purpose." />
        <link rel="canonical" href="https://www.writeyourownscript.in/" />
        <meta property="og:title" content="Write Your Own Script | Life Coaching" />
        <meta property="og:description" content="Transformational life coaching for women and young adults. Rebuild confidence, find clarity and rise into your purpose." />
        <meta property="og:url" content="https://www.writeyourownscript.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.writeyourownscript.in/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.writeyourownscript.in/og-image.png" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />

      <ParallaxStrip
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
        quote="Every woman deserves to live a life she's proud of — not one she's simply surviving."
      />

      <WhoIHelp />

      <Programs />
      <Transformation />
      <Testimonials />

      <ParallaxStrip
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        quote="You didn't come this far to only come this far. Rise, woman. Rise."
      />

      <Booking />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
