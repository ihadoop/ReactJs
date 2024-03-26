
import React, {useEffect, useState} from "react";

function HookMouse(){

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMouser = e=>{
        setX(e.clientX);
        setY(e.clientY);
        console.log("logMouser")
    }

    useEffect(()=>{
        console.log("useEffect")
        window.addEventListener("mousemove",logMouser)

    },[])

    return <div>X:{x} - Y:{y}</div>


}
export default HookMouse