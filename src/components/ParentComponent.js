import React, {Component} from 'react';
import ChildComponent from "./ChildComponent";


class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            message:"parent"

        }
        this.greetHandle = this.greetHandle.bind(this)
    }
    greetHandle(){
        this.setState({
            message:"****"
        })
        alert("s")

    }
    render() {
        return (
            <div>
                <ChildComponent tips={this.greetHandle}/>
            </div>
        );
    }
}

export default ParentComponent