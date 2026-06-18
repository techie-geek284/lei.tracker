import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)
ScrollTrigger.defaults({ markers: false })
window.addEventListener('load', () => ScrollTrigger.refresh())

import { Navbar } from './components/ui/Navbar'
import { PageLoader } from './components/ui/PageLoader'
import { CursorGlow } from './components/ui/CursorGlow'
import { HeroSection } from './components/sections/HeroSection'
import { StatsBar } from './components/sections/StatsBar'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { AISection } from './components/sections/AISection'
import { SegmentsSection } from './components/sections/SegmentsSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { PricingSection } from './components/sections/PricingSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { GlobeSection } from './components/sections/GlobeSection'
import { CTASection } from './components/sections/CTASection'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <div className="bg-[#0f172a] text-white overflow-x-hidden">
      <PageLoader />
      <CursorGlow />
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="stats">
          <StatsBar />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="ai">
          <AISection />
        </section>
        <section id="segments">
          <SegmentsSection />
        </section>
        <section id="howitworks">
          <HowItWorksSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="reviews">
          <TestimonialsSection />
        </section>
        <section id="security">
          <GlobeSection />
        </section>
        <section id="cta">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
