import { Text } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from 'three'
import { fadeOnBeforeCompile, fadeOnBeforeCompileFlat } from "../utils/fadeMaterials";

const TextSection = ({title, subtitle, ...props}) => {
    return (
        <group {...props}>
            { !!title && (
                <Text
                    color="#A5DD9B"
                    anchorX={'left'}
                    anchorY={'center'}
                    fontSize={0.42}
                    maxWidth={2.5}
                    lineHeight={1}
                    font={"./fonts/bebas-neue-v9-latin-regular.woff"}
                >
                    { title }
                    <meshStandardMaterial onBeforeCompile={fadeOnBeforeCompileFlat}/>
                </Text>
            )}
            <Text
                color="#A5DD9B"
                anchorX={'left'}
                anchorY={'top'}
                position-y={-0.66}
                fontSize={0.22}
                maxWidth={2.5}
                font={"./fonts/bebas-neue-v9-latin-regular.woff"}
            >
                {subtitle}
                <meshStandardMaterial onBeforeCompile={fadeOnBeforeCompileFlat}/>
            </Text>
        </group>
    )
}

export default function Intro() 
{
    const textSections = useMemo(() => {
        return [{
            position: new THREE.Vector3(-3, 1, -10),
            subtitle: `Venture forth into the unknown!
Where courage finds its voice...`
        }, 
    {
        position: new THREE.Vector3(-3, 0, -50),
        title: "The beginning",
        subtitle: `Here's where Mom found me.
Think I'm kidding? Yeah`
    }]
    }, [])

    return textSections.map((textSection, index) => (
        <TextSection {...textSection} key={index}/>
    )) 
}