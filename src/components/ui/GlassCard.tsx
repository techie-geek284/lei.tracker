import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: boolean
}

export const GlassCard = ({ children, className = '', glow = false }: GlassCardProps) => (
  <div
    className={`glass p-6 rounded-2xl hover:border-brand-500/40 hover:bg-white/10 transition-all duration-500 ${
      glow ? 'glow-brand' : ''
    } ${className}`}
  >
    {children}
  </div>
)
