import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Avatar(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/cube_girl.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["CharacterArmature|CharacterArmature|CharacterArmature|Run"].reset().play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}> 
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <skinnedMesh
            name="Character"
            geometry={nodes.Character.geometry}
            material={materials['Atlas.001']}
            skeleton={nodes.Character.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
            receiveShadow
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/cube_girl.glb')