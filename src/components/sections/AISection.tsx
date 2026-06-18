import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart, Brain, Eye, Leaf, Shield, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const NeuralNetwork = lazy(() => import('../three/NeuralNetwork'))

interface AIFeature {
  icon: LucideIcon
  color: string
  title: string
  desc: string
}

const AI_FEATURES: AIFeature[] = [
  { icon: Zap, color: '#06b6d4', title: 'Smart Categorisation', desc: '94% auto-tag accuracy on first transaction' },
  { icon: Eye, color: '#8b5cf6', title: 'Anomaly Detection', desc: 'Flags unusual spend before it becomes a problem' },
  { icon: BarChart, color: '#f59e0b', title: 'Spend Forecasting', desc: 'Predicts next 90 days based on your patterns' },
  { icon: Brain, color: '#10b981', title: 'Financial Chatbot', desc: 'Ask anything. Gets answers from your actual data' },
  { icon: Shield, color: '#6366f1', title: 'Goal Coaching', desc: 'Monte Carlo AI tells you if your goals are realistic' },
  { icon: Leaf, color: '#14b8a6', title: 'Tax Optimiser', desc: 'LTCG harvesting suggestions before March 31' },
]

export const AISection = () => (
  <div className="relative overflow-hidden py-28" style={{ background: '#0a0f1e' }}>
    <div
      className="absolute inset-0"
      style={{ background: 'radial-gradient(circle at 78% 50%, rgba(99,102,241,0.18), transparent 55%)' }}
    />
    <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[55%_45%] gap-12 items-center">
      <div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest bg-gradient-to-r from-cyan-400 to-brand-400 bg-clip-text text-transparent">
          ✦ POWERED BY AI
        </span>
        <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-tight">
          Not Just Software.
          <br />
          <span className="gradient-text">An AI That Works For You</span>
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-xl">
          FinFlow's AI engine runs 24/7 — categorising transactions, detecting anomalies,
          forecasting spend, and coaching you toward better financial decisions. Automatically.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {AI_FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-xl p-4 flex items-start gap-3 hover:bg-white/10 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${f.color}1a`, border: `1px solid ${f.color}40` }}
                >
                  <Icon size={20} style={{ color: f.color }} />
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="text-sm text-slate-400 mt-0.5">{f.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 glow-brand hover:from-brand-400 hover:to-brand-500 transition-colors">
          Experience the AI Demo <ArrowRight size={18} />
        </button>
      </div>

      <div className="relative h-[400px] lg:h-[520px] hidden md:block">
        <Suspense
          fallback={<div className="w-full h-full bg-brand-900/20 rounded-2xl animate-pulse" />}
        >
          <NeuralNetwork />
        </Suspense>
      </div>
    </div>
  </div>
)
