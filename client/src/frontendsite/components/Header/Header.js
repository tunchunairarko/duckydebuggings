import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Image } from 'react-bootstrap'
import Logo from '../assets/logo.png'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="front-site-header" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={Logo} className="max-width-150" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-center">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about-us">About us</Nav.Link>
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
                            <Nav.Link href="/case-study/1">Case Studies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about-us">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            Hello Guest!
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/admin/dashboard">
                            Log in
                        </Nav.Link>
                        {/* <Nav.Link eventKey={3} href="#memes" className="btn btn-responsive btn-light" style={{color:'inherit'}}>
                            Sign up
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
