import React, {Component} from 'react';


class User extends Component {
    render(isLogin) {
        const {name} = this.props
        return (
            <div>
                <h1>Hello:{this.props.render(false)}</h1>
            </div>
        );
    }
}

export default User