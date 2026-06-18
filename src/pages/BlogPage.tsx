import { motion } from 'framer-motion';
import { type LucideIcon, Clock, Calendar, ArrowRight, Mail, TrendingUp, Cpu, BarChart2, Briefcase, FileText, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const categories = ['All', 'AI & Finance', 'Investing', 'Engineering', 'Business', 'Tax & Compliance', 'Personal Finance'];

const categoryStyles: Record<string, { bg: string; text: string; icon: LucideIcon }> = {
  'AI & Finance':     { bg: 'bg-[#6366f1]/15', text: 'text-[#6366f1]', icon: Cpu },
  'Investing':        { bg: 'bg-[#10b981]/15', text: 'text-[#10b981]', icon: TrendingUp },
  'Engineering':      { bg: 'bg-[#06b6d4]/15', text: 'text-[#06b6d4]', icon: BarChart2 },
  'Business':         { bg: 'bg-[#f59e0b]/15', text: 'text-[#f59e0b]', icon: Briefcase },
  'Tax & Compliance': { bg: 'bg-[#ef4444]/15', text: 'text-[#ef4444]', icon: FileText },
  'Personal Finance': { bg: 'bg-[#8b5cf6]/15', text: 'text-[#8b5cf6]', icon: Users },
};

const posts = [
  {
    title: 'The Complete Guide to XIRR: What It Is and Why It Matters',
    date: 'May 28, 2026',
    readTime: '6 min',
    category: 'Investing',
    author: 'Kavya Nair',
    authorInitial: 'KN',
    authorGradient: 'from-[#06b6d4] to-[#10b981]',
    excerpt: 'XIRR is the most accurate way to measure investment returns when cash flows happen at irregular intervals. Here\'s why every investor in India needs to understand it.',
  },
  {
    title: 'How We Built Our Account Aggregator Integration in 3 Weeks',
    date: 'May 14, 2026',
    readTime: '12 min',
    category: 'Engineering',
    author: 'Rahul Sharma',
    authorInitial: 'RS',
    authorGradient: 'from-[#10b981] to-[#6366f1]',
    excerpt: 'The RBI\'s Account Aggregator framework is transformative. We share everything we learned building our AA integration â€” the good, the painful, and the unexpected.',
  },
  {
    title: 'The Hidden Cost of Manual Expense Reports: A Data Study',
    date: 'April 30, 2026',
    readTime: '5 min',
    category: 'Business',
    author: 'Priya Mehta',
    authorInitial: 'PM',
    authorGradient: 'from-[#f59e0b] to-[#ef4444]',
    excerpt: 'We analysed expense data from 200+ SMEs and found that manual expense reporting costs the average Indian company â‚¹4.2L per year in lost productivity alone.',
  },
  {
    title: 'Monte Carlo Simulations: How FinFlow Predicts Your Financial Future',
    date: 'April 18, 2026',
    readTime: '9 min',
    category: 'AI & Finance',
    author: 'Anjali Reddy',
    authorInitial: 'AR',
    authorGradient: 'from-[#06b6d4] to-[#6366f1]',
    excerpt: 'We run 10,000 simulated futures every time you open FinFlow. Here\'s the probabilistic modelling that powers our retirement and goal projections.',
  },
  {
    title: 'LTCG Tax Harvesting: A Step-by-Step Guide Before March 31',
    date: 'April 2, 2026',
    readTime: '7 min',
    category: 'Tax & Compliance',
    author: 'Vikash Kumar',
    authorInitial: 'VK',
    authorGradient: 'from-[#6366f1] to-[#f59e0b]',
    excerpt: 'Long-term capital gains tax harvesting can save you lakhs. This step-by-step guide walks you through how to legally minimise your LTCG tax before the financial year ends.',
  },
  {
    title: 'Why Indian Families Need a Shared Financial Dashboard',
    date: 'March 20, 2026',
    readTime: '4 min',
    category: 'Personal Finance',
    author: 'Aryan Gupta',
    authorInitial: 'AG',
    authorGradient: 'from-[#6366f1] to-[#06b6d4]',
    excerpt: 'Managing finances as a joint family is uniquely Indian. We built our family dashboard after listening to hundreds of users talk about the chaos of shared accounts and multiple earners.',
  },
];

export const BlogPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#06b6d4]/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06b6d4]/15 border border-[#06b6d4]/30 text-[#06b6d4] text-sm font-medium mb-6">
              <FileText size={14} /> Knowledge Hub
            </span>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="gradient-text">FinFlow</span> Blog
          </motion.h1>
          <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp}
            className="text-xl text-slate-400 leading-relaxed">
            Insights on personal finance, AI, and building for India's financial future
          </motion.p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="px-4 pb-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((cat) => {
              const style = categoryStyles[cat];
              const isAll = cat === 'All';
              return (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    isAll
                      ? 'bg-[#6366f1] text-white border-[#6366f1]'
                      : `${style?.bg ?? ''} ${style?.text ?? 'text-slate-400'} border-white/10 hover:border-white/20`
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass rounded-3xl overflow-hidden border border-[#6366f1]/20 hover:border-[#6366f1]/40 transition-colors group"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 bg-gradient-to-br from-[#6366f1]/20 via-[#06b6d4]/10 to-transparent p-10 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Cpu size={36} className="text-white" />
                  </div>
                  <span className="inline-block px-4 py-2 bg-[#6366f1]/20 text-[#6366f1] text-sm font-bold rounded-full">FEATURED</span>
                </div>
              </div>
              <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#6366f1]/15 text-[#6366f1] text-xs font-bold rounded-full">AI & Finance</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  How AI is Revolutionising Personal Finance in India
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  The intersection of artificial intelligence and personal finance is creating a generational shift in how Indians manage money. Here's what it means for the next 500 million users.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366f1] to-[#06b6d4] flex items-center justify-center text-xs font-bold text-white">AG</div>
                    <div>
                      <div className="text-sm font-medium text-white">Aryan Gupta, CEO</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500 text-sm">
                    <span className="flex items-center gap-1"><Calendar size={13} /> June 15, 2026</span>
                    <span className="flex items-center gap-1"><Clock size={13} /> 8 min read</span>
                  </div>
                </div>
                <button className="mt-6 inline-flex items-center gap-2 text-[#6366f1] font-semibold hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-2xl font-bold mb-8 text-slate-200"
          >
            Latest Articles
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => {
              const style = categoryStyles[post.category] ?? { bg: 'bg-slate-700/20', text: 'text-slate-400', icon: FileText };
              const Icon = style.icon;
              return (
                <motion.article
                  key={post.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.15}
                  variants={fadeUp}
                  className="glass rounded-2xl p-6 flex flex-col hover:border-[#6366f1]/30 transition-all hover:-translate-y-1 group cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-xl ${style.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={18} className={style.text} />
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 ${style.bg} ${style.text} text-xs font-bold rounded-full mb-3 w-fit`}>
                    {post.category}
                  </span>
                  <h3 className="font-bold text-white mb-3 leading-snug flex-1 group-hover:text-[#6366f1] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${post.authorGradient} flex items-center justify-center text-xs font-bold text-white`}>
                        {post.authorInitial}
                      </div>
                      <span className="text-slate-500 text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 text-xs">
                      <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass rounded-3xl p-10 text-center border border-[#06b6d4]/20"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#6366f1] flex items-center justify-center mx-auto mb-6">
              <Mail size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Stay in the Loop</h2>
            <p className="text-slate-400 mb-8">
              One email a week. No spam. Just the best finance and tech insights from our team.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#6366f1]/50 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-xl font-semibold text-white hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-slate-600 text-xs mt-3">Join 4,200+ subscribers. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
