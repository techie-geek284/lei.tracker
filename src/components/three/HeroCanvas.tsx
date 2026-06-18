import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { FloatingCoins } from './FloatingCoins'

/** The central glass dashboard card with a gentle idle float. */
function DashboardCard() {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.elapsedTime
    mesh.current.rotation.y = Math.sin(t * 0.3) * 0.15
    mesh.current.rotation.x = Math.sin(t * 0.2) * 0.08
    mesh.current.position.y = Math.sin(t * 0.5) * 0.1
  })

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxGeometry args={[3.5, 2.2, 0.1]} />
      <meshPhysicalMaterial
        color="#1e293b"
        roughness={0.1}
        metalness={0.2}
        transparent
        opacity={0.85}
        emissive="#6366f1"
        emissiveIntensity={0.1}
      />
    </mesh>
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
      <MiniCard radius={2.2} speed={0.4} color="#6366f1" y={0.6} size={[0.9, 0.55]} />
      <MiniCard radius={2.5} speed={-0.3} color="#06b6d4" y={-0.4} size={[1.0, 0.6]} />
      <MiniCard radius={2.0} speed={0.5} color="#10b981" y={0.9} size={[0.8, 0.5]} />
    </>
  )
}

/** 1500 drifting points filling the scene. */
function ScenePoints() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3)
    for (let i = 0; i < 1500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    return arr
  }, [])

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.001
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
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

/** 3D floating dashboard scene for the hero. */
export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
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
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  )
}
