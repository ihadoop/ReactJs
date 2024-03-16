import React, {Component} from 'react';
import Person from "./Person";


class NameList extends Component {



    render() {
        const persons = [{
            name:"sunshine",
            age:1
        },
            {
                name:"jack",
                age:2
            }]
        const personList = persons.map((p,index)=><Person key={index} person={p} k={index}/> )
        return (
            <div>
                {personList}
            </div>
        );
    }
}

export default NameList