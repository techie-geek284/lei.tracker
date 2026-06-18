import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link, Sparkles, Target, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Step {
  number: string
  icon: LucideIcon
  color: string
  title: string
  desc: string
}

const STEPS: Step[] = [
  {
    number: '01',
    icon: Link,
    color: '#6366f1',
    title: 'Connect Your Bank',
    desc: 'Securely link your accounts via RBI-approved Account Aggregator. Read-only. Bank-grade encryption.',
  },
  {
    number: '02',
    icon: Sparkles,
    color: '#06b6d4',
    title: 'AI Takes Over',
    desc: 'Transactions auto-categorised. Loans detected. Investments mapped. Goals suggested. In minutes.',
  },
  {
    number: '03',
    icon: Target,
    color: '#f59e0b',
    title: 'Set Your Goals',
    desc: 'Tell FinFlow what you want to achieve. It calculates what you need to save, invest, and cut each month.',
  },
  {
    number: '04',
    icon: TrendingUp,
    color: '#10b981',
    title: 'Watch It Happen',
    desc: 'Daily insights, weekly reports, monthly reviews. FinFlow keeps you on track — automatically.',
  },
]

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-line',
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 3,
          ease: 'none',
          scrollTrigger: {
            trigger: '.how-it-works',
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        },
      )

      gsap.utils.toArray<HTMLElement>('.step-circle').forEach((circle) => {
        gsap.fromTo(
          circle,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
            scrollTrigger: { trigger: circle, start: 'top 85%' },
          },
        )
      })

      gsap.utils.toArray<HTMLElement>('.step-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="how-it-works relative overflow-hidden bg-[#0f172a] py-28"
    >
      {/* Subtle flowing lines */}
      <div className="flow-lines absolute inset-0 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-semibold tracking-widest text-cyan-400">
            SIMPLE SETUP
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold">
            Up and Running <span className="gradient-text">in Minutes</span>
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* SVG connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5">
            <svg
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="rgba(99,102,241,0.25)"
                strokeWidth="2"
              />
              <line
                className="timeline-line"
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="url(#timelineGrad)"
                strokeWidth="2"
                strokeDasharray="1000"
                strokeDashoffset="1000"
              />
              <defs>
                <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="step-card flex flex-col items-center text-center">
                  {/* Circle */}
                  <div
                    className="step-circle relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2"
                    style={{
                      background: `${step.color}15`,
                      borderColor: `${step.color}60`,
                      boxShadow: `0 0 20px ${step.color}30`,
                    }}
                  >
                    <Icon size={28} style={{ color: step.color }} />
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                      style={{ background: step.color }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-8">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="step-card flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className="step-circle w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 border"
                    style={{ background: `${step.color}15`, borderColor: `${step.color}60` }}
                  >
                    <Icon size={22} style={{ color: step.color }} />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: `${step.color}30` }} />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
