import { Avatar } from "./components/Avatar";
import { Background } from './components/Background.jsx'
import Path from "./components/Path.jsx";
import { Tree1 } from "./components/Tree1.jsx";
import Intro from "./components/Introduction.jsx";
import { useRef } from "react";
import  Garden  from "./components/House/Garden.jsx";


const Y_POS = -1

export default function Scene() 
{
    const world = useRef()

    const baseSize = 1000
    
    return <>
        <Background />
            <Avatar 
                scale={0.2}
                castShadow
            />
            <Path />
            {/* Text */}
            <Intro />
            <Tree1 
                opacity={1}
                scale={0.9}
                position={[12, Y_POS, -40]}
            />
            <Tree1 
                opacity={1}
                scale={0.8}
                rotation-y= {Math.PI / 9}
                position={[-22, Y_POS, -30]}
            />
            <Tree1 
                opacity={1}
                scale={1}
                rotation-y= {Math.PI / 9}
                position={[-25, Y_POS, -20]}
            />
            <Tree1 
                opacity={1}
                scale={0.7}
                rotation-y= {Math.PI / 1}
                position={[40, Y_POS, -12]}
            />
            <Tree1 
                opacity={1}
                scale={0.3}
                rotation-y= {Math.PI / 2}
                position={[3, Y_POS, -53]}
            />
            <Tree1 
                opacity={1}
                scale={0.2}
                rotation-y= {Math.PI / 3}
                position={[0, Y_POS, -100]}
            />
            <Garden/>
            <mesh receiveShadow position-y={ - 0.99 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh> 
    </>
}