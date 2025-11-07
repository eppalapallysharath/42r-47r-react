import { Component } from "react";
import {Products} from "./components/Products"
import {ProductsList} from "./components/updating"
import { ExampleUnmounting } from "./components/unmounting";
export class App extends Component {
  constructor(){
    super();
    this.state = {visible: false}
  }
  toggle (){
    this.setState({visible: !this.state.visible})
  }
  render(){
    return <>
    <h1>App component</h1>
    <button onClick={()=>this.toggle()}>{this.state.visible ? "hide": "show"}</button>
    { this.state.visible &&<ExampleUnmounting/>}
    {/* <Products/> */}
    {/* <ProductsList/> */}
    </>
  }
}

