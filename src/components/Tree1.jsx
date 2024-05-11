
import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Tree1({count = 5, opacity, ...props}) {
  const { nodes, materials } = useGLTF('./models/tree/tree_1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_2.geometry}
        scale={50}
      > 
            <meshStandardMaterial {...materials.Atlas} transparent opacity={opacity}/>
        </mesh>
    </group>
  )
}

useGLTF.preload('./models/tree/tree_1.glb')
