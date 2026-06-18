import { motion } from 'framer-motion';
import { Search, ArrowRight, Code2, Webhook, Puzzle, Globe } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

interface Integration {
  name: string;
  icon: string;
  status: 'live' | 'beta' | 'coming';
  description: string;
}

interface Category {
  label: string;
  icon: string;
  items: Integration[];
}

const categories: Category[] = [
  {
    label: 'Banking & Account Aggregator',
    icon: 'ðŸ¦',
    items: [
      { name: 'HDFC Bank', icon: 'ðŸ”µ', status: 'live', description: 'Full AA + direct savings/current sync' },
      { name: 'ICICI Bank', icon: 'ðŸŸ ', status: 'live', description: 'iMobile integration, AA-enabled' },
      { name: 'State Bank of India', icon: 'ðŸ”µ', status: 'live', description: 'YONO linked, AA-enabled' },
      { name: 'Kotak Mahindra', icon: 'ðŸ”´', status: 'live', description: '811 & corporate accounts' },
      { name: 'Axis Bank', icon: 'ðŸŸ£', status: 'live', description: 'Open Banking API v2' },
      { name: 'Yes Bank', icon: 'ðŸŸ¢', status: 'beta', description: 'AA framework, beta access' },
    ],
  },
  {
    label: 'Accounting & Bookkeeping',
    icon: 'ðŸ“’',
    items: [
      { name: 'Tally Prime', icon: 'ðŸŸ©', status: 'live', description: 'Two-way sync via TDL bridge' },
      { name: 'Zoho Books', icon: 'ðŸ”¶', status: 'live', description: 'Full GL, invoices & reports' },
      { name: 'QuickBooks', icon: 'ðŸŸ¢', status: 'live', description: 'Online & Desktop editions' },
      { name: 'FreshBooks', icon: 'ðŸ”µ', status: 'live', description: 'Invoicing & expense sync' },
    ],
  },
  {
    label: 'Investments & Brokers',
    icon: 'ðŸ“ˆ',
    items: [
      { name: 'Zerodha Kite', icon: 'ðŸ”µ', status: 'live', description: 'Portfolio sync via Kite Connect' },
      { name: 'Groww', icon: 'ðŸŸ¢', status: 'live', description: 'MF, stocks & P&L sync' },
      { name: 'Angel One', icon: 'ðŸŸ ', status: 'live', description: 'SmartAPI integration' },
      { name: 'HDFC Securities', icon: 'ðŸ”µ', status: 'beta', description: 'Demat + MF portfolio' },
    ],
  },
  {
    label: 'ERPs & Enterprise',
    icon: 'ðŸ—ï¸',
    items: [
      { name: 'SAP S/4HANA', icon: 'â¬œ', status: 'live', description: 'BAPI + REST OData v4' },
      { name: 'Oracle NetSuite', icon: 'ðŸ”´', status: 'live', description: 'SuiteScript + REST integration' },
      { name: 'Microsoft Dynamics', icon: 'ðŸ”µ', status: 'beta', description: 'Finance & Operations module' },
    ],
  },
  {
    label: 'Communication & Collaboration',
    icon: 'ðŸ’¬',
    items: [
      { name: 'Slack', icon: 'ðŸŸ£', status: 'live', description: 'Alerts, digests & slash commands' },
      { name: 'Microsoft Teams', icon: 'ðŸ”µ', status: 'live', description: 'Cards, notifications & bots' },
      { name: 'Google Workspace', icon: 'ðŸ”´', status: 'live', description: 'Sheets export & Calendar reminders' },
    ],
  },
  {
    label: 'Payment Gateways',
    icon: 'ðŸ’³',
    items: [
      { name: 'Razorpay', icon: 'ðŸ”µ', status: 'live', description: 'Settlements, refunds & payouts' },
      { name: 'PayU', icon: 'ðŸŸ ', status: 'live', description: 'Transaction reconciliation' },
      { name: 'Cashfree', icon: 'ðŸŸ¢', status: 'beta', description: 'Payout & subscription data' },
    ],
  },
];

const statusStyles: Record<string, string> = {
  live: 'bg-emerald-500/20 text-emerald-400',
  beta: 'bg-amber-500/20 text-amber-400',
  coming: 'bg-slate-500/20 text-slate-400',
};

const IntegrationCard = ({ item }: { item: Integration }) => (
  <motion.div
    variants={fadeUp}
    className="glass rounded-xl border border-white/5 p-4 flex items-start gap-3 hover:border-indigo-500/30 transition-colors group cursor-pointer"
  >
    <span className="text-2xl leading-none mt-0.5">{item.icon}</span>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-white text-sm font-semibold group-hover:text-indigo-300 transition-colors">{item.name}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyles[item.status]}`}>
          {item.status === 'live' ? 'Live' : item.status === 'beta' ? 'Beta' : 'Soon'}
        </span>
      </div>
      <p className="text-slate-500 text-xs leading-snug">{item.description}</p>
    </div>
  </motion.div>
);

