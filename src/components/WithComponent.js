import React, {Component} from "react";

const WithComponent = OriginalComponent=>{

    class NewComponent extends Component{

        constructor() {
            super();
            this.state = {
                counter:0

            }
        }

        handClick = ()=>{

            this.setState(preState=>{
                return {counter:preState.counter+1}
            })
        }

        render() {
            return <OriginalComponent count={this.state.counter} handler={this.handClick}/>
        }

    }

    return NewComponent

}

export  default WithComponent