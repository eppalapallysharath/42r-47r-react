import { Component } from "react";

export class Counter extends Component {
    constructor(){
        super();
        this.state = {count:1, textbox:"", print:"", num:""}
    }
    
    increment(){
       if(this.state.count < 10){
        this.setState({count:this.state.count+1})
        }
    }

    decrement = () =>{
        console.log("decrement")
        this.setState({count:this.state.count - 1})
    }

    rest(){
        console.log("rest")
        this.setState({count:0})
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({textbox:event.target.value})
    }

    getName(){
        this.setState({print:this.state.textbox, textbox:""})
    }

    changeNumber = (event) => {
        console.log("number", event.target.value)
        this.setState({num: event.target.value})
    }

    render(){
        return <div> 
                <h3>Counter App</h3>
                <p>Count {this.state.count}</p>
                <button onClick={()=>this.increment()}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={()=>this.rest()}>rest 0</button>
                <div>
                <input type="text"  onChange={(event)=>this.inputChange(event)}/>
                <p>live preview {this.state.textbox} </p>
                <button onClick={()=>this.getName()}>get username</button>
                <li>user enter name {this.state.print}</li>
                <input type="number" onChange={(event)=>this.changeNumber(event)} />
                <p>number preview{this.state.num}</p>
                </div>
            </div>
    }
}