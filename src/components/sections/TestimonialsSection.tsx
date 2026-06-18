import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  initials: string
  color: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rohan Mehta',
    role: 'CFO',
    company: 'TechNova Pvt Ltd',
    initials: 'RM',
    color: '#6366f1',
    quote:
      'FinFlow replaced 3 separate tools for us. The AI anomaly detection alone saved us ₹2.4L last quarter by catching a vendor billing error.',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'GreenLeaf Organics',
    initials: 'PS',
    color: '#06b6d4',
    quote:
      'We set up FinFlow in a weekend. By Monday, our entire expense approval workflow was automated. My team was shocked.',
  },
  {
    name: 'Arjun Kapoor',
    role: 'Investment Analyst',
    company: 'Individual',
    initials: 'AK',
    color: '#f59e0b',
    quote:
      'The portfolio rebalancing AI is genuinely impressive. It spotted a 4.7% XIRR drag from a mis-allocated fund I had overlooked for 2 years.',
  },
  {
    name: 'Sunita Rao',
    role: 'HR Director',
    company: 'Meridian Corp',
    initials: 'SR',
    color: '#10b981',
    quote:
      'Our 200-person team was on manual expense reports. FinFlow automated 90% of it. Finance sign-off time went from 5 days to 4 hours.',
  },
  {
    name: 'Vikram Nair',
    role: 'Family',
    company: 'Personal Account',
    initials: 'VN',
    color: '#8b5cf6',
    quote:
      'I can finally see where every rupee goes. The family goals feature helped us save for our home down payment without feeling deprived.',
  },
  {
    name: 'Anjali Singh',
    role: 'VP Finance',
    company: 'Indira Capital',
    initials: 'AS',
    color: '#ec4899',
    quote:
      'White-label deployment took 2 weeks. Our customers love it, retention improved 23% since launch. Best fintech decision we made.',
  },
]

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div className="glass rounded-2xl p-6 min-w-[320px] max-w-[360px] flex-shrink-0 mx-3">
    <div className="flex items-center gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="text-gold-400 fill-gold-400" />
      ))}
    </div>
    <p className="text-sm text-slate-300 leading-relaxed mb-5">"{t.quote}"</p>
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
        style={{ background: `${t.color}40`, border: `1px solid ${t.color}60` }}
      >
        {t.initials}
      </div>
      <div>
        <p className="text-sm font-semibold">{t.name}</p>
        <p className="text-xs text-slate-400">
          {t.role} · {t.company}
        </p>
      </div>
    </div>
  </div>
)

const ROW_1 = [...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)]
const ROW_2 = [...TESTIMONIALS.slice(3, 6), ...TESTIMONIALS.slice(3, 6)]

export const TestimonialsSection = () => (
  <div className="bg-[#1e293b] py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
      <span className="text-sm font-semibold tracking-widest text-cyan-400">
        LOVED BY USERS
      </span>
      <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
        What Our Users <span className="gradient-text">Are Saying</span>
      </h2>
    </div>

    {/* Row 1 — scrolls left */}
    <div className="marquee-container mb-6">
      <div className="marquee-track marquee-track-1 flex">
        {ROW_1.map((t, i) => (
          <TestimonialCard key={`r1-${i}`} t={t} />
        ))}
      </div>
    </div>

    {/* Row 2 — scrolls right (hidden on mobile) */}
    <div className="marquee-container hidden md:block">
      <div className="marquee-track marquee-track-2 flex">
        {ROW_2.map((t, i) => (
          <TestimonialCard key={`r2-${i}`} t={t} />
        ))}
      </div>
    </div>
  </div>
)
