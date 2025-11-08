import { Component } from "react";
import {TodoApp} from "./Components/Todo"

class App extends Component {

  render(){
    return <>
    <h3>Todo Application</h3>
    <TodoApp/>
    </>
  }
}

export default App;