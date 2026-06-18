import { motion } from 'framer-motion';
import { TrendingUp, Wifi, BookOpen, Shield, MapPin, Clock, ArrowRight, Quote, Briefcase } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const perks = [
  { icon: TrendingUp, title: 'Competitive Salary + ESOPs', desc: 'Top-of-market cash comp plus meaningful equity. We want every team member to own a piece of what we build.', color: 'text-[#10b981]', bg: 'bg-[#10b981]/10' },
  { icon: Wifi, title: 'Remote-First, Async Culture', desc: 'Work from anywhere in India. We optimise for output, not office presence. Quarterly all-hands in Bangalore.', color: 'text-[#06b6d4]', bg: 'bg-[#06b6d4]/10' },
  { icon: BookOpen, title: '₹1L/Year Learning Budget', desc: 'Spend it on courses, books, conferences, or certifications. We invest in your growth without gatekeeping.', color: 'text-[#f59e0b]', bg: 'bg-[#f59e0b]/10' },
  { icon: Shield, title: 'Family Health Insurance', desc: 'Comprehensive health cover for you, your spouse, children, and parents. Because family matters.', color: 'text-[#6366f1]', bg: 'bg-[#6366f1]/10' },
];

type Role = {
  title: string;
  location: string;
  type: string;
  desc: string;
};

type Department = {
  name: string;
  color: string;
  textColor: string;
  roles: Role[];
};

const departments: Department[] = [
  {
    name: 'Engineering',
    color: 'bg-[#06b6d4]/10',
    textColor: 'text-[#06b6d4]',
    roles: [
      { title: 'Senior Full-Stack Engineer', location: 'Bangalore / Remote', type: 'Full-time', desc: 'Own end-to-end features across our React frontend and Node.js backend. You\'ll work with TypeScript, PostgreSQL, and a microservices architecture serving 25,000+ users.' },
      { title: 'ML Engineer – NLP & Categorisation', location: 'Remote', type: 'Full-time', desc: 'Train and deploy models that categorise Indian transactions with >98% accuracy. You\'ll work with transformer models, Indian financial data, and our real-time inference pipeline.' },
      { title: 'DevOps / SRE', location: 'Bangalore / Remote', type: 'Full-time', desc: 'Own our AWS infrastructure, CI/CD pipelines, and SLOs. We run Kubernetes, Terraform, and aim for 99.99% uptime for a financial platform where downtime costs real money.' },
      { title: 'Mobile Engineer (React Native)', location: 'Remote', type: 'Full-time', desc: 'Build the FinFlow consumer app used by 20,000+ individuals. You\'ll own cross-platform features, performance, and our biometric authentication flows.' },
    ],
  },
  {
    name: 'Product',
    color: 'bg-[#6366f1]/10',
    textColor: 'text-[#6366f1]',
    roles: [
      { title: 'Product Manager – Payments & Banking', location: 'Bangalore', type: 'Full-time', desc: 'Own our banking integrations, UPI flows, and Account Aggregator product surface. You\'ll work directly with the CTO and talk to CFOs weekly.' },
      { title: 'Senior UX Designer', location: 'Bangalore / Remote', type: 'Full-time', desc: 'Design complex financial interfaces that feel effortless. You\'ll own our design system, run user research, and raise the quality bar across every touchpoint.' },
    ],
  },
  {
    name: 'Sales & Growth',
    color: 'bg-[#f59e0b]/10',
    textColor: 'text-[#f59e0b]',
    roles: [
      { title: 'Enterprise Account Executive', location: 'Bangalore', type: 'Full-time', desc: 'Close deals with CFOs and finance teams at 200–2,000 person companies. You\'ll own a ₹5Cr+ annual quota and build long-term relationships with India\'s fastest-growing businesses.' },
      { title: 'Growth Marketer', location: 'Remote', type: 'Full-time', desc: 'Own paid acquisition, SEO, and lifecycle marketing. You\'ll run experiments end-to-end — from creative to attribution — and be accountable to CAC and activation targets.' },
    ],
  },
  {
    name: 'Finance & Operations',
    color: 'bg-[#10b981]/10',
    textColor: 'text-[#10b981]',
    roles: [
      { title: 'Financial Controller', location: 'Bangalore', type: 'Full-time', desc: 'Own our financial reporting, compliance, and runway management as we head into Series B. You\'ll work alongside the CFO and external auditors on our ₹42Cr balance sheet.' },
    ],
  },
];

