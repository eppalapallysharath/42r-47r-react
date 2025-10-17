import React from "react";
import Header from "./components/header/Header"
import Banner from "./components/sections/Banner"
import Footer from "./components/footer/Footer"

class App extends React.Component{
    render(){
       return <>
        <Header/>
        <Banner/>
        <Footer/>
       </> 
    }
}

export default App