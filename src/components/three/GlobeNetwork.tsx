import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const RADIUS = 2

function latLngToVec3(lat: number, lng: number, radius = RADIUS) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

interface City {
  name: string
  lat: number
  lng: number
  hub: boolean
}

const CITIES: City[] = [
  { name: 'Mumbai', lat: 19.07, lng: 72.87, hub: true },
  { name: 'Delhi', lat: 28.6, lng: 77.2, hub: true },
  { name: 'Bangalore', lat: 12.97, lng: 77.59, hub: true },
  { name: 'London', lat: 51.5, lng: -0.12, hub: false },
  { name: 'Singapore', lat: 1.35, lng: 103.82, hub: false },
  { name: 'Dubai', lat: 25.2, lng: 55.27, hub: false },
]

function Globe() {
  const groupRef = useRef<THREE.Group>(null)
  const arcRefs = useRef<THREE.Mesh[]>([])

  const cityVecs = useMemo(
    () => CITIES.map((c) => ({ ...c, vec: latLngToVec3(c.lat, c.lng) })),
    [],
  )

  const arcs = useMemo(() => {
    const mumbai = latLngToVec3(19.07, 72.87)
    return cityVecs
      .filter((c) => c.name !== 'Mumbai')
      .map((c) => {
        const dist = mumbai.distanceTo(c.vec)
        const mid = mumbai
          .clone()
          .add(c.vec)
          .multiplyScalar(0.5)
          .normalize()
          .multiplyScalar(RADIUS + dist * 0.4)
        const curve = new THREE.QuadraticBezierCurve3(mumbai, mid, c.vec)
        return new THREE.TubeGeometry(curve, 48, 0.02, 8, false)
      })
  }, [cityVecs])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        state.pointer.y * 0.3,
        0.05,
      )
    }
    arcRefs.current.forEach((arc, i) => {
      if (!arc) return
      const mat = arc.material as THREE.MeshBasicMaterial
      mat.opacity = 0.1 + (Math.sin(t * 1.5 + i * 0.8) * 0.5 + 0.5) * 0.5
    })
  })

  return (
    <group ref={groupRef}>
      {/* Solid globe */}
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshPhongMaterial color="#1e293b" shininess={12} />
      </mesh>
      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[RADIUS * 1.002, 32, 32]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.15} />
      </mesh>
      {/* City nodes */}
      {cityVecs.map((c, i) => (
        <mesh key={i} position={c.vec}>
          <sphereGeometry args={[c.hub ? 0.1 : 0.06, 16, 16]} />
          <meshBasicMaterial color={c.hub ? '#f59e0b' : '#06b6d4'} />
        </mesh>
      ))}
      {/* Connection arcs from Mumbai */}
      {arcs.map((geo, i) => (
        <mesh
          key={i}
          geometry={geo}
          ref={(el) => {
            if (el) arcRefs.current[i] = el
          }}
        >
          <meshBasicMaterial color="#6366f1" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

/** Rotating globe with glowing connection arcs from India outward. */
export default function GlobeNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 3, 5]} color="#6366f1" intensity={3} decay={0} />
      <pointLight position={[-5, -3, 2]} color="#06b6d4" intensity={2} decay={0} />
      <Globe />
    </Canvas>
  )
}
