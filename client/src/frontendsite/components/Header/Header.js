import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Image } from 'react-bootstrap'
import Logo from '../assets/logo.png'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={Logo} className="max-width-150" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-center">
                        <Nav.Item>
                            <Nav.Link href="#features">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#pricing">About us</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <NavDropdown title="Our Members" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#pricing">Case Studies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Hello Guest!</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Log in
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="#memes" className="btn btn-responsive btn-primary">
                            Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
