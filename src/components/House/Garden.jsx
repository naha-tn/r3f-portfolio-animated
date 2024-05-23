import { Bench } from "./Bench";
import { BirchTree } from "./BirchTree";
import { Cactus } from "./Cactus";
import { Fence } from "./Fence";
import { Grass } from "./Grass";
import { House } from "./House";
import { PineTree } from "./PineTree";

const Y_POS = -1    
export default function  Garden() {
    return <>
        <Fence
            scale={0.4}
            rotation-y= {Math.PI / 9}
            position={[-1.5, Y_POS, -5]}
        />
        <House 
            scale={3}    
            rotation-y= {Math.PI / 4}
            position={[-3.2, Y_POS, -3]}
        />
        <Bench 
            scale={2}    
            rotation-y= {Math.PI / 2}
            position={[4, Y_POS, -3]}
        />
        <Cactus 
            scale={0.9}    
            rotation-y= {Math.PI/ 2}
            position={[-4, Y_POS, 2]}
        />
        <Grass 
            scale={100}    
            rotation-y= {Math.PI / 4}
            position={[4.5, Y_POS, -1]}
        />
        <BirchTree 
            scale={1}    
            rotation-y= {Math.PI / 4}
            position={[4.5, Y_POS, -1]}
        />
        <PineTree 
            scale={1}    
            rotation-y= {Math.PI}
            position={[-4 , Y_POS, 1]}
        />
    </>
}