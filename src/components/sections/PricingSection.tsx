import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Zap } from 'lucide-react'

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
    tagline: 'For individuals getting started',
    monthly: '₹0',
    annual: '₹0',
    period: '/month',
    features: [
      { text: 'Expense tracking (up to 100/mo)', included: true },
      { text: '2 financial goals',               included: true },
      { text: 'Basic AI categorisation',         included: true },
      { text: 'Mobile app access',               included: true },
      { text: 'Bank sync',                       included: false },
      { text: 'Investment tracking',             included: false },
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
      { text: 'Unlimited expenses',         included: true },
      { text: 'All 5 finance modules',      included: true },
      { text: 'Full AI suite',              included: true },
      { text: 'Bank sync (AA framework)',   included: true },
      { text: 'Unlimited goals',            included: true },
      { text: 'Priority support',           included: true },
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
      { text: 'Up to 20 employees',           included: true },
      { text: 'All Pro features',             included: true },
      { text: 'Expense approval workflows',   included: true },
      { text: 'Department budgets',           included: true },
      { text: 'Tally & Zoho integration',     included: true },
      { text: 'Dedicated account manager',    included: true },
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
      { text: 'Unlimited users',          included: true },
      { text: 'Dedicated infrastructure', included: true },
      { text: 'White-label options',      included: true },
      { text: 'Custom AI models',         included: true },
      { text: 'SSO / SAML',              included: true },
      { text: 'SLA-backed uptime',        included: true },
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
        style={{ background: 'radial-gradient(circle at 50% 30%, rgba(99,102,241,0.14), transparent 60%)' }}
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
                ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              billing === 'annual'
                ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Annual
            <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">
              Save 20%
            </span>
          </button>
        </div>

        {/* Cards — items-stretch so all rows match the tallest card's height */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl ${
                plan.popular
                  ? /* Business card — dramatically elevated */
                    'glow-pulse-border lg:-translate-y-3 z-10'
                  : 'glass border border-white/10'
              }`}
            >
              {/* Business card: gradient border via layered backgrounds */}
              {plan.popular && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-500/30 via-brand-900/60 to-[#0f172a] border border-brand-500/60 pointer-events-none" />
              )}
              {/* Business card: top accent glow bar */}
              {plan.popular && (
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
              )}

              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-500 to-cyan-500 whitespace-nowrap shadow-xl shadow-brand-500/40 ring-2 ring-brand-400/30">
                  <Zap size={11} className="fill-white" />
                  {plan.badge}
                </span>
              )}

              {/* Card body */}
              <div className={`relative flex flex-col flex-1 ${plan.popular ? 'p-7' : 'p-6'}`}>
                {/* Name + tagline */}
                <div className="mb-6">
                  <h3 className={`font-bold mb-1 ${plan.popular ? 'text-2xl text-white' : 'text-xl'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-snug">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-6 flex items-end gap-1 min-h-[56px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={billing + plan.name}
                      initial={{ y: -16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 16, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`font-black gradient-text ${plan.popular ? 'text-5xl' : 'text-4xl'}`}
                    >
                      {billing === 'annual' ? plan.annual : plan.monthly}
                    </motion.span>
                  </AnimatePresence>
                  {plan.period && (
                    <span className="text-slate-400 text-sm mb-1.5">{plan.period}</span>
                  )}
                </div>

                {/* Feature list — flex-1 pushes button to bottom regardless of item count */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2 text-sm">
                      {f.included ? (
                        <Check
                          size={16}
                          className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-brand-400' : 'text-emerald-400'}`}
                        />
                      ) : (
                        <X size={16} className="text-slate-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={f.included ? (plan.popular ? 'text-slate-200' : 'text-slate-300') : 'text-slate-600'}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? 'btn-pulse-ring bg-gradient-to-r from-brand-500 to-cyan-500 text-white shadow-lg shadow-brand-500/40 hover:from-brand-400 hover:to-cyan-400 py-3.5 text-base'
                      : 'border border-white/15 text-white hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
