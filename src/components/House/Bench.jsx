import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bench(props) {
  const { nodes, materials } = useGLTF('./models/bench.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bench_2.geometry}
        material={materials.Wood}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('./models/bench.glb')