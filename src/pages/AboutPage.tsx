import { motion } from 'framer-motion';
import { Heart, Zap, Globe, Users, MapPin, TrendingUp, Award, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stats = [
  { label: 'Founded', value: '2022', icon: Award },
  { label: 'Raised', value: '₹42Cr', icon: TrendingUp },
  { label: 'Companies', value: '500+', icon: Globe },
  { label: 'Users', value: '25,000+', icon: Users },
  { label: 'Team Members', value: '48', icon: Heart },
  { label: 'HQ', value: 'Bangalore', icon: MapPin },
];

const timeline = [
  { year: '2022', title: 'The Beginning', desc: 'Two IIT alumni frustrated with Excel sheets for managing company finances. FinFlow is born.' },
  { year: '2022 Q3', title: 'First Customers', desc: 'Built MVP in 90 days. First 10 customers from IIT alumni network.' },
  { year: '2023', title: 'Seed Round', desc: 'Seed round ₹8Cr. Launched consumer app. Hit 1,000 users.' },
  { year: '2024', title: 'Series A', desc: 'Series A ₹34Cr led by Sequoia India. Launched enterprise tier. 200+ businesses.' },
  { year: '2025', title: 'AA Integration', desc: 'Launched Account Aggregator integration. First white-label deal with a regional bank.' },
  { year: '2026', title: 'Scaling Up', desc: 'Series B in progress. 500+ companies. 25,000+ individuals. Expanding to Southeast Asia.' },
];

const values = [
  { icon: Heart, title: 'User Obsession', color: 'text-[#f59e0b]', bg: 'bg-[#f59e0b]/10', desc: 'Every decision starts and ends with the user. We obsess over every interaction, every edge case, every moment of friction.' },
  { icon: Zap, title: 'Radical Transparency', color: 'text-[#06b6d4]', bg: 'bg-[#06b6d4]/10', desc: 'We share everything — wins, losses, metrics, mistakes. Our users, investors, and team deserve nothing less.' },
  { icon: TrendingUp, title: 'AI-First', color: 'text-[#6366f1]', bg: 'bg-[#6366f1]/10', desc: 'Artificial intelligence is not a feature. It is our foundation. Every product decision is designed around intelligent automation.' },
  { icon: Globe, title: 'India-First', color: 'text-[#10b981]', bg: 'bg-[#10b981]/10', desc: 'Built for India\'s unique financial ecosystem — UPI, GST, Account Aggregator, INR volatility. Not a Western product retrofitted.' },
];

const team = [
  { name: 'Aryan Gupta', role: 'Co-Founder & CEO', meta: 'IIT Bombay · ex-Goldman Sachs', initials: 'AG', gradient: 'from-[#6366f1] to-[#06b6d4]' },
  { name: 'Kavya Nair', role: 'Co-Founder & CTO', meta: 'IIT Delhi · ex-Google', initials: 'KN', gradient: 'from-[#06b6d4] to-[#10b981]' },
  { name: 'Rahul Sharma', role: 'VP Engineering', meta: 'IIT Madras · ex-Zepto', initials: 'RS', gradient: 'from-[#10b981] to-[#6366f1]' },
  { name: 'Priya Mehta', role: 'VP Product', meta: 'ISB · ex-Razorpay', initials: 'PM', gradient: 'from-[#f59e0b] to-[#ef4444]' },
  { name: 'Vikash Kumar', role: 'VP Sales', meta: 'XLRI · ex-Salesforce', initials: 'VK', gradient: 'from-[#6366f1] to-[#f59e0b]' },
  { name: 'Anjali Reddy', role: 'Head of AI/ML', meta: 'IISc · ex-Microsoft Research', initials: 'AR', gradient: 'from-[#06b6d4] to-[#6366f1]' },
];

const investors = [
  { name: 'Sequoia India', desc: 'Lead investor, Series A. One of Asia\'s most storied venture firms backing India\'s best builders.', tag: 'Series A Lead' },
  { name: 'Blume Ventures', desc: 'Seed investor. India\'s most active early-stage VC, known for backing category-defining startups.', tag: 'Seed Investor' },
  { name: 'Accel India', desc: 'Series A participant. Global firm with deep India roots backing Flipkart, Swiggy, and Freshworks.', tag: 'Series A' },
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#06b6d4]/10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/20 border border-[#6366f1]/30 text-[#6366f1] text-sm font-medium mb-6">
              <Heart size={14} /> Our Story
            </span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            We're on a Mission to Make{' '}
            <span className="gradient-text">Financial Mastery</span>{' '}
            Accessible to Every Indian
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            India has 1.4 billion people. Only 3% use a financial planning tool.{' '}
            <span className="text-white font-semibold">We're here to fix that.</span>
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass rounded-2xl p-5 text-center group hover:border-[#6366f1]/40 transition-colors"
              >
                <stat.icon size={20} className="text-[#6366f1] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-slate-400">From an Excel frustration to India's leading financial OS</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#06b6d4] to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.5}
                  variants={fadeUp}
                  className="flex gap-8 pl-20 relative"
                >
                  <div className="absolute left-5 top-3 w-6 h-6 rounded-full bg-[#6366f1] border-2 border-[#0f172a] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="glass rounded-2xl p-6 flex-1 hover:border-[#6366f1]/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-[#6366f1] bg-[#6366f1]/10 px-3 py-1 rounded-full">{item.year}</span>
                      <span className="font-semibold text-white">{item.title}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[#1e293b]/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-slate-400">Four principles that guide every decision we make</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass rounded-2xl p-6 group hover:border-[#6366f1]/30 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${val.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <val.icon size={22} className={val.color} />
                </div>
                <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-slate-400">Built by operators who've been in the trenches</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass rounded-2xl p-6 flex items-start gap-4 group hover:border-[#6366f1]/30 transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p className="text-[#6366f1] text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-slate-500 text-xs">{member.meta}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-20 px-4 bg-[#1e293b]/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Backed By the Best</h2>
            <p className="text-slate-400">World-class investors who believe in our mission</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {investors.map((inv, i) => (
              <motion.div
                key={inv.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass rounded-2xl p-6 text-center hover:border-[#6366f1]/30 transition-all hover:-translate-y-1"
              >
                <span className="inline-block px-3 py-1 bg-[#6366f1]/20 text-[#6366f1] text-xs font-bold rounded-full mb-4">{inv.tag}</span>
                <h3 className="text-xl font-bold text-white mb-3">{inv.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{inv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass rounded-3xl p-12 border border-[#6366f1]/20"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center mx-auto mb-6">
              <Users size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-slate-400 mb-8 text-lg">
              We're 48 and growing. Help us bring financial clarity to every Indian.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
            >
              View Open Roles <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
