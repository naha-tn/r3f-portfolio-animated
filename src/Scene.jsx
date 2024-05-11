import { Avatar } from "./components/Avatar";
import * as THREE from 'three'
import { Background } from './components/Background.jsx'
import Path from "./components/Path.jsx";
import { ContactShadows } from "@react-three/drei";

export default function Scene()
{
    

    // // Create Scrolling
    // const cameraGroup = useRef()
    // const avatar = useRef()
    // const scroll = useScroll()

    

    return <>
        {/* <group ref={cameraGroup}> */}
        <Background />
        {/* <PerspectiveCamera  
            fov= {45}
            near= {0.1}
            far= {200}
            position={[ 0, 5, 16 ]}
            makeDefault
        /> */}
        <Avatar 
            position={[0.4, -1, 0]} 
            scale={0.2}
            castShadow
        />
        <Path />

        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> 
    </>
}