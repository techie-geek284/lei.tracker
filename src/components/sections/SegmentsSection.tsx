import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface Segment {
  emoji: string
  name: string
  badge?: string
  description: string
  features: string[]
  price: string
  gradient: string
}

const SEGMENTS: Segment[] = [
  {
    emoji: '👤',
    name: 'Individual',
    description:
      "Take control of your personal finances with AI that works around the clock so you don't have to.",
    features: ['All 5 finance modules', 'AI chatbot', 'Bank sync', 'Mobile app', 'Goal coaching'],
    price: 'Free to start · ₹199/mo Pro',
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    name: 'Family',
    description:
      'Shared expenses, family goals, and complete financial visibility for up to 6 members.',
    features: ['6 member accounts', 'Shared goals', 'Expense splitting', 'Family net worth', 'Parental controls'],
    price: 'From ₹499/month',
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    emoji: '🏢',
    name: 'Business',
    badge: 'Most Popular',
    description:
      'Expense policies, approval workflows, and team spend visibility. Built for growing companies.',
    features: ['Up to 100 employees', 'Approval workflows', 'Department budgets', 'ERP integrations', 'AI anomaly alerts'],
    price: 'From ₹1,999/month',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    emoji: '🏛️',
    name: 'Enterprise',
    description:
      'Dedicated infrastructure, white-labelling, and custom AI models for large organisations.',
    features: ['Unlimited users', 'Dedicated schema', 'White-label', 'Custom AI pipeline', 'SSO/SAML'],
    price: 'Custom pricing',
    gradient: 'from-gold-500 to-amber-600',
  },
  {
    emoji: '🏦',
    name: 'Financial Institutions',
    description:
      'License FinFlow as your own branded financial wellness product for your customers.',
    features: ['Full white-label', 'API-first', 'Revenue share model', 'Co-branded mobile app', 'Dedicated success manager'],
    price: 'Revenue share model',
    gradient: 'from-rose-500 to-pink-600',
  },
]

export const SegmentsSection = () => (
  <div className="bg-gradient-to-b from-[#1e293b] to-[#0f172a] py-28">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold tracking-widest text-cyan-400">
          BUILT FOR EVERYONE
        </span>
        <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
          One Platform, <span className="gradient-text">Every Financial Life</span>
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Whether you're tracking personal finances or managing a corporate treasury — FinFlow
          scales to fit.
        </p>
      </div>

      <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x">
        {SEGMENTS.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ rotateY: 5, y: -6 }}
            style={{ transformPerspective: 800 }}
            className={`relative min-w-[280px] lg:min-w-0 snap-start glass rounded-2xl p-6 ${
              s.badge ? 'border-brand-500/50 glow-brand' : ''
            }`}
          >
            {s.badge && (
              <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-brand-500 to-cyan-500">
                {s.badge}
              </span>
            )}
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-2xl mb-4`}
            >
              {s.emoji}
            </div>
            <h3 className="text-2xl font-bold mb-2">{s.name}</h3>
            <p className="text-sm text-slate-400 mb-5">{s.description}</p>
            <ul className="space-y-2 mb-6">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check size={16} className="text-emerald-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-white/10">
              <span className="text-sm font-semibold gradient-text">{s.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)
