import React from "react";
import "./Navbar.css"
class Navbar extends React.Component{
    shopFirstName = "COLO"
    shopLastName = "SHOP"
    render(){
        return <nav className="main-nav-container">
            <div>
                <span>{this.shopFirstName}</span>
                <span>{this.shopLastName}</span>
            </div>
            <div>
                <ul className="nav-links">
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>PROMOTIONS</li>
                    <li>PAGES</li>
                    <li>BLOGS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar;