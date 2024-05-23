import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PineTree(props) {
  const { nodes, materials } = useGLTF('./models/pine-snow.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PineTree_Snow_4_1.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PineTree_Snow_4_2.geometry}
          material={materials.Snow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PineTree_Snow_4_3.geometry}
          material={materials.Green}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/pine-snow.glb')