import React, {Component} from 'react';
import axios from "axios";


class PostListComponent extends Component {

    constructor() {
        super();
        this.state = {
            posts:[],
            errorMsg:''
        }
    }

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            this.setState({posts:response.data})
        }).catch(error=>{
            this.setState({errorMsg:'error'})
        });
    }

    render() {
        const {posts,errorMsg} = this.state


        return (
            <div>
                Lists of Post
                { posts.length? posts.map(ele=><div key={ele.id}>{ele.title}</div>):null}
                {errorMsg ? <div>{errorMsg}</div> :null}
            </div>
        );
    }
}

export default PostListComponent