import { motion } from 'framer-motion';
import {
  Receipt,
  Building2,
  Boxes,
  TrendingUp,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

interface FeatureSectionProps {
  icon: React.ReactNode;
  badge: string;
  heading: string;
  description: string;
  bullets: string[];
  mockUI: React.ReactNode;
  reversed?: boolean;
  accent: string;
}

const FeatureSection = ({
  icon,
  badge,
  heading,
  description,
  bullets,
  mockUI,
  reversed = false,
  accent,
}: FeatureSectionProps) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center py-24 border-b border-white/5`}
  >
    <div className="flex-1 space-y-6">
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-xl ${accent} bg-opacity-10`}>{icon}</div>
        <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">{badge}</span>
      </div>
      <h2 className="text-4xl font-bold text-white leading-tight">{heading}</h2>
      <p className="text-lg text-slate-400 leading-relaxed">{description}</p>
      <motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
        {bullets.map((b, i) => (
          <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
            <span className="text-slate-300">{b}</span>
          </motion.li>
        ))}
      </motion.ul>
      <button className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors group">
        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
    <div className="flex-1 w-full">{mockUI}</div>
  </motion.div>
);

// â”€â”€ Mock UIs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const ExpenseMock = () => (
  <div className="glass rounded-2xl p-6 space-y-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-white font-semibold">This Month</span>
      <span className="text-emerald-400 text-sm font-medium">â†“ 12% vs last month</span>
    </div>
    {[
      { cat: 'Food & Dining', amount: 'â‚¹14,230', pct: 72, color: 'bg-indigo-500' },
      { cat: 'Transport', amount: 'â‚¹6,800', pct: 45, color: 'bg-cyan-500' },
      { cat: 'Entertainment', amount: 'â‚¹3,500', pct: 28, color: 'bg-amber-500' },
      { cat: 'Utilities', amount: 'â‚¹2,100', pct: 18, color: 'bg-emerald-500' },
    ].map((r, i) => (
      <div key={i} className="space-y-1.5">
        <div className="flex justify-between text-sm">
          <span className="text-slate-300">{r.cat}</span>
          <span className="text-white font-medium">{r.amount}</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${r.color} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${r.pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          />
        </div>
      </div>
    ))}
    <div className="pt-3 border-t border-white/10 flex items-center gap-2">
      <Sparkles className="w-4 h-4 text-amber-400" />
      <span className="text-sm text-slate-400">
        AI: <span className="text-white">Your dining spend is 23% above your peer group.</span>
      </span>
    </div>
  </div>
);

