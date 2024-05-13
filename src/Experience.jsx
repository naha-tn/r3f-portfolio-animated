import { ScrollControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import Scene from './Scene.jsx'

export default function Experience()
{
    return <>
        <ScrollControls pages={100} damping={1}
            style={{
                opacity: 0.5
            }}    
        >
            <Lights />
            <Scene />
        </ScrollControls>
    </>
}