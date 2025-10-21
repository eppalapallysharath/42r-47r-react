import React from "react";
import Header from "./components/header/Header"
import Banner from "./components/sections/Banner"
import Footer from "./components/footer/Footer"
import Products from "./components/products";
import ListCategory from "./components/CategoryList"
class App extends React.Component{
    render(){
       return <>
        {/* <Header/>
        <Banner/>
        <Footer/> */}
        {/* <ListCategory/> */}
        <Products/>
       </> 
    }
}

export default App