import React,{useContext} from 'react'
import { Container, Nav, Navbar,Image, Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from "../assets/brandlogo.png"
import { CartContext } from '../ContextApi/CartContext'

export const NavBar = () => {
  const {cart} = useContext(CartContext)

  

  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark">
      <Container fluid  className='px-5'>
        <Navbar.Brand >
            <Image src={logo} width="80px" height="40px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" >Home</NavLink>
          </Nav>
          <NavLink to="/cart">Cart<Badge bg="secondary">{cart.length}</Badge></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
