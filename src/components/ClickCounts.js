import React, {Component} from 'react';
import WithComponent from "./WithComponent";

class ClickCounts extends Component {

    render() {
        const {count,handler}  =this.props
        return (
            <div>
                <button onClick={handler}>Click {count} Times</button>
            </div>
        );
    }
}

export default WithComponent(ClickCounts)