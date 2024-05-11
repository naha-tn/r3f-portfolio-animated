import { Avatar } from "./components/Avatar";
import * as THREE from 'three'
import { Background } from './components/Background.jsx'
import Path from "./components/Path.jsx";
import { Text } from "@react-three/drei";
import { Tree1 } from "./components/Tree1.jsx";

const Y_POS = -1

export default function Scene()
{
    
    return <>
        <Background />
        <Avatar 
            scale={0.2}
            castShadow
        />
        <Path />
        <Text
            color="#A5DD9B"
        >
            Welcome to my world! {"\n"}
            Have a seat and enjoy the ride!
        </Text>
        <Tree1 
            opacity={0.7}
            scale={0.9}
            position={[2, Y_POS, -2]}
        />
         <Tree1 
            opacity={0.7}
            scale={0.8}
            rotation-y= {Math.PI / 9}
            position={[-2, Y_POS, -3]}
        />
         <Tree1 
            opacity={0.7}
            scale={1}
            rotation-y= {Math.PI / 9}
            position={[-5, Y_POS, -2]}
        />
         <Tree1 
            opacity={0.7}
            scale={0.7}
            rotation-y= {Math.PI / 1}
            position={[4, Y_POS, -12]}
        />
         <Tree1 
            opacity={0.7}
            scale={0.3}
            rotation-y= {Math.PI / 2}
            position={[3, Y_POS, -53]}
        />
         <Tree1 
            opacity={0.7}
            scale={0.2}
            rotation-y= {Math.PI / 3}
            position={[0, Y_POS, -100]}
        />
        <mesh receiveShadow position-y={ - 0.99 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> 
    </>
}