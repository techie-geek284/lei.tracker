import { useRef, useEffect, Suspense, lazy } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MagneticButton } from '../ui/MagneticButton'
import { scrollToSection } from '../../lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface Particle {
  position: THREE.Vector3
  velocity: THREE.Vector3
}

const buildParticles = (): Particle[] =>
  Array.from({ length: 500 }, () => {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    const speed = 0.02 + Math.random() * 0.06
    return {
      position: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * speed,
        Math.sin(phi) * Math.sin(theta) * speed,
        Math.cos(phi) * speed,
      ),
    }
  })

const COLORS = ['#6366f1', '#06b6d4', '#f59e0b', '#10b981', '#818cf8']

const Burst = () => {
  const particles = useRef<Particle[]>(buildParticles())
  const ref = useRef<THREE.Points>(null!)
  const posArr = useRef(new Float32Array(500 * 3))
  const colArr = useRef(new Float32Array(500 * 3))
  const geo = useRef(new THREE.BufferGeometry())

  useEffect(() => {
    particles.current.forEach((p, i) => {
      const c = new THREE.Color(COLORS[i % COLORS.length])
      colArr.current[i * 3] = c.r
      colArr.current[i * 3 + 1] = c.g
      colArr.current[i * 3 + 2] = c.b
    })
    geo.current.setAttribute('color', new THREE.BufferAttribute(colArr.current, 3))
  }, [])

  useFrame(() => {
    particles.current.forEach((p, i) => {
      p.position.add(p.velocity)
      if (p.position.length() > 5) {
        p.position.set(0, 0, 0)
      }
      posArr.current[i * 3] = p.position.x
      posArr.current[i * 3 + 1] = p.position.y
      posArr.current[i * 3 + 2] = p.position.z
    })
    geo.current.setAttribute('position', new THREE.BufferAttribute(posArr.current.slice(), 3))
  })

  return (
    <points ref={ref} geometry={geo.current}>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-section', start: 'top 70%' },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="cta-section relative overflow-hidden py-32"
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, #0f172a 65%)',
      }}
    >
      {/* Particle canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }}>
          <Burst />
        </Canvas>
      </div>

      <div className="cta-content relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
          Your Financial Transformation
          <br />
          <span className="gradient-text">Starts Today</span>
        </h2>
        <p className="text-lg text-slate-400 mb-10">
          Join 500+ companies and 25,000+ individuals who manage every aspect of their finances
          on FinFlow.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <MagneticButton
            onClick={() => scrollToSection('home')}
            className="px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-brand-500 to-brand-600 glow-brand hover:from-brand-400 hover:to-brand-500 transition-colors"
          >
            Start Your Free Trial
          </MagneticButton>
          <button className="px-8 py-4 rounded-xl font-bold text-lg text-white border border-white/20 hover:bg-white/5 transition-colors">
            Schedule a Demo
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span>✓ Free 14-day trial</span>
          <span>✓ No credit card</span>
          <span>✓ Cancel anytime</span>
          <span>✓ Setup in 5 minutes</span>
          <span>✓ Bank-grade security</span>
        </div>
      </div>
    </div>
  )
}
