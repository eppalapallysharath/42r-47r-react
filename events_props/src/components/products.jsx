import { Component } from "react";
import {Card} from "./card"
// import productdata from "../assets/data/products.json"

export class Product extends Component{
    render(){
        console.log(this.props)
        return <div>
            <h3>{this.props.cardtitle}</h3>
            <div style={{ display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
            {this.props.product.map((product, index)=> <Card productData={product} i={index}/>)}
            </div>
        </div>
    }
}