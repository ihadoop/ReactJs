import React, {Component} from 'react';
import ComponentB from "./ComponentB";
import {UserContext,UserProvider} from "./UserContext";


function mapStateToProps(state) {
    return {};
}

class ComponentA extends Component {
    render() {
        return (
            <div>
                <UserProvider value='sunshine'>
                         <ComponentB/>
                </UserProvider>
            </div>
        );
    }
}

export default ComponentA