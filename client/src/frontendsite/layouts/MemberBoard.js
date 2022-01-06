
import React, { Fragment } from 'react'
import { Col, Container, Row, Button, Image, InputGroup, FormControl } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/assets/style.css'
import MemberCard from '../components/Cards/MemberCard'





export default function MemberBoard() {
    return (
        <Fragment>
            <Header></Header>
            <Container className='padding-r-l-75'>

                <Row className='top-bottom-margin-8rem'>
                    <Col sm="12" >
                        <h1 className="text-align-center">Our Members</h1>
                        <p className="text-align-center">Whether you’re starting out, settling in to or scaling up your freelance business, navigating the changing marketplace can be challenging. That’s why on top of essential practical support, our community provides the moral support to help you go it alone without feeling alone.</p>
                    </Col>
                </Row>
                <Row className='top-bottom-margin-8rem'>
                    <Col sm="4">
                        <MemberCard />
                    </Col>
                    <Col sm="4">
                        <MemberCard />
                    </Col>
                    <Col sm="4">
                        <MemberCard />
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </Fragment>
    )
}
