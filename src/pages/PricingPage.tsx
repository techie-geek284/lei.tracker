import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Minus, ChevronDown, ArrowRight, Sparkles, Mail, MessageCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

// â”€â”€ Plans â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface Plan {
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  description: string;
  cta: string;
  highlighted?: boolean;
  badge?: string;
  color: string;
  borderColor: string;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'For individuals getting started with financial clarity.',
    cta: 'Get Started Free',
    color: 'text-slate-300',
    borderColor: 'border-white/10',
  },
  {
    name: 'Pro',
    monthlyPrice: 499,
    annualPrice: 399,
    description: 'For serious individuals who want AI-powered insights.',
    cta: 'Start Free Trial',
    highlighted: true,
    badge: 'Most Popular',
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/40',
  },
  {
    name: 'Business',
    monthlyPrice: 1499,
    annualPrice: 1199,
    description: 'For small businesses and families managing together.',
    cta: 'Start Free Trial',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'For large organisations with custom compliance needs.',
    cta: 'Contact Sales',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
  },
];

// â”€â”€ Comparison Table â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

type CellValue = boolean | string;

interface FeatureRow {
  category?: string;
  feature: string;
  starter: CellValue;
  pro: CellValue;
  business: CellValue;
  enterprise: CellValue;
}

const featureRows: FeatureRow[] = [
  { category: 'Core Features', feature: 'Connected bank accounts', starter: '2', pro: '10', business: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Transactions per month', starter: '500', pro: 'Unlimited', business: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'AI expense categorisation', starter: true, pro: true, business: true, enterprise: true },
  { feature: 'Budget tracking', starter: true, pro: true, business: true, enterprise: true },
  { feature: 'Manual entries & splits', starter: true, pro: true, business: true, enterprise: true },

  { category: 'AI & Insights', feature: 'AI-powered insights per day', starter: '3', pro: 'Unlimited', business: 'Unlimited', enterprise: 'Custom' },
  { feature: 'Anomaly detection & alerts', starter: false, pro: true, business: true, enterprise: true },
  { feature: 'Predictive cash flow (90-day)', starter: false, pro: true, business: true, enterprise: true },
  { feature: 'Tax-loss harvesting suggestions', starter: false, pro: true, business: true, enterprise: true },

  { category: 'Investments & Assets', feature: 'Portfolio sync (MF/Stocks/ETF)', starter: false, pro: true, business: true, enterprise: true },
  { feature: 'True XIRR calculation', starter: false, pro: true, business: true, enterprise: true },
  { feature: 'Asset register (property, gold, etc.)', starter: false, pro: true, business: true, enterprise: true },
  { feature: 'Capital gains report for ITR', starter: false, pro: true, business: true, enterprise: true },

  { category: 'Goals & Planning', feature: 'Financial goals', starter: '1', pro: '10', business: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Monte Carlo simulation', starter: false, pro: true, business: true, enterprise: true },
  { feature: 'Family/multi-user goal sync', starter: false, pro: false, business: true, enterprise: true },

  { category: 'Integrations', feature: 'Accounting integrations (Tally, Zoho)', starter: false, pro: false, business: true, enterprise: true },
  { feature: 'ERP integrations (SAP, NetSuite)', starter: false, pro: false, business: false, enterprise: true },
  { feature: 'REST API & Webhooks', starter: false, pro: false, business: true, enterprise: true },

  { category: 'Security & Admin', feature: 'Team members / sub-users', starter: '1', pro: '1', business: '5', enterprise: 'Unlimited' },
  { feature: 'Custom roles & permissions', starter: false, pro: false, business: false, enterprise: true },
  { feature: 'SSO / SAML 2.0', starter: false, pro: false, business: false, enterprise: true },
  { feature: 'Audit logs', starter: false, pro: false, business: '30 days', enterprise: '2 years' },
  { feature: 'Dedicated account manager', starter: false, pro: false, business: false, enterprise: true },
  { feature: 'SLA guarantee', starter: false, pro: false, business: '99.5%', enterprise: '99.99%' },
];

const CellDisplay = ({ value }: { value: CellValue }) => {
  if (value === true) return <Check className="w-5 h-5 text-emerald-400 mx-auto" />;
  if (value === false) return <X className="w-4 h-4 text-slate-700 mx-auto" />;
  if (value === 'â€”') return <Minus className="w-4 h-4 text-slate-700 mx-auto" />;
  return <span className="text-slate-300 text-sm font-medium">{value}</span>;
};

// â”€â”€ FAQ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: 'Can I switch plans anytime?',
    a: 'Yes, upgrades take effect immediately and you are billed the pro-rated difference for the remainder of your billing cycle. Downgrades take effect at the start of your next billing cycle, giving you full access until then.',
  },
  {
    q: 'What happens when my trial ends?',
    a: 'At the end of your 14-day trial you are automatically moved to the Starter (free) plan. Your data is retained in full. You will not be charged unless you actively choose a paid plan and add a payment method.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'We offer a full refund within 30 days of any paid subscription charge â€” no questions asked. After 30 days we evaluate refund requests on a case-by-case basis. Contact support@finflow.in with your order ID.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No. There are no setup fees, onboarding fees, or hidden charges. The price you see is the price you pay. Enterprise contracts may include implementation services priced separately.',
  },
  {
    q: 'How does the Account Aggregator work?',
    a: 'Account Aggregator (AA) is an RBI-licensed data-sharing framework. You consent once per bank, and the bank shares your transaction data directly with FinFlow over an encrypted channel. FinFlow never sees your banking credentials â€” credentials stay between you and your bank.',
  },
  {
    q: 'Can I add more users to the Business plan?',
    a: 'The Business plan includes 5 user seats. Additional seats can be purchased at â‚¹299/user/month (or â‚¹239/user/month on annual billing). For teams larger than 20 users, we recommend the Enterprise plan.',
  },
  {
    q: 'Do you offer discounts for NGOs or early-stage startups?',
    a: 'Yes. Registered NGOs receive a 50% discount on all plans. DPIIT-recognised startups receive 30% off for the first year. Email eligibility@finflow.in with your registration documents to apply.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards (Visa, Mastercard, RuPay), UPI, net banking, and NACH mandates for auto-debit. Enterprise customers can also pay via NEFT/RTGS with an invoice.',
  },
];

