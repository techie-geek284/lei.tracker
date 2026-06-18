import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Zap,
  ShieldCheck,
  Eye,
  LineChart,
  Bell,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Database,
  ArrowRightLeft,
  Lock,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
  howItWorks: string;
  accent: string;
}

const capabilities: Capability[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Autonomous Categorisation',
    description:
      'Every transaction is classified in under 200ms using a fine-tuned model trained on 50M+ Indian transactions from UPI, NEFT, cards, and net banking.',
    howItWorks:
      'We pass merchant name, MCC code, transaction amount, and time-of-day through a three-stage classifier: rule engine → ML model → LLM fallback. Confidence scores are shown next to each category so you always know how certain the AI is.',
    accent: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Predictive Cash Flow',
    description:
      'Know your account balance 30, 60, and 90 days ahead. FinFlow learns your income cadence, recurring bills, and variable spending patterns to generate accurate forecasts.',
    howItWorks:
      'A time-series LSTM model trained on 24 months of your personal transaction history produces the forecast. Confidence intervals widen with horizon — we show you the range, not just a point estimate, so you can plan conservatively.',
    accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Anomaly Detection',
    description:
      "99.1% detection rate on unusual transactions — duplicate charges, unexpected merchant debits, and out-of-pattern spending flagged before you even open the app.",
    howItWorks:
      'Isolation Forest combined with peer-group comparison. Your spending is benchmarked against anonymised cohorts of similar income/age/city profiles. Deviations beyond 2.5 standard deviations trigger an alert, with natural-language explanation of why it looks unusual.',
    accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Real-time Nudges',
    description:
      'Context-aware micro-notifications delivered at the right moment — not a dump of weekly stats. Spend too much at restaurants on Tuesday? You\'ll hear about it Wednesday morning.',
    howItWorks:
      'A reinforcement learning agent optimises notification timing based on your engagement history. It learns when you\'re most likely to act on advice, and backs off when you\'re in a "do not disturb" pattern, reducing notification fatigue.',
    accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Goal Probability Modelling',
    description:
      'Every goal you set comes with a Monte Carlo simulation — 10,000 scenarios run to give you a realistic probability of hitting your target corpus on time.',
    howItWorks:
      'Market return distributions are sampled from historical SEBI-registered MF data (2003–2025). Inflation, salary growth, and expected expenditure drift are parameterised per user profile. The simulation reruns every week as your financial state evolves.',
    accent: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Proactive Insight Engine',
    description:
      'FinFlow doesn\'t wait for you to ask. It surfaces opportunities — tax-loss harvesting windows, SIP top-up suggestions, loan prepayment calculations — before the moment passes.',
    howItWorks:
      'A rules engine evaluates 140+ financial heuristics against your live data every night. Each triggered insight is ranked by estimated rupee impact, and only the top 3 are surfaced to prevent overwhelm. Each insight cites its data source.',
    accent: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
];

const stats = [
  { value: '94%', label: 'Categorisation Accuracy', sub: 'across 80+ categories' },
  { value: '10,000+', label: 'Transactions Processed', sub: 'per day per user' },
  { value: '2.3s', label: 'Insight Generation', sub: 'average latency' },
  { value: '99.1%', label: 'Anomaly Detection Rate', sub: 'precision on test set' },
];

