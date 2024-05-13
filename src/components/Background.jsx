import { Environment, Sphere, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Gradient, LayerMaterial } from "lamina"
import { useRef, useLayoutEffect } from "react"
import * as THREE from 'three'
import gsap from "gsap";

export const Background = () => {

    const  tl = useRef()
    const backgroundColors = useRef({
        colorA: '#F5DAD2',
        colorB: '#BACD92'
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline()

        tl.current.to(backgroundColors.current, {
            duration: 1,
            colorA: '#F9F5F6',
            colorB: '#F2BED1'
        })
        tl.current.to(backgroundColors.current, {
            duration: 1,
            colorA: '#CAF4FF',
            colorB: '#5AB2FF'
        })
        tl.current.to(backgroundColors.current, {
            duration: 1,
            colorA: '#FFC0D9',
            colorB: '#FF90BC'
        })
        tl.current.to(backgroundColors.current, {
            duration: 1,
            colorA: '#D2E9E9',
            colorB: '#C4DFDF'
        })

        tl.current.pause()

    }, [])

    const scroll = useScroll()

    // const colorA = '#F5DAD2'
    // const colorB = '#BACD92'
    const start = 0.3
    const end = -0.45
    const background = useRef()

    const gradientRef = useRef()

    useFrame((state) => 
    {
        background.current.position.z = state.camera.position.z

        gradientRef.current.colorA = new THREE.Color(
            backgroundColors.current.colorA
        )
        gradientRef.current.colorB = new THREE.Color(
            backgroundColors.current.colorB
        )

        tl.current.seek(scroll.offset * tl.current.duration())

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
        <Environment preset="sunset"/>
        <Sphere scale={ [100, 100, 100] } rotation-y={ Math.PI / 2 }>
            <LayerMaterial
                lighting="physical"
                transmission={1}
                side={THREE.BackSide}
            >
                <Gradient 
                    ref={gradientRef}
                    axes="y" 
                    start={start}
                    end={end}
                />
            </LayerMaterial>
        </Sphere>
    </group>
    </>
}