export const IntegrationsPage = () => {
  const totalIntegrations = categories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(6,182,212,0.1),transparent)] pointer-events-none" />
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="max-w-4xl mx-auto space-y-6 relative">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium">
            <Puzzle className="w-3.5 h-3.5" />
            {totalIntegrations}+ integrations available
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold leading-tight">
            Connect<br />
            <span className="gradient-text">Everything You Use</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            FinFlow plugs into your existing financial stack in minutes â€” no manual exports, no copy-paste, no stale data.
          </motion.p>

          {/* Search Bar (decorative) */}
          <motion.div variants={fadeUp} className="max-w-xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                readOnly
                placeholder="Search integrations â€” e.g. Zerodha, Tally, Slack..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-slate-400 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 cursor-default"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Integration Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-16">
        {categories.map((cat, ci) => (
          <motion.div key={ci} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-xl font-bold text-white">{cat.label}</h2>
              <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400">
                {cat.items.length} integrations
              </span>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.items.map((item, ii) => (
                <IntegrationCard key={ii} item={item} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* API Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass rounded-3xl border border-indigo-500/20 p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
              <Code2 className="w-3.5 h-3.5" />
              Developer Platform
            </div>
            <h2 className="text-3xl font-bold">
              Don't see your tool?<br />
              <span className="gradient-text">Build your own.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              FinFlow's developer platform gives you full programmatic access to your financial data. Build custom automations, sync with proprietary systems, or create internal dashboards with our well-documented APIs.
            </p>
            <div className="flex flex-wrap gap-2">
              {['REST API', 'GraphQL', 'Webhooks', 'Python SDK', 'Node.js SDK', 'Go SDK', 'Ruby SDK', 'Java SDK', 'PHP SDK'].map((t, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 font-mono">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-2">
              <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-white transition-colors flex items-center gap-2 group text-sm">
                View API Docs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-white transition-colors text-sm">
                API Playground
              </button>
            </div>
          </div>

          {/* Code snippet */}
          <div className="bg-[#0f172a] rounded-2xl border border-white/10 p-6 font-mono text-sm space-y-1 overflow-x-auto">
            <p className="text-slate-600"># Get all transactions</p>
            <p><span className="text-cyan-400">curl</span> <span className="text-slate-400">-X GET \</span></p>
            <p className="pl-4 text-slate-300">"https://api.finflow.in/v1/transactions" \</p>
            <p className="pl-4"><span className="text-amber-400">-H</span> <span className="text-emerald-400">"Authorization: Bearer &lt;token&gt;"</span> \</p>
            <p className="pl-4"><span className="text-amber-400">-H</span> <span className="text-emerald-400">"Content-Type: application/json"</span> \</p>
            <p className="pl-4"><span className="text-amber-400">-d</span> <span className="text-emerald-400">{"'{"}</span></p>
            <p className="pl-8 text-emerald-400">"from": "2026-06-01",</p>
            <p className="pl-8 text-emerald-400">"to": "2026-06-17",</p>
            <p className="pl-8 text-emerald-400">"category": "food_dining",</p>
            <p className="pl-8 text-emerald-400">"limit": 50</p>
            <p className="pl-4 text-emerald-400">{"'}"}</p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-slate-600"># Response</p>
              <p><span className="text-slate-400">{"{"}</span> <span className="text-cyan-400">"data"</span><span className="text-slate-400">:</span> <span className="text-slate-400">[...]</span><span className="text-slate-400">,</span></p>
              <p className="pl-4"><span className="text-cyan-400">"meta"</span><span className="text-slate-400">:</span> <span className="text-slate-400">{"{ "}</span><span className="text-cyan-400">"total"</span><span className="text-slate-400">{": 127 }"}</span></p>
              <p className="text-slate-400">{"}"}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-xl mx-auto space-y-6">
          <Globe className="w-10 h-10 text-cyan-400 mx-auto" />
          <h2 className="text-3xl font-bold">
            Missing an integration?
          </h2>
          <p className="text-slate-400">We add new integrations every month based on user votes. Let us know what you need.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input type="text" readOnly placeholder="e.g. Paytm Money, Smallcase..." className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 placeholder-slate-600 text-sm focus:outline-none cursor-default" />
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-white transition-colors text-sm whitespace-nowrap flex items-center gap-2">
              <Webhook className="w-4 h-4" />
              Request
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
