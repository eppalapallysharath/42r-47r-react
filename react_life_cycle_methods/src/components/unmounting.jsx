import { Component } from "react";

export class ExampleUnmounting extends Component{
    constructor(){
        super();
        this.state = {time:0, timer:""}
        console.log("constructor")
    }

    componentDidMount(){
        console.log("component did mount")
        this.state.timer = setInterval(()=>{ console.log("hi"); this.setState({time: this.state.time +1})  },1000)
    }

    componentWillUnmount(){
        console.log("unmounting")
        clearInterval(this.state.timer)
        this.setState({time:0, timer:""})
    }

    render(){  
        console.log("render method") 
        return <div>
            <h1> unmounting Example </h1>
            <p>{this.state.time}</p>
        </div>
    }
}