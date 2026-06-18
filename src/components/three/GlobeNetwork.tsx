import { useMemo, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Stars } from '@react-three/drei'
import * as THREE from 'three'

const RADIUS = 2

function latLngToVec3(lat: number, lng: number, radius = RADIUS) {
  const phi   = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
     radius * Math.cos(phi),
     radius * Math.sin(phi) * Math.sin(theta),
  )
}

const CITIES = [
  { name: 'Mumbai',    lat: 19.07, lng: 72.87,   hub: true  },
  { name: 'Delhi',     lat: 28.6,  lng: 77.2,    hub: true  },
  { name: 'Bangalore', lat: 12.97, lng: 77.59,   hub: true  },
  { name: 'London',    lat: 51.5,  lng: -0.12,   hub: false },
  { name: 'Singapore', lat: 1.35,  lng: 103.82,  hub: false },
  { name: 'Dubai',     lat: 25.2,  lng: 55.27,   hub: false },
  { name: 'New York',  lat: 40.71, lng: -74.01,  hub: false },
  { name: 'Tokyo',     lat: 35.68, lng: 139.69,  hub: false },
  { name: 'Sydney',    lat: -33.87, lng: 151.21, hub: false },
]

function EarthScene() {
  const groupRef = useRef<THREE.Group>(null)

  // Separate rotation tracking so cursor can steer and auto-spin coexist cleanly
  const velY   = useRef(0)   // current Y rotation velocity
  const velX   = useRef(0)   // current X rotation velocity
  const rotY   = useRef(0)
  const rotX   = useRef(0)

  const [colorMap, normalMap, specularMap] = useTexture([
    'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_normal_2048.jpg',
    'https://threejs.org/examples/textures/planets/earth_specular_2048.jpg',
  ])

  const cityVecs = useMemo(
    () => CITIES.map((c) => ({ ...c, vec: latLngToVec3(c.lat, c.lng) })),
    [],
  )

  const { arcs, arcMats } = useMemo(() => {
    const mumbai = latLngToVec3(19.07, 72.87)
    const arcs = cityVecs
      .filter((c) => c.name !== 'Mumbai')
      .map((c) => {
        const dist = mumbai.distanceTo(c.vec)
        const mid  = mumbai.clone().add(c.vec)
          .multiplyScalar(0.5).normalize()
          .multiplyScalar(RADIUS + dist * 0.45)
        const curve = new THREE.QuadraticBezierCurve3(mumbai, mid, c.vec)
        return new THREE.TubeGeometry(curve, 24, 0.012, 4, false)
      })
    const arcMats = arcs.map(() =>
      new THREE.MeshBasicMaterial({ color: '#22d3ee', transparent: true, opacity: 0.55 }),
    )
    return { arcs, arcMats }
  }, [cityVecs])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime

    // ── Cursor-driven velocity ──────────────────────────────────────────────
    // pointer.x in [-1, 1]:  > 0 = cursor right → globe spins right
    // pointer.y in [-1, 1]:  > 0 = cursor top   → globe tilts up
    // Base auto-spin of +0.12 rad/s keeps the globe moving when cursor is centred
    const targetVelY = state.pointer.x * 1.4 + 0.12
    const targetVelX = -state.pointer.y * 0.6

    // Ease velocity toward target — gives inertia feel
    velY.current += (targetVelY - velY.current) * 0.06
    velX.current += (targetVelX - velX.current) * 0.06

    rotY.current += velY.current * delta
    // Clamp X tilt so the poles stay in frame
    rotX.current = THREE.MathUtils.clamp(
      rotX.current + velX.current * delta,
      -0.65,
      0.65,
    )

    if (groupRef.current) {
      groupRef.current.rotation.y = rotY.current
      groupRef.current.rotation.x = rotX.current
    }

    // Pulsing arc opacity — connection lines breathe out of India
    arcMats.forEach((mat, i) => {
      mat.opacity = 0.25 + (Math.sin(t * 1.4 + i * 0.85) * 0.5 + 0.5) * 0.65
    })
  })

  return (
    <group ref={groupRef}>
      {/* ── Photorealistic Earth surface ── */}
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          specular="#2255aa"
          shininess={22}
        />
      </mesh>

      {/* ── Inner atmosphere — tight halo on the limb ── */}
      <mesh scale={[1.05, 1.05, 1.05]}>
        <sphereGeometry args={[RADIUS, 32, 32]} />
        <meshBasicMaterial
          color="#3b6ef5"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* ── Outer atmospheric glow — wider, softer ── */}
      <mesh scale={[1.12, 1.12, 1.12]}>
        <sphereGeometry args={[RADIUS, 24, 24]} />
        <meshBasicMaterial
          color="#1e40af"
          transparent
          opacity={0.035}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* ── City markers — just above surface so they don't clip ── */}
      {cityVecs.map((c, i) => (
        <mesh key={i} position={c.vec.clone().normalize().multiplyScalar(RADIUS + 0.04)}>
          <sphereGeometry args={[c.hub ? 0.055 : 0.038, 10, 10]} />
          <meshBasicMaterial color={c.hub ? '#f59e0b' : '#22d3ee'} />
        </mesh>
      ))}

      {/* ── Glowing connection arcs from Mumbai ── */}
      {arcs.map((geo, i) => (
        <mesh key={i} geometry={geo} material={arcMats[i]} />
      ))}
    </group>
  )
}

export default function GlobeNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
    >
      {/* Deep-space star field */}
      <Stars radius={90} depth={50} count={4000} factor={3} saturation={0} fade speed={0.5} />

      {/* Sunlight — warm directional key light */}
      <directionalLight position={[6, 2, 5]} color="#fff8ee" intensity={2.8} />
      {/* Soft ambient — dark side not pitch black */}
      <ambientLight intensity={0.12} />
      {/* Blue Rayleigh backlight — simulates atmosphere scatter on night side */}
      <pointLight position={[-7, -2, -5]} color="#1e3a8a" intensity={1.2} decay={0} />

      <Suspense fallback={null}>
        <EarthScene />
      </Suspense>
    </Canvas>
  )
}
