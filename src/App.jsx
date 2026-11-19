import About from './components/About'
import Community from './components/Community'
import Contact from './components/Contact'
import Credentials from './components/Credentials'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nav from './components/Nav'
import ScrollProgress from './components/ui/ScrollProgress'
import { LightboxProvider } from './components/ui/Lightbox'

export default function App() {
  return (
    <LightboxProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ScrollProgress />
      <Nav />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Community />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </LightboxProvider>
  )
}
