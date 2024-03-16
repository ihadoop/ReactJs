import React, {Component} from 'react';

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error, errorInfo) {

        console.log(errorInfo)
    }

    static getDerivedStateFromError(error){

       return {
           hasError:true
       }

    }



    render() {
        if(this.state.hasError){

            return (
                <div>
                    <h1>Error</h1>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary