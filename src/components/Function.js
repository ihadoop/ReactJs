import React from "react";

function FunctionClick(){

    function handleClick(){

        console.log("click")

    }

    return( <div>
        <button onClick={handleClick}>Click</button>
    </div>);

}

export  default FunctionClick