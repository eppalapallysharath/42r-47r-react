import { Component } from "react";
import axios from "axios"


export class Products extends Component {

    constructor(){
    super();
    this.state = {products:[], usersData:{}}
    console.log("constructor method")
  }

  fetchProducts(){
    // fetch("https://dummyjson.com/users")
    fetch("https://fakestoreapi.com/products")
    .then(res=> res.json())
    .then(data => this.setState({products:data})) 
    .catch(er=>console.log(er))
  }

  fetchUsers(){
    axios.get("https://dummyjson.com/users")
    .then(res => this.setState({usersData: res.data}))
    .catch(err => console.log(err))
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  componentDidMount(){
    console.log("component did mount method")
    this.fetchProducts()
    this.fetchUsers()
  }

  render(){
    console.log("render method")
    return <div>
      <div>
        {/* {this.state.products.map(ele => <div style={{ border:"1px solid black" }} key={ele.id}> 
          <p>{ele.title} </p>
          <img src={ele.image} width="120px"/>
        </div>)} */}
      </div>
      <div>
          {this.state.usersData.users === undefined ? <h3>Loading ...</h3> :this.state.usersData.users.map(user=> <div key={user.id} style={{ border:"1px solid green" }}> 
            <p>{user.username} {user.age}</p>
          </div>)}
      </div>
    </div>
  }
}