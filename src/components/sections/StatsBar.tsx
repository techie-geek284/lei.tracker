import { motion } from 'framer-motion'
import { AnimatedCounter } from '../ui/AnimatedCounter'

interface Stat {
  target: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
}

const STATS: Stat[] = [
  { target: 500, suffix: '+', label: 'Companies Onboarded' },
  { target: 120, prefix: '₹', suffix: 'Cr+', label: 'Financial Data Tracked' },
  { target: 99.9, suffix: '%', decimals: 1, label: 'Uptime SLA' },
  { target: 14.2, suffix: '%', decimals: 1, label: 'Avg. Portfolio XIRR Improvement' },
]

export const StatsBar = () => (
  <div className="bg-[#1e293b] border-y border-brand-500/20 py-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-white/10">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="text-center px-4"
        >
          <div className="text-4xl md:text-5xl font-black">
            <AnimatedCounter
              className="gradient-text"
              target={s.target}
              prefix={s.prefix}
              suffix={s.suffix}
              decimals={s.decimals}
            />
          </div>
          <p className="mt-2 text-sm text-slate-400">{s.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
)
