import { Suspense, lazy, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ChevronDown, Play } from 'lucide-react'
import { MagneticButton } from '../ui/MagneticButton'
import { scrollToSection } from '../../lib/utils'

const HeroCanvas = lazy(() => import('../three/HeroCanvas'))
const ParticleField = lazy(() => import('../three/ParticleField'))

export const HeroSection = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-badge', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      gsap.fromTo('.hero-line-1', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2 })
      gsap.fromTo('.hero-line-2', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.4 })
      gsap.fromTo('.hero-line-3', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.6 })
      gsap.fromTo('.hero-sub', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.8 })
      gsap.fromTo('.hero-ctas', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 1.0 })
      gsap.fromTo('.hero-trust', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 1.2 })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid-bg opacity-60" />
      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 70% 40%, rgba(99,102,241,0.18), transparent 60%)' }}
      />
      {/* Particle field background (sm and up) */}
      <div className="absolute inset-0 hidden sm:block">
        <Suspense fallback={null}>
          <ParticleField count={1500} />
        </Suspense>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-28 pb-24">
        {/* Left: copy */}
        <div>
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-brand-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Trusted by 500+ Companies Across India
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight">
            <span className="hero-line-1 block">Your Entire</span>
            <span className="hero-line-2 block gradient-text">Financial Universe</span>
            <span className="hero-line-3 block">In One Platform</span>
          </h1>

          <p className="hero-sub mt-6 text-lg text-slate-400 max-w-xl">
            AI-powered expense tracking, loan management, asset registry, investment monitoring,
            and goal planning — built for teams, families, and enterprises. All in one place.
          </p>

          <div className="hero-ctas mt-8 flex flex-wrap gap-4">
            <MagneticButton
              onClick={() => scrollToSection('cta')}
              className="px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 glow-brand hover:from-brand-400 hover:to-brand-500 transition-colors"
            >
              Start Free Trial
            </MagneticButton>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white border border-white/15 hover:bg-white/5 transition-colors">
              <Play size={18} /> Watch Demo
            </button>
          </div>

          <p className="hero-trust mt-6 text-sm text-slate-500">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </div>

        {/* Right: 3D canvas on desktop, static mock on tablet/mobile */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
          <div className="hidden lg:block absolute inset-0">
            <Suspense
              fallback={<div className="w-full h-full bg-brand-900/20 rounded-2xl animate-pulse" />}
            >
              <HeroCanvas />
            </Suspense>
          </div>

          {/* Static dashboard mock (tablet / mobile) */}
          <div className="lg:hidden h-full flex items-center justify-center">
            <div className="glass glow-brand rounded-2xl p-6 w-full max-w-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-semibold text-slate-300">Net Worth</span>
                <span className="text-xs text-emerald-400">▲ 14.2%</span>
              </div>
              <div className="text-3xl font-black gradient-text mb-6">₹84,20,000</div>
              <div className="space-y-3">
                {[
                  { label: 'Expenses', value: '₹1.2L', g: 'from-brand-500 to-brand-600' },
                  { label: 'Portfolio', value: '₹8.4L', g: 'from-cyan-500 to-teal-500' },
                  { label: 'Goals', value: '68%', g: 'from-gold-500 to-amber-500' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${row.g}`} />
                      {row.label}
                    </div>
                    <span className="text-sm font-semibold text-white">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('stats')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={28} />
      </button>
    </div>
  )
}
