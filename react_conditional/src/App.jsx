import { Component } from "react";
import {Car, Bike} from "./components/car"

class App extends Component{
  render(){
    return <>
      <h2>App components</h2>
      <Car/>
      <Bike/>
    </>
  }
}
export default App;