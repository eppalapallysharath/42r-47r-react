import { Component } from "react";
import {Users} from "./components/user"


class App extends Component {
  render(){
    return <>
      <h2>App component</h2>
      <Users/>
    </>
  }
}

export default App