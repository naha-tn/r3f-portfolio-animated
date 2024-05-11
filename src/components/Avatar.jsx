import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Avatar(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/cube_girl.glb')
  const { actions } = useAnimations(animations, group)

  const runningActionName = "CharacterArmature|CharacterArmature|CharacterArmature|Run"
  const wavingActionName = "CharacterArmature|CharacterArmature|CharacterArmature|Wave"

  useEffect(() => {
     actions[wavingActionName].play()
  }, [])

  const [currentAnimation, setCurrentAnimation] = useState('Wave')
  const [prevScrollOffset, setPrevScrollOffset] = useState(0);

  // Scrolling
  const scroll = useScroll()
  const [smoothAvatarPosition] = useState(() => new THREE.Vector3())
  
  useFrame((state, delta) => 
    {
      //Avatar reactions animations
      const isScrolling = scroll.offset > 0

      if(scroll.offset - prevScrollOffset > 0)
        {
          group.current.rotation.y = Math.PI
        }else if (scroll.offset - prevScrollOffset < 0){
          group.current.rotation.y = 0
        }
        setPrevScrollOffset(scroll.offset)

      if(isScrolling && currentAnimation !== 'Run') {
        setCurrentAnimation('Run')
        actions[wavingActionName].fadeOut(0.5).stop()
        actions[runningActionName].reset().fadeIn(0.5).play()
      } 
      else if (!isScrolling && currentAnimation !== "Wave") {
        setCurrentAnimation("Wave")
        actions[runningActionName].fadeOut(0.5).stop()
        actions[wavingActionName].reset().fadeIn(0.5).play()
        group.current.rotation.y = 0
      }

      // Avatar position
      const avatarPosition = new THREE.Vector3()
      avatarPosition.copy(state.camera.position)
      avatarPosition.y = -1
      avatarPosition.z -= 16
      avatarPosition.x += 0.4

      smoothAvatarPosition.lerp(avatarPosition, delta * 24)

      group.current.position.copy(smoothAvatarPosition)
    })

  return (
    <group ref={group} {...props} dispose={null}> 
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
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