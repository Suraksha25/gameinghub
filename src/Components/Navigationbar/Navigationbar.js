import React from 'react'
import './Navigationbar.css';
import {NavLink} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FcBusinesswoman} from 'react-icons';

function Navigationbar() {
  return (
    <div className='navb'>
        <Navbar expand="lg" className='navvv bg-dark'>
        <Navbar.Brand ><img src='https://cdn.vectorstock.com/i/500p/76/06/king-gaming-badge-vector-48667606.jpg' width={"50px"} height={"50px"} className="img" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto " variant='pills'>
        <ul className="navbar-nav  p3 ">
         <li className="nav-item home">
          <NavLink className="nav-link " 
           to='/'>Home</NavLink>
         </li> 
         <li className="nav-item home">
          <NavLink className="nav-link " 
           to='/play'>Play</NavLink>
         </li> 
      </ul>
      
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
      
    </div>
  )
}

export default Navigationbar