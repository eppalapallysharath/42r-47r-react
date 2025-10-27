import { Component } from "react";

// type 1 event binding
export class Message extends Component{

    constructor(){
        super();
        this.state = {   greetings:"hi hello?", switch:"fan is off" }
        this.ClickChange = this.handleClick.bind(this)
        this.fanOn = this.turnOnFan.bind(this)
    }
    turnOnFan(){
        this.setState({switch:"fan is on"})
    }
    handleClick (){
        console.log("clicked")
        this.setState({greetings:"how are you?"})
        console.log(this.state.greetings)
    }
    render(){
        return <div>
            <p>Message</p>
            <h4>{this.state.greetings}</h4>
            <button onClick={this.ClickChange}>Change</button>
            <p>{this.state.switch}</p>
            <button onClick={this.fanOn}>say something</button>
        </div>
    }
}


// type 2 and type 3 event binding

export class CounterApp extends Component {
    constructor(){
        super();
        this.state = {count:0}
    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    
    decrement = () => {
        this.setState({count:this.state.count-1})
    }
    

    render(){
        return <div>
            <h2>Counter app</h2>
            <p>Count {this.state.count}</p>
            {/* 2nd type using arrow function in render method */}
            <button onClick={()=>this.increment()}> Increment </button>
            {/* 3rd type Arrow Function as a Class Property  */}
            <button onClick={this.decrement}> Decrement </button>
        </div>
    }
}