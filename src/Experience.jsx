import { ScrollControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import Scene from './Scene.jsx'
import { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'

export default function Experience()
{
    return <>
     <Canvas 
        shadows
        camera={ {
            fov: 40,
            near: 0.1,
            far: 200,
            position: [ 0, 5, 16 ],
        } } >
            <Suspense fallback={null}>
                <ScrollControls pages={100} damping={1}
                    style={{
                        opacity: 0.5
                    }}    
                >
                    <Lights />
                    <Scene />
                </ScrollControls>
            </Suspense>
        </Canvas>
    </>
}