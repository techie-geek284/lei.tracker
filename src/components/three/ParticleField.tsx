import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count }: { count: number }) {
  const points = useRef<THREE.Points>(null)
  // Separate base rotation from mouse offset — fixes the jitter caused by
  // the original code accumulating both into rotation.y in the same frame.
  const baseRotY = useRef(0)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 16
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!points.current) return
    baseRotY.current += 0.00025
    // Smooth lerp to mouse target — stored separately, no conflicts
    mouseX.current += (state.pointer.x * 0.10 - mouseX.current) * 0.04
    mouseY.current += (state.pointer.y * 0.05 - mouseY.current) * 0.04
    points.current.rotation.y = baseRotY.current + mouseX.current
    points.current.rotation.x = -mouseY.current
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#818cf8"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ParticleField({ count = 1200 }: { count?: number }) {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0 }}
      camera={{ position: [0, 0, 5], fov: 60 }}
      // antialias: false — no benefit for point clouds, saves ~30% GPU cost
      // dpr capped at 1.5 — retina at 2.0 doubles pixels with no visible gain at particle scale
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
    >
      <Particles count={count} />
    </Canvas>
  )
}
