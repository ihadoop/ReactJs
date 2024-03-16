import React from "react";

class Message extends React.Component{

    constructor() {
        super();
        this.state = ({message:"sss"});
    }

    changeMessage(){


        this.setState({message:"83ewjiwjwid"});

    }

    render() {
        const {message}=this.state
        return <div>
            <h1>Hi-->{message}</h1>
            <button onClick={()=>this.changeMessage()}>click</button>
        </div>;
    }

}
export  default Message