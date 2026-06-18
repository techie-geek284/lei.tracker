import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Receipt, Building2, Boxes, TrendingUp, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Feature {
  icon: LucideIcon
  color: string
  title: string
  description: string
  bullets: string[]
  gradient: string
}

const FEATURES: Feature[] = [
  {
    icon: Receipt,
    color: '#6366F1',
    title: 'Smart Expense Tracking',
    description:
      'AI automatically categorises every transaction from your bank. OCR reads receipts. Anomalies flagged instantly.',
    bullets: [
      'Auto-categorisation with 94% accuracy',
      'Receipt OCR — scan and forget',
      'Budget alerts before you overspend',
      'Multi-level approval workflows',
    ],
    gradient: 'from-brand-500 to-purple-600',
  },
  {
    icon: Building2,
    color: '#06B6D4',
    title: 'Loan Command Centre',
    description:
      'Track every EMI, simulate prepayments, and let AI find refinancing opportunities that save you lakhs.',
    bullets: [
      'Amortisation schedules in seconds',
      'Prepayment impact simulator',
      'Refinancing opportunity alerts',
      'Payoff date countdown',
    ],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Boxes,
    color: '#10B981',
    title: 'Complete Asset Register',
    description:
      'From real estate to equipment — register every asset, automate depreciation, and never miss an insurance renewal.',
    bullets: [
      'SLM and WDV depreciation engines',
      'Insurance expiry reminders',
      'Net worth tracking across all assets',
      'Maintenance log and schedules',
    ],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: TrendingUp,
    color: '#F59E0B',
    title: 'Portfolio Intelligence',
    description:
      'XIRR calculations, rebalancing suggestions, and tax-loss harvesting — your portfolio managed like a pro.',
    bullets: [
      'Equity, MF, FD, Gold, Crypto tracking',
      'XIRR and absolute returns',
      'AI rebalancing recommendations',
      'Capital gains tax estimator',
    ],
    gradient: 'from-gold-500 to-orange-600',
  },
  {
    icon: Target,
    color: '#8B5CF6',
    title: 'Goal Achievement Engine',
    description:
      'Set targets for every dream. AI runs Monte Carlo simulations and tells you exactly what to do each month.',
    bullets: [
      'Monte Carlo goal feasibility',
      'Multi-contributor shared goals',
      'Milestone celebrations',
      'AI conflict detector',
    ],
    gradient: 'from-purple-500 to-pink-600',
  },
]

export const FeaturesSection = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { y: 80, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.features-grid', start: 'top 80%' },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-cyan-400">
            EVERYTHING YOU NEED
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
            Five Pillars of <span className="gradient-text">Financial Mastery</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From daily expenses to long-term wealth — FinFlow covers every dimension of your
            financial life with AI that actually helps.
          </p>
        </div>

        <div
          className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: 1000 }}
        >
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="feature-card">
                <div className="group glass rounded-2xl p-6 h-full transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-brand-500/40 hover:glow-brand">
                  <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${f.gradient} mb-5`} />
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-700 group-hover:rotate-[360deg]"
                    style={{ background: `${f.color}1a`, border: `1px solid ${f.color}40` }}
                  >
                    <Icon size={26} style={{ color: f.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
                  <p className="text-slate-400 mb-5">{f.description}</p>
                  <ul className="space-y-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: f.color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
