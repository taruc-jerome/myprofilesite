import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logoImg from "../assets/img/logo111.JPG";

export default function AppNavbar(){


return(
<Navbar id="navbar-bg" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand id="nav-text" as={Link} to="/"><img id="logo" src={logoImg} alt="Logo Img"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link id="nav-text" as={Link} to="/aboutme">About Me</Nav.Link>
            <Nav.Link id="nav-text" as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link id="nav-text" as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link id="nav-text" as={Link} to="/contactme">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

	);
}


