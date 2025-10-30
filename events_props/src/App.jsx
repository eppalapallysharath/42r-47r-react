import { Component } from "react";
import {InputTag } from "./components/Inputcomp"
import {Product} from "./components/products"
import productData from "./assets/data/products.json"
import deal from "./assets/data/deals.json"

class App extends Component{

  render(){
    return<>
    <p>App</p>
    <InputTag/>
    <hr/>
    <Product product={productData} cardtitle = "All products"/>
    <hr/>
    <Product product={deal} cardtitle = "deals of the day"/>
    </>
  }
}

export default App