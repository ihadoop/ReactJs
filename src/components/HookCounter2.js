import React, {useState} from 'react';

function HookCounter2(){
    const initCount = 0
    const[count,setCount]  =useState(initCount)

    return <div>
        Count:{count}
        <button onClick={()=>setCount(initCount)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount((preCount)=>preCount+5)}>IncrementFive</button>
    </div>
}
export  default HookCounter2