import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/** Subtle glowing orb that trails the cursor — desktop only. */
export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      gsap.to(glowRef.current, {
        x: e.clientX - 150,
        y: e.clientY - 150,
        duration: 0.8,
        ease: 'power2.out',
      })
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 z-0 hidden md:block"
      style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }}
    />
  )
}
