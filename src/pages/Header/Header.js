import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./Header.css";
import logo from "../../images/logo.png"
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
const Header = () => {
    const {user,logout}=useAuth();
    console.log(user)
    return (
          <>
  <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home/home">
        <img className="img-size" src={logo} alt="Health care" />

        RD Medical Center
    </Navbar.Brand>
     <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/about">About us</Nav.Link>
      <Nav.Link as={HashLink} to="/contact">Contact us</Nav.Link>

        {user?.email? <button onClick={logout} className="btn-warning">logout</button>:<Nav.Link as={Link} to="/register">Register</Nav.Link>} 

         <Navbar.Text>
        Signed in as: <a href="#register">{user?.displayName}</a>
         </Navbar.Text> 
    </Navbar.Collapse>

    </Container>
  </Navbar>
  
  
</> 
    );
};

export default Header;