const testimonials = [
  { name: 'Deepika Iyer', role: 'Senior Engineer', quote: 'I\'ve never shipped so much so fast. The autonomy here is real — I own features end-to-end with zero bureaucracy. And the async culture means I can do my best work from Coimbatore.' },
  { name: 'Kartik Bose', role: 'Product Manager', quote: 'At FinFlow, I talk to real CFOs every week and see my decisions ship in days. It\'s the closest thing to running your own company without the stress of fundraising.' },
  { name: 'Meghna Pillai', role: 'ML Engineer', quote: 'The learning budget is real — I used mine to attend NeurIPS last year. The team actually celebrates when you go deep on a technology that might not pay off for a year.' },
];

export const CareersPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#10b981]/5 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#6366f1]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-[#10b981] text-sm font-medium mb-6">
              <Briefcase size={14} /> We're Hiring
            </span>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Build the Future of{' '}
            <span className="gradient-text">Finance in India</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Join a team of <span className="text-white font-semibold">48 mission-driven builders</span> working on India's most ambitious financial platform.
          </motion.p>
          <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}
            className="flex justify-center gap-4 mt-8 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-slate-400">
              <MapPin size={14} className="text-[#6366f1]" /> Bangalore HQ
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-slate-400">
              <Wifi size={14} className="text-[#06b6d4]" /> Remote-friendly
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-slate-400">
              <TrendingUp size={14} className="text-[#10b981]" /> Series A funded
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-4 bg-[#1e293b]/30">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why FinFlow?</h2>
            <p className="text-slate-400">Beyond the mission, we've built a place where great people do their best work</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="glass rounded-2xl p-6 hover:border-[#6366f1]/30 transition-all hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl ${perk.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <perk.icon size={22} className={perk.color} />
                </div>
                <h3 className="font-bold text-white mb-2">{perk.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-slate-400">9 open roles across 4 departments</p>
          </motion.div>

          <div className="space-y-12">
            {departments.map((dept, di) => (
              <motion.div
                key={dept.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={di * 0.2} variants={fadeUp}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-4 py-2 ${dept.color} ${dept.textColor} text-sm font-bold rounded-full`}>{dept.name}</span>
                  <span className="text-slate-600 text-sm">{dept.roles.length} {dept.roles.length === 1 ? 'role' : 'roles'}</span>
                </div>
                <div className="space-y-4">
                  {dept.roles.map((role, ri) => (
                    <motion.div
                      key={role.title}
                      initial="hidden" whileInView="visible" viewport={{ once: true }} custom={ri * 0.1} variants={fadeUp}
                      className="glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-[#6366f1]/30 transition-all group"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="font-bold text-white text-lg">{role.title}</h3>
                          <span className={`px-2 py-0.5 ${dept.color} ${dept.textColor} text-xs font-medium rounded-full`}>{dept.name}</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                          <span className="flex items-center gap-1"><MapPin size={12} /> {role.location}</span>
                          <span className="flex items-center gap-1"><Clock size={12} /> {role.type}</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{role.desc}</p>
                      </div>
                      <button className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                        Apply Now <ArrowRight size={14} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Role */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass rounded-3xl p-10 text-center border border-[#f59e0b]/20"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#ef4444] flex items-center justify-center mx-auto mb-6">
              <Briefcase size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Don't See Your Role?</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We hire exceptional people even without an open role. If you're world-class at what you do and believe in our mission, we want to hear from you.
            </p>
            <a
              href="mailto:careers@finflow.in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f59e0b] to-[#ef4444] rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Send your CV to careers@finflow.in <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Life at FinFlow */}
      <section className="py-20 px-4 bg-[#1e293b]/30">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at FinFlow</h2>
            <p className="text-slate-400">Hear from the team</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="glass rounded-2xl p-6 flex flex-col hover:border-[#6366f1]/20 transition-all"
              >
                <Quote size={24} className="text-[#6366f1] mb-4 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-xs font-bold text-white">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
