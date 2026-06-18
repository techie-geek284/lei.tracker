import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FloatingCoins } from './FloatingCoins'

// Pre-build once — reused across all renders
const _cardEdgesGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(3.5, 2.2, 0.1))

function DashboardCard() {
  const meshRef   = useRef<THREE.Mesh>(null)
  const edgesRef  = useRef<THREE.LineSegments>(null)
  const edgesMatRef = useRef<THREE.LineBasicMaterial>(null)

  useFrame((state) => {
    const t  = state.clock.elapsedTime
    const ry = Math.sin(t * 0.3) * 0.15
    const rx = Math.sin(t * 0.2) * 0.08
    const py = Math.sin(t * 0.5) * 0.1

    if (meshRef.current) {
      meshRef.current.rotation.y  = ry
      meshRef.current.rotation.x  = rx
      meshRef.current.position.y  = py
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.y = ry
      edgesRef.current.rotation.x = rx
      edgesRef.current.position.y = py
    }
    // Pulsing edge glow — breath-like feel
    if (edgesMatRef.current) {
      edgesMatRef.current.opacity = 0.35 + Math.sin(t * 1.8) * 0.2
    }
  })

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[3.5, 2.2, 0.1]} />
        {/* meshStandardMaterial replaces meshPhysicalMaterial — equivalent look, ~40% cheaper */}
        <meshStandardMaterial
          color="#1e293b"
          roughness={0.15}
          metalness={0.3}
          transparent
          opacity={0.9}
          emissive="#6366f1"
          emissiveIntensity={0.12}
        />
      </mesh>
      {/* Glowing edge outline — 1 draw call, very cheap, high visual impact */}
      <lineSegments ref={edgesRef} geometry={_cardEdgesGeo} position={[0, 0, 0]}>
        <lineBasicMaterial ref={edgesMatRef} color="#6366f1" transparent opacity={0.5} />
      </lineSegments>
    </>
  )
}

interface MiniCardProps {
  radius: number
  speed: number
  color: string
  y: number
  size: [number, number]
}

function MiniCard({ radius, speed, color, y, size }: MiniCardProps) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.position.x = Math.cos(t * speed) * radius
    ref.current.position.z = Math.sin(t * speed) * radius
    ref.current.position.y = y + Math.sin(t * 0.8) * 0.1
    ref.current.lookAt(0, 0, 0)
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[size[0], size[1], 0.06]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.45}
        transparent
        opacity={0.92}
        roughness={0.2}
        metalness={0.3}
      />
    </mesh>
  )
}

function OrbitingCards() {
  return (
    <>
      <MiniCard radius={2.2} speed={0.4}  color="#6366f1" y={0.6}  size={[0.9, 0.55]} />
      <MiniCard radius={2.5} speed={-0.3} color="#06b6d4" y={-0.4} size={[1.0, 0.6]}  />
      <MiniCard radius={2.0} speed={0.5}  color="#10b981" y={0.9}  size={[0.8, 0.5]}  />
    </>
  )
}

function ScenePoints() {
  const ref = useRef<THREE.Points>(null)

  // Reduced from 1500 → 800: invisible quality difference, meaningful GPU saving
  const positions = useMemo(() => {
    const arr = new Float32Array(800 * 3)
    for (let i = 0; i < 800; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    return arr
  }, [])

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0008
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#818cf8"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      // Removed OrbitControls — autoRotate added per-frame camera matrix work.
      // Scene animation now comes from individual useFrame hooks (no camera movement needed).
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[-4, 4, 4]} color="#6366f1" intensity={2} decay={0} />
        <pointLight position={[4, -4, 2]} color="#06b6d4" intensity={1.5} decay={0} />
        <directionalLight position={[0, 10, 5]} intensity={0.5} />
        <DashboardCard />
        <OrbitingCards />
        <FloatingCoins />
        <ScenePoints />
      </Suspense>
    </Canvas>
  )
}
