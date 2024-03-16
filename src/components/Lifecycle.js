import React, {Component} from 'react';

import {Button, Slider} from "antd";

class Lifecycle extends Component {
    constructor() {
        super();
        console.log("Lifecycle  constructor")
    }


    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle  getDerivedStateFromProps")
    return null;
    }

    componentDidMount() {
        console.log("Lifecycle  didmount")
    }

    render() {
        console.log("Lifecycle  render")
        return (
            <div>
                <Button type='primary'>---</Button>
                <Slider></Slider>
            </div>
        );
    }
}

export default Lifecycle