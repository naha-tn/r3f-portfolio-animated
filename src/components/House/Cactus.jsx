import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cactus(props) {
  const { nodes, materials } = useGLTF('./models/cactus.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CactusFlowers_5_1.geometry}
          material={materials.Pink}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CactusFlowers_5_2.geometry}
          material={materials.Green}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/cactus.glb')