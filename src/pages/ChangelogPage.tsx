import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, ArrowRight, Sparkles, Zap, Wrench, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

type TagType = 'New' | 'Improved' | 'Fixed';

interface ChangeItem {
  tag: TagType;
  text: string;
}

interface Release {
  version: string;
  date: string;
  title: string;
  summary: string;
  highlight?: boolean;
  changes: ChangeItem[];
}

const tagStyles: Record<TagType, string> = {
  New: 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
  Improved: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
  Fixed: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
};

const tagIcons: Record<TagType, React.ReactNode> = {
  New: <Star className="w-3 h-3" />,
  Improved: <Zap className="w-3 h-3" />,
  Fixed: <Wrench className="w-3 h-3" />,
};

const releases: Release[] = [
  {
    version: 'v2.4.0',
    date: 'June 2026',
    title: 'AI Goal Coaching v2',
    summary: 'Major upgrade to the Goal Achievement Engine with richer simulations, family sync, and smarter coaching nudges.',
    highlight: true,
    changes: [
      { tag: 'New', text: 'AI Goal Coaching v2: conversational goal setting with natural language input' },
      { tag: 'New', text: 'Monte Carlo simulations improved — now runs 10,000 scenarios (up from 1,000), delivering 40% tighter confidence intervals' },
      { tag: 'New', text: 'Family plan multi-goal sync: spouse and dependents can now share goals with configurable contribution splits' },
      { tag: 'New', text: 'Goal collision detection: AI warns when two goals compete for the same monthly surplus' },
      { tag: 'Improved', text: 'SIP recommendation engine now accounts for direct vs. regular plan expense ratios automatically' },
      { tag: 'Improved', text: 'Goal dashboard redesigned with timeline view and milestone markers' },
      { tag: 'Fixed', text: 'Goal progress calculation incorrect after mid-month lump sum deposits — now resolved' },
      { tag: 'Fixed', text: 'Notification duplication bug in Family plan when both accounts receive the same alert' },
    ],
  },
  {
    version: 'v2.3.0',
    date: 'May 2026',
    title: 'Tally Integration GA & Bulk Import',
    summary: 'Tally Prime integration is now generally available, along with long-requested bulk expense import and export capabilities.',
    changes: [
      { tag: 'New', text: 'Tally Prime integration now generally available — two-way sync of ledgers, vouchers, and expenses' },
      { tag: 'New', text: 'Bulk expense import: upload CSV or Excel files with up to 10,000 rows, AI auto-categorises each row' },
      { tag: 'New', text: 'CSV and Excel export for transactions, expense reports, and capital gains summary' },
      { tag: 'New', text: 'Smart deduplication: auto-detects and merges duplicate transactions from bank feeds and manual imports' },
      { tag: 'Improved', text: 'Import history screen with row-level error reporting and partial success handling' },
      { tag: 'Improved', text: 'Tally sync speed improved by 3× — initial sync now completes in under 45 seconds for most accounts' },
      { tag: 'Fixed', text: 'CSV export included BOM character causing Excel rendering issues on Windows — fixed' },
    ],
  },
  {
    version: 'v2.2.0',
    date: 'April 2026',
    title: 'Portfolio XIRR & Mutual Fund Upgrades',
    summary: 'Significant improvements to investment tracking accuracy, with full support for direct plans and SIP analysis.',
    changes: [
      { tag: 'Improved', text: 'Portfolio XIRR calculation now fully accounts for fractional unit transactions and bonus units' },
      { tag: 'New', text: 'Mutual fund direct plan support: compare direct vs. regular plan returns with quantified commission cost' },
      { tag: 'New', text: 'SIP tracker: visualise every SIP instalment, NAV at purchase, and current unrealised gain per unit' },
      { tag: 'New', text: 'ELSS lock-in tracker: view lock-in expiry dates per SIP tranche for 80C planning' },
      { tag: 'Improved', text: 'Portfolio page loads 60% faster due to client-side caching of static fund data' },
      { tag: 'Improved', text: 'Mutual fund search now returns results in under 100ms with fuzzy matching' },
      { tag: 'Fixed', text: 'Incorrect unrealised gain displayed for funds with dividend reinvestment option — resolved' },
    ],
  },
  {
    version: 'v2.1.0',
    date: 'March 2026',
    title: 'Account Aggregator v2 & 47 New Banks',
    summary: 'Full support for RBI Account Aggregator Framework v2.0 with dramatically expanded bank coverage and real-time sync.',
    changes: [
      { tag: 'New', text: 'Account Aggregator Framework v2.0 support — consent flows are now faster and bank-branded' },
      { tag: 'New', text: '47 new bank connections added including regional co-operative banks and small finance banks' },
      { tag: 'New', text: 'Real-time sync via webhook push from AA-enabled banks — balances update within 30 seconds of a transaction' },
      { tag: 'New', text: 'Consent management centre: view, modify, and revoke all active data-sharing consents in one place' },
      { tag: 'Improved', text: 'Bank connection reliability improved — retry logic now handles AA gateway timeouts gracefully' },
      { tag: 'Improved', text: 'Transaction deduplication across AA and direct feeds improved — zero duplicate rate in 98.7% of cases' },
      { tag: 'Fixed', text: 'Some ICICI Bank IMPS transactions were being classified as NEFT — fixed via MCC enrichment' },
    ],
  },
  {
    version: 'v2.0.0',
    date: 'February 2026',
    title: 'FinFlow 2.0 — The Big Redesign',
    summary: 'A complete reimagining of the FinFlow experience. New design system, new AI engine, 5× performance improvements across the board.',
    highlight: true,
    changes: [
      { tag: 'New', text: 'All-new design system: glass morphism UI, dark-first, responsive across mobile, tablet, and desktop' },
      { tag: 'New', text: 'New AI engine (Finley v2): 40% better categorisation accuracy, 3× more insights per day' },
      { tag: 'Improved', text: 'Dashboard renders in under 1 second (down from 5.2 seconds) — 5× performance improvement' },
      { tag: 'New', text: 'Unified command palette: search transactions, insights, and settings from anywhere with ⌘K' },
      { tag: 'New', text: 'iOS and Android apps rebuilt from scratch in React Native — feature parity with web' },
      { tag: 'New', text: 'Dark mode is now the default; light mode available in appearance settings' },
      { tag: 'Improved', text: 'Onboarding flow reduced from 14 steps to 4 steps — median time-to-value cut from 12 minutes to 2 minutes' },
      { tag: 'Fixed', text: 'Resolved 140+ issues migrated from v1.x backlog during full architecture rewrite' },
    ],
  },
  {
    version: 'v1.9.0',
    date: 'January 2026',
    title: 'Enterprise SSO, Custom Roles & Audit Logs',
    summary: 'Enterprise-grade access control and compliance features — making FinFlow ready for CFOs, controllers, and finance teams.',
    changes: [
      { tag: 'New', text: 'SSO/SAML 2.0 support: integrate with Okta, Azure AD, Google Workspace, and OneLogin' },
      { tag: 'New', text: 'Custom roles and permissions: define view-only, editor, and admin roles with field-level granularity' },
      { tag: 'New', text: 'Immutable audit log: every action in the system is timestamped and logged for compliance' },
      { tag: 'New', text: 'IP allowlisting and session timeout policies for enterprise security requirements' },
      { tag: 'Improved', text: 'User invitation flow supports bulk invite via CSV for onboarding large teams' },
      { tag: 'Fixed', text: 'Session expiry was not propagating correctly to open browser tabs — fixed with BroadcastChannel' },
    ],
  },
];

