import { Component } from "react";
import axios from "axios"

class App extends Component {
  constructor(){
    super();
    this.state = {data:"", products:[],
       todosData: []
    } }

  // time() {
  //   setTimeout(()=>{  this.setState({data:"ben10"})} , 3000)
  // }

    fetchProducts(){
      fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then(data => {this.setState({products:data}), console.log(data)})
    }

    fetchtodos(){
      axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res=> this.setState({todosData:res.data}))

    }

  componentDidMount(){
    // this.time()

    this.fetchProducts()
    this.fetchtodos()
    
  }

  render(){
      
      return <>
        <h2>App components</h2>
        <p>name {this.state.data}</p>
        <p>hello</p>
        {
          this.state.products.length > 0 ? this.state.products.map(item => <div key={item.id}>
          <p>{item.title}</p>
        </div>) : <h1>Loading...</h1>
        }

        {this.state.todosData.map(ele=><li key={ele.id} style={{ border:"1px solid red" }}>{ele.title}</li>)}
        
      </>
  }
}

export default App