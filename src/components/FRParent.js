import React, {Component} from 'react';
import FrInput from "./FRInput";
import {Button} from "antd";



class FrParent extends Component {

    constructor(props) {
        super(props);
        this.inputRef  =  React.createRef()
    }

    handleClick = ()=>{
            alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <FrInput ref={this.inputRef}/>
                <Button type='primary' onClick={this.handleClick}></Button>
            </div>
        );
    }
}

export default FrParent