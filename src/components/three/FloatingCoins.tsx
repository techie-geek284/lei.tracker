import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CoinConfig {
  position: [number, number, number]
  r: number
  speed: number
  phase: number
}

const COINS: CoinConfig[] = [
  { position: [2.4, 1.2, 0.5], r: 0.22, speed: 0.8, phase: 0 },
  { position: [-2.6, -0.8, 0.8], r: 0.18, speed: 1.1, phase: 1.2 },
  { position: [1.8, -1.4, -0.6], r: 0.25, speed: 0.6, phase: 2.1 },
  { position: [-2.2, 1.5, -0.4], r: 0.15, speed: 1.3, phase: 3.0 },
  { position: [0.4, 1.9, 0.9], r: 0.2, speed: 0.9, phase: 4.2 },
]

function Coin({ position, r, speed, phase }: CoinConfig) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.position.y = position[1] + Math.sin(t * speed + phase) * 0.25
    ref.current.rotation.x = Math.PI / 2 + t * speed * 0.4
    ref.current.rotation.z = t * speed * 0.3
  })

  return (
    <mesh ref={ref} position={position} rotation={[Math.PI / 2, 0, 0]}>
      {/* 32 → 12 segments: coins are small, 32 was invisible overkill */}
      <cylinderGeometry args={[r, r, 0.03, 12]} />
      <meshStandardMaterial
        color="#f59e0b"
        metalness={0.9}
        roughness={0.1}
        emissive="#f59e0b"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

/** Five gold coins that bob and spin around the dashboard card. */
export function FloatingCoins() {
  return (
    <>
      {COINS.map((c, i) => (
        <Coin key={i} {...c} />
      ))}
    </>
  )
}
