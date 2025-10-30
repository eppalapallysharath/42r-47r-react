import { Component } from "react";
export class Card extends Component{   
    render(){
        return <div key={this.props.i} style={{ width:"15rem" }}>
            <img src={this.props.productData.image} width={150}/>
            <p>{this.props.productData.title}</p>
            <p1>${this.props.productData.price}</p1>
        </div>
    }
}