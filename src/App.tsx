import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)
ScrollTrigger.defaults({ markers: false })
window.addEventListener('load', () => ScrollTrigger.refresh())

// Landing page sections
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

// Shared layout
import { PageLayout } from './layouts/PageLayout'

// Product pages
import { FeaturesPage } from './pages/FeaturesPage'
import { AIPage } from './pages/AIPage'
import { IntegrationsPage } from './pages/IntegrationsPage'
import { ChangelogPage } from './pages/ChangelogPage'
import { PricingPage } from './pages/PricingPage'

// Company pages
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { CareersPage } from './pages/CareersPage'
import { PressPage } from './pages/PressPage'
import { ContactPage } from './pages/ContactPage'

// Legal pages
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { SecurityPage } from './pages/SecurityPage'
import { GDPRPage } from './pages/GDPRPage'
import { CookiePolicyPage } from './pages/CookiePolicyPage'

const LandingPage = () => (
  <div className="bg-[#0f172a] text-white overflow-x-hidden">
    <PageLoader />
    <CursorGlow />
    <Navbar />
    <main>
      <section id="home"><HeroSection /></section>
      <section id="stats"><StatsBar /></section>
      <section id="features"><FeaturesSection /></section>
      <section id="ai"><AISection /></section>
      <section id="segments"><SegmentsSection /></section>
      <section id="howitworks"><HowItWorksSection /></section>
      <section id="pricing"><PricingSection /></section>
      <section id="reviews"><TestimonialsSection /></section>
      <section id="security"><GlobeSection /></section>
      <section id="cta"><CTASection /></section>
    </main>
    <Footer />
  </div>
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Product */}
        <Route path="/features" element={<PageLayout><FeaturesPage /></PageLayout>} />
        <Route path="/ai" element={<PageLayout><AIPage /></PageLayout>} />
        <Route path="/integrations" element={<PageLayout><IntegrationsPage /></PageLayout>} />
        <Route path="/changelog" element={<PageLayout><ChangelogPage /></PageLayout>} />
        <Route path="/pricing" element={<PageLayout><PricingPage /></PageLayout>} />

        {/* Company */}
        <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
        <Route path="/blog" element={<PageLayout><BlogPage /></PageLayout>} />
        <Route path="/careers" element={<PageLayout><CareersPage /></PageLayout>} />
        <Route path="/press" element={<PageLayout><PressPage /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />

        {/* Legal */}
        <Route path="/privacy" element={<PageLayout><PrivacyPage /></PageLayout>} />
        <Route path="/terms" element={<PageLayout><TermsPage /></PageLayout>} />
        <Route path="/security" element={<PageLayout><SecurityPage /></PageLayout>} />
        <Route path="/gdpr" element={<PageLayout><GDPRPage /></PageLayout>} />
        <Route path="/cookie-policy" element={<PageLayout><CookiePolicyPage /></PageLayout>} />

        {/* 404 fallback */}
        <Route path="*" element={
          <div className="bg-[#0f172a] text-white min-h-screen flex items-center justify-center">
            <div className="text-center">
              <p className="text-8xl font-black gradient-text mb-4">404</p>
              <p className="text-xl text-slate-400 mb-8">Page not found</p>
              <a href="/" className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold">
                Go Home
              </a>
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}
