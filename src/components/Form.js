import React, {Component} from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state  ={
            userName:'',
            comment:'',
            topic:'rust'
        }
    }

    handUserNameChange = event=>{
      this.setState({
          userName :event.target.value
      })
    }

    handUserCommentChange = event=>{
        this.setState({
            comment :event.target.value
        })
    }
    handUserTopicChange = event=>{
        this.setState({
            topic :event.target.value
        })

    }
    handSumit = event =>{

        alert(`${this.state.topic} ${this.state.userName} ${this.state.comment}`);
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handSumit}>
                <div>
                <label>UserName:</label>
                <input type='text' onChange={this.handUserNameChange} defaultValue={this.state.userName}/>
                    <div/>
                <label>comment:</label>
                <textarea defaultValue={this.state.comment}  onChange={this.handUserCommentChange}></textarea>
                <div/>
                    <label>topic:</label>
                    <select onChange={this.handUserTopicChange} defaultValue={this.state.topic}>
                        <option value='java'>java</option>
                        <option value='rust'>rust</option>
                        <option value='clojure'>clojure</option>
                    </select>
                    <div/>
                    <button  type='submit'>Submit</button>
                </div>
            </form>

        );
    }
}

export default Form