
import React, { Fragment } from 'react'
import { Col, Container, Row, Button, Image, InputGroup, FormControl } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/assets/style.css'
import IndividualBackground from '../components/assets/IndividualBackground.jpg'
import DuckAvatar from '../components/assets/duck-avatar-1.png'




export default function IndividualMember() {
    return (
        <Fragment>
            <Header></Header>
            <Container className='padding-r-l-75'>

                <Row className='top-bottom-margin-8rem ' style={{backgroundImage:IndividualBackground}}>
                    <p>Members / Profile</p>
                    <h6>Profile</h6>
                </Row>
                <Row className='individual-profile-identity'>
                    <Col sm="1"><Image src={DuckAvatar} fluid/></Col>
                    <Col sm="2">
                        <p><strong>username1</strong></p>
                        <p>rodin@gmail.com</p>
                    </Col>
                    <Col sm="2">
                        <Button>Contact me</Button>
                    </Col>
                    <Col sm="2">
                        <Button>Posts</Button>
                    </Col>
                    <Col sm="2">
                        <Button>Case studies</Button>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </Fragment>
    )
}
