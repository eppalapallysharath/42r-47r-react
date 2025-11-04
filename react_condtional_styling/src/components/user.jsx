import { Component } from "react";
import "./user.css"

export class Users extends Component {
    constructor (){
        super();
        this.state = {isLogin:false}
        console.log("constructor")
    }

    handleLogin(){
        this.setState({isLogin:!this.state.isLogin})
    }

    loginStyle = {
        backgroundColor:"green",
        color:"blue"
    }
    logoutStyle = {
        backgroundColor:"red",
        color:"white"
    } 

    componentDidMount(){
        console.log("component did mount")
    }

    render(){
        console.log("render")
        return (
        // <div style={{ backgroundColor:this.state.isLogin ? "green": "red", color:this.state.isLogin ? "blue" : "white" , fontFamily: this.state.isLogin ? "cursive" :"sans-serif"}}>
        <div style={this.state.isLogin ? this.loginStyle : this.logoutStyle}>
            <p className={this.state.isLogin ? "user-login" : "user-logout"} style={{ color:"magenta" }}>Users </p>
            {this.state.isLogin? <div> <p>Hi welcome back users</p> </div> : <div> <p>Login user</p> </div>}
            <button onClick={()=>this.handleLogin()}>{this.state.isLogin ? "Logout" : "Login"}</button>
        </div>)
    }
}