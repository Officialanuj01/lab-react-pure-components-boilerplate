import React, { PureComponent } from 'react'

export class PureCounterComponent extends PureComponent {

    constructor(props){
        super(props);
        this.state ={
            toggle: false,
            count: 0
        }
    }

    toggle = () => {
        this.setState((prevState) =>({
            toggle: !prevState.toggle
        }))
    }

    countIncrease = () =>{
        if(this.state.toggle){
            this.setState({count: this.state.count+1})
        }
    }

    render() {
        console.log("Pure Component");
        return (
            <div>
                <h1>Pure Component</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.toggle}>Set toggle</button>
                <button onClick={this.countIncrease}>Counter</button>
            </div>
            )
    }
    }

export default PureCounterComponent
