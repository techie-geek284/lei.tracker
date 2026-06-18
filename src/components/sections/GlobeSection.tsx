import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Server, BadgeCheck } from 'lucide-react'

const GlobeNetwork = lazy(() => import('../three/GlobeNetwork'))

const TRUST_BADGES = [
  { icon: Shield, label: 'AES-256 Encryption', color: '#6366f1' },
  { icon: Lock, label: 'RBI AA Compliant', color: '#06b6d4' },
  { icon: Server, label: '99.9% Uptime SLA', color: '#10b981' },
  { icon: BadgeCheck, label: 'SOC 2 Compliant (In Progress)', color: '#f59e0b' },
]

export const GlobeSection = () => (
  <div className="relative overflow-hidden bg-[#0a0f1e] py-28">
    <div
      className="absolute inset-0"
      style={{ background: 'radial-gradient(circle at 50% 60%, rgba(99,102,241,0.10), transparent 65%)' }}
    />

    <div className="relative max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold tracking-widest text-cyan-400">
          🏢 ENTERPRISE GRADE
        </span>
        <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
          Built for Businesses That{' '}
          <span className="gradient-text">Can't Afford to Fail</span>
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          SOC 2 Type II in progress. RBI Account Aggregator compliant. AES-256 encryption.
          99.9% uptime SLA.
        </p>
      </motion.div>

      {/* Trust badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {TRUST_BADGES.map((b, i) => {
          const Icon = b.icon
          return (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass flex items-center gap-3 px-5 py-3 rounded-xl"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${b.color}20`, border: `1px solid ${b.color}40` }}
              >
                <Icon size={16} style={{ color: b.color }} />
              </div>
              <span className="text-sm font-semibold text-slate-200">{b.label}</span>
            </motion.div>
          )
        })}
      </div>

      {/* 3D Globe — taller canvas so the Earth fills the view */}
      <div className="mt-10 h-[520px] sm:h-[600px] w-full relative">
        {/* Subtle vignette at the bottom so it blends into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0a0f1e] to-transparent z-10 pointer-events-none" />
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-brand-500/10 animate-pulse" />
            </div>
          }
        >
          <GlobeNetwork />
        </Suspense>
      </div>
    </div>
  </div>
)
