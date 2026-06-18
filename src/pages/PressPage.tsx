import { motion } from 'framer-motion';
import { ArrowRight, Award, Download, Mail, Phone, Newspaper } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

type Article = {
  publication: string;
  pubStyle: string;
  headline: string;
  date: string;
  excerpt: string;
};

const articles: Article[] = [
  {
    publication: 'Economic Times',
    pubStyle: 'bg-[#f59e0b]/15 text-[#f59e0b]',
    headline: 'FinFlow raises â‚¹34Cr Series A to democratise financial planning',
    date: 'February 2024',
    excerpt: 'Sequoia India leads the round as FinFlow doubles down on its enterprise suite and AI-powered cash flow forecasting for Indian SMEs.',
  },
  {
    publication: 'YourStory',
    pubStyle: 'bg-[#10b981]/15 text-[#10b981]',
    headline: 'Meet the IIT duo building India\'s first AI-powered financial OS',
    date: 'September 2023',
    excerpt: 'Aryan Gupta and Kavya Nair left lucrative careers at Goldman Sachs and Google to solve a problem they\'d lived: financial chaos in fast-growing Indian companies.',
  },
  {
    publication: 'Inc42',
    pubStyle: 'bg-[#6366f1]/15 text-[#6366f1]',
    headline: 'FinFlow onboards 200 SMEs in first year of enterprise launch',
    date: 'December 2023',
    excerpt: 'The Bangalore-based startup has quietly become the go-to financial intelligence layer for India\'s new-age SMEs, from D2C brands to SaaS startups.',
  },
  {
    publication: 'TechCrunch India',
    pubStyle: 'bg-[#06b6d4]/15 text-[#06b6d4]',
    headline: 'How FinFlow\'s AI catches billing errors before CFOs do',
    date: 'March 2024',
    excerpt: 'FinFlow\'s anomaly detection engine flagged â‚¹2.3Cr in billing discrepancies across its enterprise customers in Q1 2024 alone â€” often before the finance team noticed.',
  },
  {
    publication: 'Business Standard',
    pubStyle: 'bg-[#8b5cf6]/15 text-[#8b5cf6]',
    headline: 'RBI Account Aggregator adoption gets a boost with FinFlow',
    date: 'August 2024',
    excerpt: 'FinFlow becomes one of the first fintech platforms to offer seamless AA-powered bank account linking, significantly reducing onboarding time for its 20,000+ users.',
  },
  {
    publication: 'Forbes India',
    pubStyle: 'bg-[#ef4444]/15 text-[#ef4444]',
    headline: '30 under 30: FinFlow founders making wealth management democratic',
    date: 'January 2025',
    excerpt: 'Aryan Gupta, 27, and Kavya Nair, 26, are recognised for building a platform that gives individuals the same financial intelligence that was previously only available to large corporates.',
  },
];

const awards = [
  { title: 'Tech30 2023', org: 'YourStory', desc: 'Named among the 30 most promising technology companies in India', icon: Award, color: 'text-[#f59e0b]', bg: 'bg-[#f59e0b]/10' },
  { title: 'Future Unicorn 2024', org: 'Inc42', desc: 'Recognised as one of India\'s top startups with potential for unicorn status', icon: Award, color: 'text-[#6366f1]', bg: 'bg-[#6366f1]/10' },
  { title: 'AI Gamechangers 2024', org: 'NASSCOM', desc: 'Honoured for transformative application of AI in India\'s financial services sector', icon: Award, color: 'text-[#10b981]', bg: 'bg-[#10b981]/10' },
];

export const PressPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/8 via-transparent to-[#f59e0b]/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#f59e0b] text-sm font-medium mb-6">
              <Newspaper size={14} /> Press & Media
            </span>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold mb-6">
            Press &{' '}
            <span className="gradient-text">Media</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp}
            className="text-xl text-slate-400 leading-relaxed">
            Resources for journalists and media partners covering India's fintech revolution
          </motion.p>
        </div>
      </section>

      {/* In the News */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-12">
            <h2 className="text-3xl font-bold mb-2">In the News</h2>
            <p className="text-slate-400">Recent coverage from India's top business and technology publications</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.div
                key={article.headline}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1} variants={fadeUp}
                className="glass rounded-2xl p-6 flex flex-col hover:border-[#6366f1]/30 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1.5 ${article.pubStyle} text-xs font-bold rounded-lg`}>
                    {article.publication}
                  </span>
                  <span className="text-slate-600 text-xs">{article.date}</span>
                </div>
                <h3 className="font-bold text-white leading-snug mb-3 flex-1 group-hover:text-[#6366f1] transition-colors">
                  {article.headline}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                <button className="flex items-center gap-2 text-[#6366f1] text-sm font-semibold hover:gap-3 transition-all mt-auto w-fit">
                  Read more <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-4 bg-[#1e293b]/30">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-slate-400">Industry recognition for our work in AI and financial services</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="glass rounded-2xl p-8 text-center hover:border-[#6366f1]/20 transition-all hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${award.bg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <award.icon size={28} className={award.color} />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-1">{award.org}</div>
                <h3 className="text-xl font-bold text-white mb-3">{award.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{award.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass rounded-3xl p-10 text-center border border-[#06b6d4]/20"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#6366f1] flex items-center justify-center mx-auto mb-6">
              <Download size={28} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Press Kit</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Download our logo pack, founder photos, product screenshots, and brand guidelines. All assets are pre-approved for editorial use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#06b6d4] to-[#6366f1] rounded-xl font-semibold text-white hover:opacity-90 transition-opacity">
                <Download size={16} /> Download Press Kit
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 glass border border-white/10 rounded-xl font-semibold text-slate-300 hover:text-white hover:border-white/20 transition-all">
                View Brand Guidelines
              </button>
            </div>
            <p className="text-slate-600 text-xs mt-4">ZIP file Â· 47MB Â· Includes SVG, PNG in light/dark variants</p>
          </motion.div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 px-4 bg-[#1e293b]/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Media Contact</h2>
            <p className="text-slate-400">For press enquiries, interview requests, and editorial collaborations</p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="glass rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#ef4444] flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
              SP
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Sunita Prasad</h3>
              <p className="text-slate-400 text-sm mb-4">Head of Communications & PR</p>
              <div className="space-y-2">
                <a href="mailto:PR@finflow.in" className="flex items-center justify-center sm:justify-start gap-2 text-[#06b6d4] text-sm hover:underline">
                  <Mail size={14} /> PR@finflow.in
                </a>
                <a href="tel:+919876543210" className="flex items-center justify-center sm:justify-start gap-2 text-slate-400 text-sm hover:text-white transition-colors">
                  <Phone size={14} /> +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
            className="text-center text-slate-600 text-sm mt-8"
          >
            We aim to respond to all press enquiries within 4 business hours. For urgent matters, please call directly.
          </motion.p>
        </div>
      </section>
    </div>
  );
};
