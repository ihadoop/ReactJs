import React, {Component} from 'react';


function Hero({heroName}){
    if(heroName=='joker'){
        throw new Error("no hero")
    }

    return(<div>
        <h1>{heroName}</h1>
    </div>)

}

export default Hero