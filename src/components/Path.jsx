import { useMemo, useState } from 'react'
import * as THREE from 'three'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const LINE_NB_POINTS = 15000
const CURVE_DISTANCE = 20

export default function Path() 
{
    const [smoothCameraPosition] = useState(() => new THREE.Vector3())
    const [smoothCameraTarget] = useState(() => new THREE.Vector3())

    const curve = useMemo(() => { 
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, -CURVE_DISTANCE),
            new THREE.Vector3(10, 0, -2 * CURVE_DISTANCE),
            new THREE.Vector3(-10, 0, -3 * CURVE_DISTANCE),
            new THREE.Vector3(10, 0, -4 * CURVE_DISTANCE),
            new THREE.Vector3(1, 0, -5 * CURVE_DISTANCE),
            new THREE.Vector3(2, 0, -6 * CURVE_DISTANCE),
            new THREE.Vector3(3, 0, -7 * CURVE_DISTANCE),
            new THREE.Vector3(4, 0, -8 * CURVE_DISTANCE),
            new THREE.Vector3(5, 0, -9 * CURVE_DISTANCE),
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
        shape.moveTo(0, -0.5)
        shape.lineTo(0, 0.5)

        return shape
    })

    // Scrolling
    const scroll = useScroll()

    // Set camera to follow the path
    useFrame((state, delta) => 
    {
        const curPointIdx = Math.min(
            Math.round(scroll.offset * LINE_NB_POINTS + 1),
            LINE_NB_POINTS
        )

        const bodyPosition = linePoints[curPointIdx]
        const cameraPosition =  new THREE.Vector3()
        cameraPosition.copy(bodyPosition)
        cameraPosition.y += 5
        cameraPosition.z += 16

        const cameraTarget = new THREE.Vector3()
        cameraTarget.copy(bodyPosition)
        cameraTarget.y += 4

        smoothCameraPosition.lerp(cameraPosition, delta * 24)
        smoothCameraTarget.lerp(cameraTarget , delta * 24)

        state.camera.position.copy(smoothCameraPosition)
        state.camera.lookAt(smoothCameraTarget)

    })

    {/* Path */}
    return  <>    
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
    </>
}

