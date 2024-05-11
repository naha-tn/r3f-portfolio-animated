import { Environment, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Gradient, LayerMaterial } from "lamina"
import { useRef } from "react"
import * as THREE from 'three'

export const Background = () => {

    const background = useRef()

    useFrame((state) => 
    {
        background.current.position.z = state.camera.position.z
    })

    return <>
        <group ref={background}>
            <Environment preset="sunset" />
            <Sphere scale={ [100, 100, 100] } rotation-y={ Math.PI / 2 }>
                <LayerMaterial
                    lighting="physical"
                    transmission={1}
                    side={THREE.BackSide}
                >
                    <Gradient 
                        colorA={'#F5DAD2'} 
                        colorB={'#BACD92'} 
                        axes="y" 
                        start={0.2}
                        end={-0.45}
                    />
                </LayerMaterial>
            </Sphere>
        </group>
    </>
}