const CapabilityCard = ({ cap }: { cap: Capability }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className={`glass rounded-2xl border ${cap.accent.split(' ')[2]} p-6 space-y-4`}
    >
      <div className={`inline-flex p-2.5 rounded-xl ${cap.accent.split(' ')[1]} ${cap.accent.split(' ')[0]}`}>{cap.icon}</div>
      <h3 className="text-xl font-bold text-white">{cap.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group"
      >
        How it works
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-1 border-t border-white/10">
              <p className="text-slate-300 text-sm leading-relaxed">{cap.howItWorks}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Data flow diagram nodes
const FlowNode = ({ label, sub, icon, color }: { label: string; sub: string; icon: React.ReactNode; color: string }) => (
  <div className={`glass rounded-2xl border ${color} p-5 text-center space-y-2 flex-1 min-w-[140px]`}>
    <div className="flex justify-center">{icon}</div>
    <p className="text-white font-semibold text-sm">{label}</p>
    <p className="text-slate-500 text-xs">{sub}</p>
  </div>
);

export const AIPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl mx-auto space-y-6 relative">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold tracking-widest uppercase">
            ✦ AI Engine
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold leading-tight">
            The Brain Behind<br />
            <span className="gradient-text">Your Finances</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our proprietary AI runs 24/7, making 10,000+ micro-decisions about your money every day — so you spend less time on spreadsheets and more time living.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Row */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="glass rounded-2xl p-6 text-center space-y-1 border border-white/5">
              <p className="text-4xl font-bold gradient-text">{s.value}</p>
              <p className="text-white text-sm font-semibold">{s.label}</p>
              <p className="text-slate-500 text-xs">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Capability Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold">
            Six AI Capabilities,<br />
            <span className="gradient-text">One Unified Engine</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Each capability is independently powerful. Together they create financial intelligence that improves the more you use it.
          </p>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap, i) => (
            <CapabilityCard key={i} cap={cap} />
          ))}
        </motion.div>
      </section>

      {/* AI Transparency Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass rounded-3xl border border-white/10 p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              <Lock className="w-3.5 h-3.5" />
              Explainable AI
            </div>
            <h2 className="text-3xl font-bold">
              AI You Can Trust — <span className="gradient-text">Because You Can Inspect It</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              FinFlow is not a black box. Every AI recommendation comes with a plain-English explanation of the data inputs and logic used to reach it. You can always override, correct, and teach the AI — it learns from your feedback.
            </p>
            <ul className="space-y-3">
              {[
                'Every categorisation shows a confidence score and reasoning',
                'Insight cards cite the exact transactions or data points used',
                'You can correct any AI decision; corrections improve future accuracy',
                'No decisions are taken autonomously — AI recommends, you approve',
                'Full audit log of all AI actions available in account settings',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {/* Sample explanation card */}
            <div className="bg-[#0f172a] rounded-2xl p-5 border border-white/10 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">Transaction Categorised</p>
                  <p className="text-slate-500 text-xs">Swiggy · ₹840 · 14 Jun 2026</p>
                </div>
                <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-full">Food & Dining</span>
              </div>
              <div className="bg-white/5 rounded-xl p-4 space-y-2">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">AI Reasoning</p>
                <p className="text-slate-300 text-sm">Merchant "Swiggy" matched to food-delivery category with <span className="text-indigo-400 font-medium">99.4% confidence</span>. Consistent with 23 prior Swiggy transactions in your history.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 text-xs transition-colors">
                  Looks correct ✓
                </button>
                <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-400 text-xs transition-colors">
                  Change category
                </button>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-2xl p-5 border border-emerald-500/20 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <p className="text-white text-sm font-semibold">AI Insight · High Confidence</p>
              </div>
              <p className="text-slate-300 text-sm">Your food delivery spend is <span className="text-amber-400 font-medium">₹4,200 above last month</span>. Based on your pattern, this is a temporary spike (Diwali period). No action needed.</p>
              <p className="text-slate-500 text-xs">Based on: 14 food transactions · Peer cohort: ₹9,800 avg · Seasonal adjustment applied</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Data Flow Diagram */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold">How Your Data Flows</h2>
          <p className="text-slate-400">From raw bank data to actionable intelligence in seconds.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap items-center justify-center gap-4">
          <FlowNode
            label="Your Banks"
            sub="Account Aggregator RBI-licensed"
            icon={<Database className="w-8 h-8 text-slate-400 mx-auto" />}
            color="border-white/10"
          />
          <motion.div variants={fadeUp} className="text-slate-600 flex flex-col items-center gap-1">
            <ArrowRightLeft className="w-6 h-6 text-indigo-400" />
            <span className="text-xs text-slate-500">TLS 1.3 · AES-256</span>
          </motion.div>
          <FlowNode
            label="FinFlow AI"
            sub="Categorise · Analyse · Predict"
            icon={<Brain className="w-8 h-8 text-indigo-400 mx-auto" />}
            color="border-indigo-500/30"
          />
          <motion.div variants={fadeUp} className="text-slate-600 flex flex-col items-center gap-1">
            <ArrowRightLeft className="w-6 h-6 text-cyan-400" />
            <span className="text-xs text-slate-500">&lt; 2.3s</span>
          </motion.div>
          <FlowNode
            label="Your Insights"
            sub="Dashboard · Alerts · Reports"
            icon={<Sparkles className="w-8 h-8 text-amber-400 mx-auto" />}
            color="border-amber-500/20"
          />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { label: 'Data ingestion', detail: 'AA framework + direct bank connections', icon: '🔗' },
            { label: 'Processing pipeline', detail: 'Classify → Enrich → Score → Summarise', icon: '⚙️' },
            { label: 'Delivery layer', detail: 'Push notification → App → Email digest', icon: '📲' },
          ].map((step, i) => (
            <motion.div key={i} variants={fadeUp} className="glass rounded-xl p-4 border border-white/5 text-center space-y-2">
              <span className="text-2xl">{step.icon}</span>
              <p className="text-white text-sm font-semibold">{step.label}</p>
              <p className="text-slate-500 text-xs">{step.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-t from-indigo-500/5 to-transparent">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience AI that works <span className="gradient-text">for you</span>
          </h2>
          <p className="text-slate-400 text-lg">Connect your accounts in 2 minutes. The AI starts working immediately.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-white transition-colors flex items-center justify-center gap-2 group">
              Try FinFlow Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-white transition-colors">
              Read the AI Docs
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
