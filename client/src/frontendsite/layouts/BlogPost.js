
import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/assets/style.css'


export default function BlogPost() {
    return (
        <main className='front-end-main'>
            <Header></Header>
            <Container className='padding-r-l-75'>
                <Row >
                    <Col sm="12" className='blogpost-title-col'>
                        
                    </Col>
                    <Col sm="12">
                        <h1 className='blogpost-title'>Garden Vegetables : Best Vegetables to Grow</h1>
                        <h4 style={{fontSize:'3vh'}}>Posted on January 05, 2022 by <a href="#" className='custom-a'>username1</a></h4>
                        <Image src="https://i.imgur.com/JNes3J4.jpeg" fluid/>
                        <hr className='dotted-hr' />
                    </Col>
                </Row>
                <Row className='blog-post-body'>
                    <Col sm="12">
                        body
                    </Col>
                </Row>    
            </Container>
            <Footer></Footer>
        </main>
    )
}