const ReleaseCard = ({ release, index }: { release: Release; index: number }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="relative pl-8 md:pl-16"
  >
    {/* Timeline dot */}
    <div className={`absolute left-0 top-6 w-3 h-3 rounded-full border-2 ${release.highlight ? 'bg-indigo-500 border-indigo-400' : 'bg-slate-600 border-slate-500'}`} />

    <div className={`glass rounded-2xl border ${release.highlight ? 'border-indigo-500/25' : 'border-white/5'} p-7 space-y-5`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-lg font-mono ${release.highlight ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-white/5 text-slate-400 border border-white/10'}`}>
              {release.version}
            </span>
            {release.highlight && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Major
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-white">{release.title}</h3>
          <p className="text-slate-500 text-sm">{release.date}</p>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-indigo-500/30 pl-4 italic">
        {release.summary}
      </p>

      <div className="space-y-2.5">
        {release.changes.map((c, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md font-medium shrink-0 mt-0.5 ${tagStyles[c.tag]}`}>
              {tagIcons[c.tag]}
              {c.tag}
            </span>
            <span className="text-slate-300 text-sm leading-snug">{c.text}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const ChangelogPage = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(99,102,241,0.1),transparent)] pointer-events-none" />
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="max-w-3xl mx-auto space-y-5 relative">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Updated June 2026
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold leading-tight">
            What's New in <span className="gradient-text">FinFlow</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
            We ship improvements every week. Here's what we've been building — complete with the reasoning behind each decision.
          </motion.p>

          {/* Subscribe */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50"
            />
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-white transition-colors text-sm whitespace-nowrap flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Get updates
            </button>
          </motion.div>
          <motion.p variants={fadeUp} className="text-slate-600 text-xs">No spam. Email sent when a new version ships.</motion.p>
        </motion.div>
      </section>

      {/* Tag Legend */}
      <section className="max-w-4xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {(['New', 'Improved', 'Fixed'] as TagType[]).map(tag => (
            <span key={tag} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${tagStyles[tag]}`}>
              {tagIcons[tag]}
              {tag}
            </span>
          ))}
          <span className="text-slate-500 text-xs flex items-center">← use these tags to filter by type</span>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        {/* Vertical line */}
        <div className="relative">
          <div className="absolute left-[5px] md:left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent" />
          <div className="space-y-10">
            {releases.map((release, i) => (
              <ReleaseCard key={i} release={release} index={i} />
            ))}
          </div>
        </div>

        {/* Load more */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12">
          <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 mx-auto">
            View older releases
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-t from-indigo-500/5 to-transparent">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-lg mx-auto space-y-4">
          <Bell className="w-8 h-8 text-indigo-400 mx-auto" />
          <h2 className="text-2xl font-bold">Never miss a release</h2>
          <p className="text-slate-400 text-sm">Get the changelog delivered to your inbox the moment we ship.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50"
            />
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-white transition-colors text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
