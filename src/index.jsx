import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render( 
    <>
    <Canvas 
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 5, 16 ]
        } } >
        <Suspense fallback={null}>
                <Experience />
        </Suspense>
    </Canvas>
    <Loader />
    </>
)