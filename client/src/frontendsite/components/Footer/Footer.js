import React from "react"
import { Row, Col, Container } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

const Footer = () =>
    <footer className="page-footer font-small blue ">
        <Container className=" text-md-left">
            <Row>
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 >About us</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Getting Started</a></li>
                        <li><a href="#!">Community Guidelines</a></li>
                        <li><a href="#!">Why Join?</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 >Find out More</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">About us</a></li>
                        <li><a href="#!">Blog</a></li>
                        <li><a href="#!">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-md-4 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Ducky Debugging</h5>
                    <p>We strive to educate and collaborate with like-minded businesses to make a difference environmentally and socially. Together we can make an impact.</p>
                </div>
            </Row>
            <Row className="justify-content-center" >
                <Col sm="12" style={{ width: '60%' }}>
                    <hr className="clearfix w-100 pb-0 footer-hr" />
                </Col>
                <Col sm="12" style={{textAlign:'left', width:'60%'}}>
                    <div className="footer-copyright pt-1 pb-3">
                        © 2022 Copyright:
                        <a href="#" style={{fontWeight:'700'}}> Ducky Debugging</a>
                        <SocialIcon url="https://facebook.com/jaketrent" bgColor="rgba(99, 110, 114,0.67)" style={{ width: '20px', height: '20px', margin: '5px', float:'right' }} />
                        <SocialIcon url="https://twitter.com/jaketrent" bgColor="rgba(99, 110, 114,0.67)" style={{ width: '20px', height: '20px', margin: '5px', float:'right' }} />
                        <SocialIcon url="https://instagram.com/jaketrent" bgColor="rgba(99, 110, 114,0.67)" style={{ width: '20px', height: '20px', margin: '5px', float:'right' }} />
                    </div>
                </Col>
            </Row>

        </Container>



    </footer>

export default Footer