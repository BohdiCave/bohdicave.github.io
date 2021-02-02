import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/nav-style.css';

export default function Navigation({address}) {
  return(
    <header>
      <Navbar variant="dark" expand="lg" id="menu">
        <Navbar.Brand href="https://github.com/BohdiCave" target="new">
          <img src="./assets/Images/photo-Bohdan-brand.png" id="nav-brand" alt="Bohdan Pechenyak" />
          BohdiCave
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {(address==="/home-ua" || address==="/portfolio-ua" || address==="/wisdom-ua" 
          || address==="/story-ua" || address==="/interests-ua" || address==="/contacts-ua") 
          ? "Меню" : "Menu"}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            {(address==="/home-ua" || address==="/portfolio-ua" || address==="/wisdom-ua" 
            || address==="/story-ua" || address==="/interests-ua" || address==="/contacts-ua") 
            ? 
            (<Nav className="mr-auto">
              <NavDropdown title="Домашня" id="basic-nav-dropdown">              
                <NavDropdown.Item href={address==="/home-ua" ? "/#mission" : "/home-ua#mission"}>
                  Місія та візія           
                </NavDropdown.Item>
                <NavDropdown.Item href={address==="/home-ua" ? "/#showcase" : "/home-ua#showcase"}>
                  Показові проєкти
                </NavDropdown.Item>
                <NavDropdown.Item href={address==="/home-ua" ? "/#skills" : "/home-ua#skills"}>
                  Вміння
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Портфель" id="basic-nav-dropdown">
                <NavDropdown.Item href={address==="/portfolio-ua" ? "/#backend" : "/portfolio-ua#backend"}>
                  Серверні (backend) та комплексні проєкти 
                </NavDropdown.Item>
                <NavDropdown.Item href={address==="/portfolio-ua" ? "/#frontend" : "/portfolio-ua#frontend"}>
                  Клієнтні (frontend) проєкти
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Про мене" id="basic-nav-dropdown">
                <NavDropdown.Item href="/wisdom-ua">
                  Мультикультурна мудрість
                </NavDropdown.Item>
                <NavDropdown.Item href="/story-ua">
                  Моя історія
                </NavDropdown.Item>
                <NavDropdown.Item href="/interests-ua">
                  Зацікавлення
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id="contact-info" href="/contacts-ua">Контакти</Nav.Link>
            </Nav>)
            : 
            (<Nav className="mr-auto">
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <NavDropdown.Item href="/#mission">
                  Brand Statement            
                </NavDropdown.Item>
                <NavDropdown.Item href="/#showcase">
                  Project Showcase
                </NavDropdown.Item>
                <NavDropdown.Item href="/#skills">
                  Skills
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                <NavDropdown.Item href={address==="/portfolio" ? "#backend" : "/portfolio#backend"}>
                  Backend/Full-stack projects
                </NavDropdown.Item>
                <NavDropdown.Item href="/#showcase">
                  Frontend projects
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/wisdom">
                  Cross-cultural wisdom
                </NavDropdown.Item>
                <NavDropdown.Item href="/story">
                  My story
                </NavDropdown.Item>
                <NavDropdown.Item href="/interests">
                  Interests
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id="contact-info" href="/contacts">Contacts</Nav.Link>
            </Nav>)} 
          <Nav.Item id="lang-choice">
            <Nav.Link className="lang-choice" href={address==="/" ? "/home-ua" 
              : address==="/portfolio" ? "/portfolio-ua"
              : address==="/wisdom" ? "/wisdom-ua" 
              : address==="/story" ? "/story-ua"
              : address==="/interests" ? "/interests-ua"
              : address==="/contacts" ? "/contacts-ua"
              : undefined}>
              <img className="flag-icon" src="/assets/Images/UA.png" alt="UA-flag"/>
            </Nav.Link>
            <Nav.Link className="lang-choice" href={address==="/home-ua" ? "/" 
            : address==="/portfolio-ua" ? "/portfolio"
            : address==="/wisdom-ua" ? "/wisdom" 
            : address==="/story-ua" ? "/story"
            : address==="/interests-ua" ? "/interests"
            : address==="/contacts-ua" ? "/contacts"
            : undefined}>
            <img className="flag-icon" src="/assets/Images/US.png" alt="US-flag"/>
          </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </header>
    );
}