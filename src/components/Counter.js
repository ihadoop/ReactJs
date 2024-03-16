import React from "react";
class Counter extends React.Component{
    constructor() {
        super();
        this.state={counter:1};
    }
    increase(){

/*        this.setState({
            counter:this.state.counter+1

        },()=>{
            console.log("callback-->")
        })*/


        this.setState(preState=>({
            counter:preState.counter + 1

        }))
    }
    increaseFive(){
        this.increase();
        this.increase();
        this.increase();
        this.increase();
        this.increase();


    }

    render() {
        return (<div>
            {this.state.counter}
            <button onClick={()=>this.increaseFive()}>increasement</button>
        </div>);
    }

}
export default Counter