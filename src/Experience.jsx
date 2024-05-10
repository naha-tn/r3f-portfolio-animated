import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import { Background } from './components/Background.jsx'
import Scene from './Scene.jsx'

export default function Experience()
{
    return <>

        <OrbitControls makeDefault />
        <Background />
        <Lights />
        <Scene />
    </>
}