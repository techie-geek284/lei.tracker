import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reusable entrance animation — apply to any selector to slide + fade
 * its matched elements in as they enter the viewport.
 */
export const useScrollAnimation = (
  selector: string,
  options: ScrollTrigger.Vars = {},
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: selector,
            start: 'top 85%',
            ...options,
          },
        },
      )
    })
    return () => ctx.revert()
  }, [selector])
}
