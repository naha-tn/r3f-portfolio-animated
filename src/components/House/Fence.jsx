
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Fence({opacity, ...props}) {
  const { nodes, materials } = useGLTF('./models/fence.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fence_Middle_1.geometry}
        >
            <meshStandardMaterial 
              {...materials.Wood_Light} 
              transparent
              opacity={opacity}
            />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fence_Middle_2.geometry}
        >
          <meshStandardMaterial 
              {...materials.Wood} 
              transparent
              opacity={opacity}
            />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/fence.glb')