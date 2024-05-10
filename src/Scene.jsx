import { useMemo } from "react";
import { Avatar } from "./components/Avatar";
import * as THREE from 'three'

const LINE_NB_POINTS = 150

export default function Scene()
{
    const curve = useMemo(() => { 
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, -10),
            new THREE.Vector3(-2, 0, -20),
            new THREE.Vector3(-3, 0, -30),
            new THREE.Vector3(0, 0, -40),
            new THREE.Vector3(5, 0, -50),
            new THREE.Vector3(7, 0, -60),
            new THREE.Vector3(5, 0, -70),
            new THREE.Vector3(0, 0, -80),
            new THREE.Vector3(0, 0, -90),
            new THREE.Vector3(0, 0, -100)
        ],
        false,
        "catmullrom",
        0.5)
    }, [])


    const linePoints = useMemo(() => {
        return curve.getPoints(LINE_NB_POINTS)
    }, [curve])

    const shape = useMemo(() => {
        const shape = new THREE.Shape()
        shape.moveTo(0, -1)
        shape.lineTo(0, 1)

        return shape
    })


    return <>
        <Avatar 
            position={[0, -1, -0.5]} 
            scale={0.2}
            castShadow
        />
        <mesh position-y={ -1} receiveShadow>
            <extrudeGeometry 
                args={[
                    shape,
                    {
                        steps: LINE_NB_POINTS,
                        bevelEnabled: false,
                        extrudePath: curve
                    }
                ]}    
            />
            <meshStandardMaterial color={'#DEAC80'} transparent opacity={0.5} />
        </mesh>

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> 
    </>
}