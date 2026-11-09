import About from './components/About'
import BackToTop from './components/BackToTop'
import ClientBar from './components/ClientBar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Process from './components/Process'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Work from './components/Work'

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ClientBar />
        <Services />
        <Work />
        <About />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
