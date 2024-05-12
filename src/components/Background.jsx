import { Environment, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Gradient, LayerMaterial } from "lamina"
import { useRef } from "react"
import * as THREE from 'three'

export const Background = () => {

    const colorA = '#F5DAD2'
    const colorB = '#BACD92'
    const start = 0.3
    const end = -0.45
    const background = useRef()

    useFrame((state) => 
    {
        background.current.position.z = state.camera.position.z
    })

    return <>
    {/* <group ref={background}>
        <Sphere scale={ [100, 100, 100] } rotation-y={ Math.PI / 2 }>
            <LayerMaterial
                color='#ffffff'
                side={THREE.BackSide}
            >
                <Gradient 
                    colorA={colorA} 
                    colorB={colorB} 
                    axes="y" 
                    start={start}
                    end={end}
                />
            </LayerMaterial>
        </Sphere>
        <Environment resolution={256} background >
            <Sphere scale={ [100, 100, 100] } rotation-y={ Math.PI / 2 }>
                <LayerMaterial
                    color='#ffffff'
                    side={THREE.BackSide}
                >
                    <Gradient 
                        colorA={colorA} 
                        colorB={colorB} 
                        axes="y" 
                        start={start}
                        end={end}
                    />
                </LayerMaterial>
            </Sphere>
        </Environment>
    </group> */}
    <group ref={background}>
        <Environment preset="sunset" />
        <Sphere scale={ [100, 100, 100] } rotation-y={ Math.PI / 2 }>
            <LayerMaterial
                lighting="physical"
                transmission={1}
                side={THREE.BackSide}
            >
                <Gradient 
                    colorA={colorA} 
                    colorB={colorB} 
                    axes="y" 
                    start={start}
                    end={end}
                />
            </LayerMaterial>
        </Sphere>
    </group>
    </>
}