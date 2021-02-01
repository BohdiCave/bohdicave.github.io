import React from 'react';
import { useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav-style.css';

export default function Navigation() {
  const location = useLocation();
  return(
    <header>
    <Navbar variant="dark" expand="lg" id="menu">
      <Navbar.Brand href="https://github.com/BohdiCave" target="new">
        <img src="./assets/Images/photo-Bohdan-brand.png" id="nav-brand" alt="Bohdan Pechenyak" />
        BohdiCave
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">Menu</Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item href="/#mission">Brand Statement</NavDropdown.Item>
            <NavDropdown.Item href="/#showcase">Project Showcase</NavDropdown.Item>
            <NavDropdown.Item href="/#skills">Skills</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Portfolio" id="basic-nav-dropdown">
            <NavDropdown.Item href="/portfolio#backend">Backend/Full-stack projects</NavDropdown.Item>
            <NavDropdown.Item href="/portfolio#frontend">Frontend projects</NavDropdown.Item>
          </NavDropdown>
          
          <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item href="/wisdom">Cross-cultural wisdom</NavDropdown.Item>
            <NavDropdown.Item href="/story">My story</NavDropdown.Item>
            <NavDropdown.Item href="/interests">Interests</NavDropdown.Item>
          </NavDropdown>
          
          <Nav.Link id="contact-info" href="/contacts">Contacts</Nav.Link>        
          
          
        </Nav>
        <Nav.Item id="lang-choice">
        <Nav.Link className="lang-choice" href={location.pathname==="/" ? "/index-ua" 
          : location.pathname==="/portfolio" ? "/portfolio-ua"
          : location.pathname==="/wisdom" ? "/wisdom-ua" 
          : location.pathname==="/story" ? "/story-ua"
          : location.pathname==="/interests" ? "/interests-ua"
          : location.pathname==="/contacts" ? "/contacts-ua"
          : undefined}>
          <img className="flag-icon" src="/assets/Images/UA.png" alt="UA-flag"/>
        </Nav.Link>
        <Nav.Link className="lang-choice" href={location.pathname==="/index-ua" ? "/" 
          : location.pathname==="/portfolio-ua" ? "/portfolio"
          : location.pathname==="/wisdom-ua" ? "/wisdom" 
          : location.pathname==="/story-ua" ? "/story"
          : location.pathname==="/interests-ua" ? "/interests"
          : location.pathname==="/contacts-ua" ? "/contacts"
          : undefined}>
          <img className="flag-icon" src="/assets/Images/US.png" alt="US-flag"/>
        </Nav.Link>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
    </header>
    );
}