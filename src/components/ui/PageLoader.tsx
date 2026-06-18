import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/** Thin brand-coloured progress bar that sweeps across the top on initial load. */
export const PageLoader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 z-[9999]"
      style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4, #f59e0b)' }}
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      onAnimationComplete={() => setLoading(false)}
    />
  )
}
