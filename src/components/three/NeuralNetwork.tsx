import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface NodeData {
  position: [number, number, number]
}

interface Connection {
  a: THREE.Vector3
  b: THREE.Vector3
}

const LAYERS = [6, 12, 14, 8]
const LAYER_X = [-2.4, -0.8, 0.8, 2.4]
const SPACING = 0.34
const SIGNAL_COUNT = 20

function buildNetwork() {
  const nodes: NodeData[] = []
  const layerIdx: number[][] = []

  LAYERS.forEach((count, li) => {
    const idxs: number[] = []
    for (let i = 0; i < count; i++) {
      const y = (i - (count - 1) / 2) * SPACING
      const z = (Math.random() - 0.5) * 0.5
      idxs.push(nodes.length)
      nodes.push({ position: [LAYER_X[li], y, z] })
    }
    layerIdx.push(idxs)
  })

  const connections: Connection[] = []
  for (let li = 0; li < LAYERS.length - 1; li++) {
    layerIdx[li].forEach((ai) => {
      layerIdx[li + 1].forEach((bi) => {
        connections.push({
          a: new THREE.Vector3(...nodes[ai].position),
          b: new THREE.Vector3(...nodes[bi].position),
        })
      })
    })
  }

  return { nodes, connections }
}

function Network() {
  const groupRef = useRef<THREE.Group>(null)
  const nodeRefs = useRef<THREE.Mesh[]>([])
  const signalRefs = useRef<THREE.Mesh[]>([])
  const lineMatRef = useRef<THREE.LineBasicMaterial>(null)

  const { nodes, connections } = useMemo(() => buildNetwork(), [])

  const linePositions = useMemo(() => {
    const arr = new Float32Array(connections.length * 6)
    connections.forEach((c, i) => {
      arr.set([c.a.x, c.a.y, c.a.z, c.b.x, c.b.y, c.b.z], i * 6)
    })
    return arr
  }, [connections])

  const signalState = useRef(
    Array.from({ length: SIGNAL_COUNT }, () => {
      const c = connections[Math.floor(Math.random() * connections.length)]
      return { a: c.a, b: c.b, t: Math.random(), speed: 0.4 + Math.random() * 0.6 }
    }),
  )

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1
    }

    nodeRefs.current.forEach((node, i) => {
      if (node) node.scale.setScalar(1 + Math.sin(t * 2 + i * 0.5) * 0.2)
    })

    if (lineMatRef.current) {
      lineMatRef.current.opacity = 0.3 + (Math.sin(t * 1.5) * 0.5 + 0.5) * 0.3
    }

    signalState.current.forEach((s, i) => {
      s.t += delta * s.speed
      if (s.t > 1) {
        const c = connections[Math.floor(Math.random() * connections.length)]
        s.a = c.a
        s.b = c.b
        s.t = 0
      }
      const mesh = signalRefs.current[i]
      if (mesh) mesh.position.lerpVectors(s.a, s.b, s.t)
    })
  })

  return (
    <group ref={groupRef} scale={0.85}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial ref={lineMatRef} color="#06b6d4" transparent opacity={0.4} />
      </lineSegments>

      {nodes.map((n, i) => (
        <mesh
          key={i}
          position={n.position}
          ref={(el) => {
            if (el) nodeRefs.current[i] = el
          }}
        >
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.9} />
        </mesh>
      ))}

      {Array.from({ length: SIGNAL_COUNT }).map((_, i) => (
        <mesh
          key={`signal-${i}`}
          ref={(el) => {
            if (el) signalRefs.current[i] = el
          }}
        >
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#22d3ee" />
        </mesh>
      ))}
    </group>
  )
}

/** Animated 3D neural-network visualization for the AI section. */
export default function NeuralNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} color="#6366f1" intensity={3} decay={0} />
      <pointLight position={[-2, -2, 2]} color="#06b6d4" intensity={2} decay={0} />
      <Network />
    </Canvas>
  )
}
