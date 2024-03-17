import React, {Component} from 'react';
import WithComponent from "./WithComponent";

class HoverCounts extends Component {
    render() {
        const {count,handler}  =this.props
        return (
            <div>
                <div onMouseEnter={handler}>Mouse {count} Times</div>
            </div>
        );
    }
}

export default WithComponent(HoverCounts)