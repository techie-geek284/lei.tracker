import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Headphones, Handshake, MapPin, Clock, Phone, ChevronDown, Send } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const contactOptions = [
  {
    icon: Mail,
    title: 'Sales Enquiries',
    desc: 'Talk to our sales team about Business or Enterprise plans',
    email: 'sales@finflow.in',
    color: 'text-[#6366f1]',
    bg: 'bg-[#6366f1]/10',
    border: 'border-[#6366f1]/20',
    gradient: 'from-[#6366f1] to-[#06b6d4]',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    desc: 'Having issues? Our support team responds in under 2 hours',
    email: 'support@finflow.in',
    color: 'text-[#10b981]',
    bg: 'bg-[#10b981]/10',
    border: 'border-[#10b981]/20',
    gradient: 'from-[#10b981] to-[#06b6d4]',
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    desc: 'Integrations, co-marketing, or licensing enquiries',
    email: 'partners@finflow.in',
    color: 'text-[#f59e0b]',
    bg: 'bg-[#f59e0b]/10',
    border: 'border-[#f59e0b]/20',
    gradient: 'from-[#f59e0b] to-[#ef4444]',
  },
];

const faqs = [
  {
    q: 'How quickly can I get started?',
    a: 'Sign up in 2 minutes, connect your bank in 5. You\'re up and running same day. Our onboarding flow guides you step by step â€” no finance degree required.',
  },
  {
    q: 'Do you offer a demo?',
    a: 'Yes â€” book a 30-minute live demo with our team. We\'ll customise it to your business needs, walking you through the exact workflows relevant to your company\'s size and industry.',
  },
  {
    q: 'What\'s included in the free trial?',
    a: 'Full access to all Pro features for 14 days. No credit card required. This includes AI categorisation, cash flow forecasting, P&L dashboards, and up to 3 bank account connections.',
  },
];

export const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    firstName: '', lastName: '', email: '', company: '', topic: '', message: '',
  });

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/8 via-transparent to-[#10b981]/5 pointer-events-none" />
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-[#6366f1]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/15 border border-[#6366f1]/30 text-[#6366f1] text-sm font-medium mb-6">
              <Mail size={14} /> Get in Touch
            </span>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            We'd love to{' '}
            <span className="gradient-text">hear from you</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Reach out for sales, support, partnerships, or just to say hello
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((opt, i) => (
              <motion.div
                key={opt.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className={`glass rounded-2xl p-6 hover:border-[#6366f1]/30 transition-all hover:-translate-y-1 group border ${opt.border}`}
              >
                <div className={`w-12 h-12 rounded-xl ${opt.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <opt.icon size={22} className={opt.color} />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{opt.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{opt.desc}</p>
                <a
                  href={`mailto:${opt.email}`}
                  className={`inline-flex items-center gap-1 text-sm font-semibold bg-gradient-to-r ${opt.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                >
                  {opt.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Office Info */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

          {/* Form */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-2 glass rounded-3xl p-8 md:p-10 border border-[#6366f1]/15"
          >
            <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
            <p className="text-slate-400 text-sm mb-8">We'll get back to you within one business day.</p>

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">First name</label>
                  <input
                    type="text"
                    value={formState.firstName}
                    onChange={e => setFormState(s => ({ ...s, firstName: e.target.value }))}
                    placeholder="Aryan"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Last name</label>
                  <input
                    type="text"
                    value={formState.lastName}
                    onChange={e => setFormState(s => ({ ...s, lastName: e.target.value }))}
                    placeholder="Gupta"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Work email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  placeholder="aryan@company.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Company name</label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={e => setFormState(s => ({ ...s, company: e.target.value }))}
                  placeholder="Acme Pvt. Ltd."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Topic</label>
                <div className="relative">
                  <select
                    value={formState.topic}
                    onChange={e => setFormState(s => ({ ...s, topic: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#6366f1]/50 transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1e293b] text-slate-400">Select a topicâ€¦</option>
                    <option value="sales" className="bg-[#1e293b]">Sales</option>
                    <option value="support" className="bg-[#1e293b]">Support</option>
                    <option value="partnership" className="bg-[#1e293b]">Partnership</option>
                    <option value="press" className="bg-[#1e293b]">Press</option>
                    <option value="other" className="bg-[#1e293b]">Other</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  placeholder="Tell us about your company and what you're looking forâ€¦"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors text-sm resize-none"
                />
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-xl font-semibold text-white hover:opacity-90 transition-opacity text-sm">
                <Send size={16} /> Send Message
              </button>

              <p className="text-slate-600 text-xs text-center">
                By submitting, you agree to our Privacy Policy. We never share your data.
              </p>
            </div>
          </motion.div>

          {/* Office + FAQ */}
          <div className="space-y-6">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-bold text-white mb-5 text-lg">Bangalore HQ</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6366f1]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-[#6366f1]" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Address</div>
                    <div className="text-slate-400 text-sm mt-0.5 leading-relaxed">
                      4th Floor, Koramangala Tech Park<br />
                      Bangalore 560034
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={14} className="text-[#10b981]" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Office Hours</div>
                    <div className="text-slate-400 text-sm mt-0.5">Monâ€“Fri, 9 AMâ€“7 PM IST</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={14} className="text-[#f59e0b]" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Phone</div>
                    <a href="tel:+918045678900" className="text-slate-400 text-sm mt-0.5 hover:text-white transition-colors">+91 80 4567 8900</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-bold text-white mb-5 text-lg">Common Questions</h3>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-white/5 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-white/3 transition-colors group"
                    >
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors pr-4">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown size={16} className="text-slate-500" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
