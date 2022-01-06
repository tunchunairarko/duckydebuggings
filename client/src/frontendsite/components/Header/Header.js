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
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">About us</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="/our-members">Our Members</Nav.Link>
                            {/* <NavDropdown title="Our Members" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/members/12345">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/members/12345">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/members/12345">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/members/12345">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
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
                        <Nav.Link eventKey={3} href="#memes" className="btn btn-responsive btn-primary" style={{color:'#fff'}}>
                            Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}