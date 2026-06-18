import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const LAYERS = [6, 12, 14, 8]
const LAYER_X = [-2.4, -0.8, 0.8, 2.4]
const SPACING = 0.34
const SIGNAL_COUNT = 20

// Scratch objects — allocated once at module level, reused every frame to avoid GC pressure
const _m4 = new THREE.Matrix4()
const _v3 = new THREE.Vector3()

interface NodeData {
  position: [number, number, number]
}

interface Connection {
  a: THREE.Vector3
  b: THREE.Vector3
}

interface SignalState {
  a: THREE.Vector3
  b: THREE.Vector3
  t: number
  speed: number
  nextIdx: number
}

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
  const groupRef          = useRef<THREE.Group>(null)
  // InstancedMesh replaces 40 individual node meshes + 20 signal meshes.
  // Before: 60 draw calls/frame. After: 2 draw calls/frame.
  const instancedNodesRef   = useRef<THREE.InstancedMesh>(null)
  const instancedSignalsRef = useRef<THREE.InstancedMesh>(null)
  const lineMatRef          = useRef<THREE.LineBasicMaterial>(null)

  const { nodes, connections } = useMemo(() => buildNetwork(), [])

  const linePositions = useMemo(() => {
    const arr = new Float32Array(connections.length * 6)
    connections.forEach((c, i) => {
      arr.set([c.a.x, c.a.y, c.a.z, c.b.x, c.b.y, c.b.z], i * 6)
    })
    return arr
  }, [connections])

  // Stagger signal start times so they spread across connections from frame 1
  const signalState = useRef<SignalState[]>(
    Array.from({ length: SIGNAL_COUNT }, (_, idx) => {
      const cIdx = Math.floor((idx / SIGNAL_COUNT) * connections.length)
      const c = connections[cIdx]
      return {
        a: c.a,
        b: c.b,
        t: idx / SIGNAL_COUNT,
        speed: 0.35 + (idx % 7) * 0.05,
        nextIdx: (cIdx + 13) % connections.length,
      }
    }),
  )

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1
    }

    if (lineMatRef.current) {
      lineMatRef.current.opacity = 0.3 + (Math.sin(t * 1.5) * 0.5 + 0.5) * 0.3
    }

    // Update all node instance matrices in a single batch
    if (instancedNodesRef.current) {
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const scale = 1 + Math.sin(t * 2 + i * 0.5) * 0.2
        _m4.makeScale(scale, scale, scale)
        _v3.set(n.position[0], n.position[1], n.position[2])
        _m4.setPosition(_v3)
        instancedNodesRef.current.setMatrixAt(i, _m4)
      }
      instancedNodesRef.current.instanceMatrix.needsUpdate = true
    }

    // Advance signals and batch-update instance matrices
    if (instancedSignalsRef.current) {
      for (let i = 0; i < SIGNAL_COUNT; i++) {
        const s = signalState.current[i]
        s.t += delta * s.speed
        if (s.t >= 1) {
          s.t -= 1
          // Deterministic jump — avoids Math.random() allocation in hot path
          s.nextIdx = (s.nextIdx + 11) % connections.length
          const c = connections[s.nextIdx]
          s.a = c.a
          s.b = c.b
        }
        _v3.lerpVectors(s.a, s.b, s.t)
        _m4.makeTranslation(_v3.x, _v3.y, _v3.z)
        instancedSignalsRef.current.setMatrixAt(i, _m4)
      }
      instancedSignalsRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef} scale={0.85}>
      {/* All connections — single draw call */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial ref={lineMatRef} color="#06b6d4" transparent opacity={0.4} />
      </lineSegments>

      {/* 40 nodes — 1 draw call (was 40). Reduced segments: 16×16 → 8×8 */}
      <instancedMesh ref={instancedNodesRef} args={[undefined, undefined, nodes.length]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.9} />
      </instancedMesh>

      {/* 20 signal particles — 1 draw call (was 20). Reduced segments: 8×8 → 6×6 */}
      <instancedMesh ref={instancedSignalsRef} args={[undefined, undefined, SIGNAL_COUNT]}>
        <sphereGeometry args={[0.04, 6, 6]} />
        <meshBasicMaterial color="#22d3ee" />
      </instancedMesh>
    </group>
  )
}

export default function NeuralNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} color="#6366f1" intensity={3} decay={0} />
      <pointLight position={[-2, -2, 2]} color="#06b6d4" intensity={2} decay={0} />
      <Network />
    </Canvas>
  )
}
