import React, {Component} from 'react';

import {UserConsumer} from "./UserContext";

class ComponentC extends Component {
    render() {
        return (
            <div>
               <UserConsumer>
                   {
                       (userName)=><h1>I'm {userName}</h1>
                   }
               </UserConsumer>
            </div>
        );
    }
}

export default ComponentC