const LoanMock = () => (
  <div className="glass rounded-2xl p-6 space-y-4">
    <div className="flex items-center justify-between">
      <span className="text-white font-semibold">Active Loans</span>
      <span className="text-slate-400 text-sm">3 loans Â· â‚¹68.4L total</span>
    </div>
    {[
      { name: 'Home Loan Â· HDFC', emi: 'â‚¹42,500/mo', remaining: 'â‚¹54,20,000', progress: 28, badge: 'On Track' },
      { name: 'Car Loan Â· Axis', emi: 'â‚¹12,800/mo', remaining: 'â‚¹8,40,000', progress: 65, badge: 'Ahead' },
      { name: 'Personal Â· ICICI', emi: 'â‚¹6,200/mo', remaining: 'â‚¹5,80,000', progress: 42, badge: 'On Track' },
    ].map((l, i) => (
      <div key={i} className="bg-white/5 rounded-xl p-4 space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-white text-sm font-medium">{l.name}</p>
            <p className="text-slate-400 text-xs">{l.emi}</p>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${l.badge === 'Ahead' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-indigo-500/20 text-indigo-400'}`}>{l.badge}</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-indigo-500 rounded-full" initial={{ width: 0 }} whileInView={{ width: `${l.progress}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.15 }} />
        </div>
        <p className="text-slate-500 text-xs">Outstanding: {l.remaining}</p>
      </div>
    ))}
  </div>
);

const AssetMock = () => (
  <div className="glass rounded-2xl p-6 space-y-4">
    <div className="flex justify-between items-center">
      <span className="text-white font-semibold">Net Worth</span>
      <span className="text-2xl font-bold gradient-text">â‚¹1.84 Cr</span>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {[
        { label: 'Real Estate', value: 'â‚¹1.2 Cr', icon: 'ðŸ ', color: 'indigo' },
        { label: 'Equity', value: 'â‚¹32.4L', icon: 'ðŸ“ˆ', color: 'cyan' },
        { label: 'Gold', value: 'â‚¹18.6L', icon: 'ðŸ¥‡', color: 'amber' },
        { label: 'Fixed Income', value: 'â‚¹12.8L', icon: 'ðŸ¦', color: 'emerald' },
      ].map((a, i) => (
        <div key={i} className="bg-white/5 rounded-xl p-3 space-y-1">
          <span className="text-xl">{a.icon}</span>
          <p className="text-white text-sm font-semibold">{a.value}</p>
          <p className="text-slate-400 text-xs">{a.label}</p>
        </div>
      ))}
    </div>
    <div className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
      <p className="text-slate-300 text-sm">Your gold allocation is optimal for your risk profile.</p>
    </div>
  </div>
);

const PortfolioMock = () => (
  <div className="glass rounded-2xl p-6 space-y-4">
    <div className="flex justify-between items-center">
      <span className="text-white font-semibold">Portfolio XIRR</span>
      <span className="text-emerald-400 font-bold text-lg">+18.4%</span>
    </div>
    <div className="space-y-3">
      {[
        { name: 'Mirae Asset Large Cap', type: 'Equity MF', xirr: '+21.2%', value: 'â‚¹4.8L', trend: 'up' },
        { name: 'HDFC Balanced Advantage', type: 'Hybrid MF', xirr: '+14.7%', value: 'â‚¹2.1L', trend: 'up' },
        { name: 'Zerodha Nifty 50 ETF', type: 'ETF', xirr: '+16.3%', value: 'â‚¹1.6L', trend: 'up' },
        { name: 'Sovereign Gold Bond', type: 'SGB', xirr: '+9.8%', value: 'â‚¹80K', trend: 'up' },
      ].map((p, i) => (
        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
          <div>
            <p className="text-white text-sm font-medium">{p.name}</p>
            <p className="text-slate-500 text-xs">{p.type}</p>
          </div>
          <div className="text-right">
            <p className="text-emerald-400 text-sm font-semibold">{p.xirr}</p>
            <p className="text-slate-400 text-xs">{p.value}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const GoalMock = () => (
  <div className="glass rounded-2xl p-6 space-y-4">
    <span className="text-white font-semibold">Active Goals</span>
    {[
      { name: 'Home Down Payment', target: 'â‚¹25L', saved: 'â‚¹14.2L', deadline: 'Mar 2027', pct: 57, on_track: true },
      { name: "Child's Education", target: 'â‚¹50L', saved: 'â‚¹8.6L', deadline: 'Jun 2033', pct: 17, on_track: true },
      { name: 'Early Retirement', target: 'â‚¹3 Cr', saved: 'â‚¹42L', deadline: 'Dec 2040', pct: 14, on_track: false },
    ].map((g, i) => (
      <div key={i} className="bg-white/5 rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-white text-sm font-semibold">{g.name}</p>
            <p className="text-slate-500 text-xs">Target: {g.target} Â· By {g.deadline}</p>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${g.on_track ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>{g.on_track ? 'On Track' : 'Needs Attention'}</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-slate-400">
            <span>{g.saved} saved</span>
            <span>{g.pct}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div className={`h-full rounded-full ${g.on_track ? 'bg-emerald-500' : 'bg-amber-500'}`} initial={{ width: 0 }} whileInView={{ width: `${g.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: i * 0.1 }} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

// â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const FeaturesPage = () => {
  const features = [
    {
      icon: <Receipt className="w-6 h-6 text-indigo-400" />,
      badge: 'Module 01 Â· Expense Intelligence',
      heading: 'Smart Expense Tracking',
      description:
        "Stop manually categorising transactions. FinFlow's AI reads your bank feeds, SMS alerts, and email receipts to build a complete, real-time picture of where your money goes â€” automatically.",
      bullets: [
        'Automatic categorisation with 94%+ accuracy across 80+ categories',
        'Receipt scanning via camera or email forwarding',
        'Merchant-level spend analytics and trend detection',
        'Custom rules and split-expense support for shared bills',
        'Recurring spend alerts when subscriptions renew or prices change',
        'Budget enforcement with real-time notifications',
      ],
      mockUI: <ExpenseMock />,
      accent: 'text-indigo-400 bg-indigo-500',
    },
    {
      icon: <Building2 className="w-6 h-6 text-cyan-400" />,
      badge: 'Module 02 Â· Debt Management',
      heading: 'Loan Command Centre',
      description:
        'Get complete visibility into every loan, EMI, and credit facility you hold across all lenders. FinFlow tracks repayment progress, interest paid vs. principal, and surfaces prepayment opportunities that save you lakhs.',
      bullets: [
        'Centralised dashboard for home loans, car loans, personal loans, and credit cards',
        'EMI calendar with upcoming payment reminders',
        'Interest-saved calculator for prepayment scenarios',
        'Credit utilisation monitoring and score impact analysis',
        'Refinancing alerts when better rates are available in the market',
        'Loan closure forecasting with accelerated repayment plans',
      ],
      mockUI: <LoanMock />,
      reversed: true,
      accent: 'text-cyan-400 bg-cyan-500',
    },
    {
      icon: <Boxes className="w-6 h-6 text-amber-400" />,
      badge: 'Module 03 Â· Wealth Registry',
      heading: 'Complete Asset Register',
      description:
        'Every asset you own â€” property, vehicles, jewellery, art, domain names â€” in one valuation engine. FinFlow pulls live market prices where available and lets you manually update the rest, giving you an always-accurate net worth.',
      bullets: [
        'Real estate valuation with locality-level market data from PropTiger & 99acres',
        'Gold and silver tracking at live MCX spot prices',
        'Vehicle depreciation modelling using market resale data',
        'Insurance policy register with renewal alerts and coverage gap analysis',
        'Document vault for property papers, RC books, and policy PDFs',
        'Net worth timeline showing growth month over month',
      ],
      mockUI: <AssetMock />,
      accent: 'text-amber-400 bg-amber-500',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      badge: 'Module 04 Â· Investment Analytics',
      heading: 'Portfolio Intelligence',
      description:
        'Connect your Zerodha, Groww, or CAMS account and get institutional-grade portfolio analytics in seconds. XIRR, alpha, beta, Sharpe ratio â€” FinFlow makes complex metrics understandable and actionable.',
      bullets: [
        'Consolidated portfolio across mutual funds, direct equity, ETFs, and SGBs',
        'True XIRR calculation accounting for all cash flows including SIPs',
        'Asset allocation analysis with recommended rebalancing actions',
        'Tax-loss harvesting opportunities surfaced automatically',
        'Direct plan vs. regular plan comparison to quantify commission drag',
        'Capital gains report pre-populated for ITR filing',
      ],
      mockUI: <PortfolioMock />,
      reversed: true,
      accent: 'text-emerald-400 bg-emerald-500',
    },
    {
      icon: <Target className="w-6 h-6 text-rose-400" />,
      badge: 'Module 05 Â· Goal Planning',
      heading: 'Goal Achievement Engine',
      description:
        'Set a financial goal and FinFlow reverse-engineers the monthly savings required, recommends the right investment instruments, and monitors progress in real time â€” adjusting projections as markets and your income evolve.',
      bullets: [
        'Monte Carlo simulation for goal success probability modelling',
        'SIP amount calculator with inflation-adjusted target corpus',
        'Multi-goal prioritisation with trade-off analysis',
        'Family plan: sync goals across spouse and dependents',
        'Milestone celebrations and AI coaching when you fall behind',
        'What-if scenarios: salary increment, bonus deployment, early exit',
      ],
      mockUI: <GoalMock />,
      accent: 'text-rose-400 bg-rose-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl mx-auto space-y-6 relative">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Five modules, one platform
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Every Financial Tool</span>
            <br />
            You'll Ever Need
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            FinFlow's five core modules work together as one unified AI platform â€” so your expense data informs your goals, and your portfolio feeds your net worth.
          </motion.p>
        </motion.div>

        {/* Module nav pills */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="flex flex-wrap justify-center gap-3 mt-12">
          {['Expense Tracking', 'Loan Centre', 'Asset Register', 'Portfolio', 'Goal Engine'].map((m, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 cursor-pointer transition-colors">
              {m}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Feature Sections */}
      <section className="max-w-7xl mx-auto px-6">
        {features.map((f, i) => (
          <FeatureSection key={i} {...f} />
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to master <span className="gradient-text">your finances?</span>
          </h2>
          <p className="text-lg text-slate-400">Join 50,000+ Indians who use FinFlow to build wealth with clarity and confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-white transition-colors flex items-center justify-center gap-2 group">
              Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-white transition-colors">
              Book a Demo
            </button>
          </div>
          <p className="text-sm text-slate-500">14-day free trial Â· No credit card required Â· Cancel anytime</p>
        </motion.div>
      </section>
    </div>
  );
};
