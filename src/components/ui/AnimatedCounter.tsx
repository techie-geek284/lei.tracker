import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  className?: string
}

/** Counts from 0 to `target` with GSAP when scrolled into view. */
export const AnimatedCounter = ({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2.5,
  className = '',
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null)
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true })

  const setRefs = (el: HTMLSpanElement | null) => {
    ref.current = el
    inViewRef(el)
  }

  useEffect(() => {
    if (!inView || !ref.current) return
    const obj = { value: 0 }
    const tween = gsap.to(obj, {
      value: target,
      duration,
      ease: 'power2.out',
      onUpdate() {
        if (!ref.current) return
        const formatted =
          decimals > 0
            ? obj.value.toFixed(decimals)
            : Math.round(obj.value).toLocaleString('en-IN')
        ref.current.textContent = prefix + formatted + suffix
      },
    })
    return () => {
      tween.kill()
    }
  }, [inView, target, suffix, prefix, decimals, duration])

  const initial = decimals > 0 ? (0).toFixed(decimals) : '0'

  return (
    <span ref={setRefs} className={className}>
      {prefix}
      {initial}
      {suffix}
    </span>
  )
}
