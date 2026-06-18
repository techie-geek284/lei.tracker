import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'

type Billing = 'monthly' | 'annual'

interface PlanFeature {
  text: string
  included: boolean
}

interface Plan {
  name: string
  badge?: string
  tagline: string
  monthly: string
  annual: string
  period: string
  features: PlanFeature[]
  cta: string
  popular?: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    tagline: 'Perfect for individuals getting started',
    monthly: '₹0',
    annual: '₹0',
    period: '/month',
    features: [
      { text: 'Expense tracking (up to 100/mo)', included: true },
      { text: '2 financial goals', included: true },
      { text: 'Basic AI categorisation', included: true },
      { text: 'Mobile app access', included: true },
      { text: 'Bank sync', included: false },
      { text: 'Investment tracking', included: false },
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    tagline: 'Everything an individual needs',
    monthly: '₹199',
    annual: '₹159',
    period: '/month',
    features: [
      { text: 'Unlimited expenses', included: true },
      { text: 'All 5 finance modules', included: true },
      { text: 'Full AI suite', included: true },
      { text: 'Bank sync (AA framework)', included: true },
      { text: 'Unlimited goals', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: 'Start Pro Trial',
  },
  {
    name: 'Business',
    badge: 'Most Popular',
    tagline: 'Built for growing teams',
    monthly: '₹1,999',
    annual: '₹1,599',
    period: '/month',
    features: [
      { text: 'Up to 20 employees', included: true },
      { text: 'All Pro features', included: true },
      { text: 'Expense approval workflows', included: true },
      { text: 'Department budgets', included: true },
      { text: 'Tally & Zoho integration', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    cta: 'Start Business Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For organisations with unique needs',
    monthly: 'Custom',
    annual: 'Custom',
    period: '',
    features: [
      { text: 'Unlimited users', included: true },
      { text: 'Dedicated infrastructure', included: true },
      { text: 'White-label options', included: true },
      { text: 'Custom AI models', included: true },
      { text: 'SSO / SAML', included: true },
      { text: 'SLA-backed uptime', included: true },
    ],
    cta: 'Talk to Sales',
  },
]

export const PricingSection = () => {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <div className="relative overflow-hidden bg-[#0f172a] py-28">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 30%, rgba(99,102,241,0.12), transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-widest text-cyan-400">
            TRANSPARENT PRICING
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
            Start Free.{' '}
            <span className="gradient-text">Scale as You Grow.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            No hidden fees. No lock-in. Cancel anytime.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              billing === 'monthly'
                ? 'bg-brand-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              billing === 'annual'
                ? 'bg-brand-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Annual
            <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">
              Save 20%
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass rounded-2xl p-6 flex flex-col ${
                plan.popular
                  ? 'border-brand-500/50 glow-brand scale-[1.04] lg:scale-105'
                  : ''
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-500 to-cyan-500 whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400">{plan.tagline}</p>
              </div>

              <div className="mb-6 flex items-end gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billing + plan.name}
                    initial={{ y: -16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 16, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-black gradient-text"
                  >
                    {billing === 'annual' ? plan.annual : plan.monthly}
                  </motion.span>
                </AnimatePresence>
                {plan.period && (
                  <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2 text-sm">
                    {f.included ? (
                      <Check size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X size={16} className="text-slate-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={f.included ? 'text-slate-300' : 'text-slate-600'}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white glow-brand hover:from-brand-400 hover:to-brand-500'
                    : 'border border-white/15 text-white hover:bg-white/5'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
