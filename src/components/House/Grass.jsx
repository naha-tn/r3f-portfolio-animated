import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Grass(props) {
  const { nodes, materials } = useGLTF('./models/grass.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass_Large_Extruded.geometry}
        material={materials.Grass}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('./models/grass.glb')