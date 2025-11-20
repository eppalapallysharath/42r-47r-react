import "./navbar.css"
import { Link, NavLink } from "react-router-dom"

export const Navbar = () =>{
    return <nav>
        <ul className="nav-items">
            <NavLink to="/"><li className="nav-item">Home</li></NavLink>
            <NavLink to={"/contact"}> <li>Contact</li></NavLink> 
            <Link to="/service"><li>Service</li></Link>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/login">Login</NavLink>
        </ul>
    </nav>
}