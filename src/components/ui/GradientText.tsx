import type { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
}

/** Inline text rendered with the animated indigo → cyan → gold gradient. */
export const GradientText = ({ children, className = '' }: GradientTextProps) => (
  <span className={`gradient-text ${className}`}>{children}</span>
)
