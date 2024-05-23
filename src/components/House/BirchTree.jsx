import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BirchTree(props) {
  const { nodes, materials } = useGLTF('./models/birch-tree-snow.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BirchTree_Snow_5_1.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BirchTree_Snow_5_2.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BirchTree_Snow_5_3.geometry}
          material={materials.Green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BirchTree_Snow_5_4.geometry}
          material={materials.Snow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BirchTree_Snow_5_5.geometry}
          material={materials.DarkGreen}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/birch-tree-snow.glb')