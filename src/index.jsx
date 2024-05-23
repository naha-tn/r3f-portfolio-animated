import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import { Loader } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render( 
    <>
        <Experience />
        <Loader />
    </>
)