const FAQItem = ({ faq }: { faq: FAQ }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={fadeUp} className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="text-white font-medium group-hover:text-indigo-300 transition-colors">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 mt-0.5 transition-transform duration-300 ${open ? 'rotate-180 text-indigo-400' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-5">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const PricingPage = () => {
  const [annual, setAnnual] = useState(true);

  const displayPrice = (plan: Plan) => {
    if (plan.monthlyPrice === null) return 'Custom';
    if (plan.monthlyPrice === 0) return 'Free';
    const price = annual ? plan.annualPrice! : plan.monthlyPrice;
    return `â‚¹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(99,102,241,0.12),transparent)] pointer-events-none" />
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="max-w-3xl mx-auto space-y-5 relative">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            No surprises. Ever.
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold leading-tight">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
            No setup fees. No hidden charges. Cancel anytime. Scale as your financial life grows.
          </motion.p>

          {/* Toggle */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 pt-2">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? 'bg-indigo-600' : 'bg-white/10'}`}
            >
              <motion.div
                className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md"
                animate={{ x: annual ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${annual ? 'text-white' : 'text-slate-500'}`}>
              Annual
              <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">Save 20%</span>
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`glass rounded-2xl border ${plan.borderColor} p-7 flex flex-col space-y-6 relative ${plan.highlighted ? 'ring-1 ring-indigo-500/50' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs px-3 py-1 bg-indigo-600 text-white rounded-full font-semibold whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="space-y-2">
                <h3 className={`text-lg font-bold ${plan.color}`}>{plan.name}</h3>
                <p className="text-slate-500 text-sm leading-snug">{plan.description}</p>
              </div>

              <div className="space-y-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={annual ? 'annual' : 'monthly'}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-4xl font-bold text-white">{displayPrice(plan)}</span>
                    {plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                      <span className="text-slate-500 text-sm ml-1">/mo</span>
                    )}
                  </motion.div>
                </AnimatePresence>
                {annual && plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                  <p className="text-slate-600 text-xs">billed â‚¹{(plan.annualPrice! * 12).toLocaleString('en-IN')}/year</p>
                )}
              </div>

              <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${plan.highlighted ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'}`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10 space-y-3">
          <h2 className="text-3xl font-bold">Full Feature Comparison</h2>
          <p className="text-slate-400">Everything you get with each plan â€” no fine print.</p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-2xl border border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-slate-400 text-sm font-medium w-1/3">Feature</th>
                  {plans.map((plan, i) => (
                    <th key={i} className={`py-4 px-4 text-center text-sm font-bold ${plan.color} w-1/6`}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureRows.map((row, i) => (
                  <>
                    {row.category && (
                      <tr key={`cat-${i}`} className="bg-white/[0.02]">
                        <td colSpan={5} className="py-3 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {row.category}
                        </td>
                      </tr>
                    )}
                    <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-6 text-slate-300 text-sm">{row.feature}</td>
                      <td className="py-3.5 px-4 text-center"><CellDisplay value={row.starter} /></td>
                      <td className="py-3.5 px-4 text-center"><CellDisplay value={row.pro} /></td>
                      <td className="py-3.5 px-4 text-center"><CellDisplay value={row.business} /></td>
                      <td className="py-3.5 px-4 text-center"><CellDisplay value={row.enterprise} /></td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12 space-y-3">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-slate-400">Can't find the answer you're looking for? Chat with us below.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-2xl border border-white/5 px-6 divide-y divide-white/0">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-3xl border border-white/10 p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">Still have questions?</h2>
            <p className="text-slate-400 leading-relaxed">
              Our team is available Mondayâ€“Saturday, 9amâ€“7pm IST. Typical response time is under 4 hours on business days. Enterprise inquiries get a dedicated response within 2 hours.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm">support@finflow.in</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MessageCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-sm">Live chat â€” bottom right corner of this page</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50" />
              <input type="email" placeholder="Work email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50" />
              <textarea
                rows={4}
                placeholder="Describe your question or requirement..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 resize-none"
              />
              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-white transition-colors flex items-center justify-center gap-2 group">
                Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-t from-indigo-500/5 to-transparent">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-xl mx-auto space-y-5">
          <h2 className="text-3xl font-bold">
            Ready to take control of <span className="gradient-text">your finances?</span>
          </h2>
          <p className="text-slate-400">14-day free trial on Pro. No credit card required.</p>
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold text-white transition-colors flex items-center gap-2 mx-auto group">
            Get Started for Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};
