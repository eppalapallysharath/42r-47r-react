import { Component } from "react";
import {Products} from "./components/Products"
import {ProductsList} from "./components/updating"
export class App extends Component {
  render(){
    return <>
    <h1>App component</h1>
    {/* <Products/> */}
    <ProductsList/>
    </>
  }
}

