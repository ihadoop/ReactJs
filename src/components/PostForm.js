import React, {Component} from 'react';
import axios from "axios";



class PostForm extends Component {
    constructor() {
        super();
        this.state  ={
            userId:null,
            title:'',
            body:'',
            id:null
        }
        this.id = null
    }
    changeHandler = (e)=>{
      ;
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    submitHandler = e=>{

        axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(response=>{

                this.setState(response.data)
        }).catch(error=>{


        })
        e.preventDefault()

    }
    render() {
        const {id}  =this.state
        return (
            <div>
                <div>Id<label>{id}</label> </div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        userId:  <input type='text' name='userId' value={this.state.userId} onChange={this.changeHandler}/>
                    </div>

                    <div>
                        title: <input type='text' name='title' value={this.state.title} onChange={this.changeHandler}/>
                    </div>

                    <div>
                        body: <input type='text' name='body' value={this.state.body} onChange={this.changeHandler}/>
                    </div>
                        <button type='submit'>sumit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;