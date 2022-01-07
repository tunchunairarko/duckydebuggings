
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/assets/style.css'
import {FaUserFriends, FaInfo, FaCoins} from 'react-icons/fa'





export default function About() {
    return (
        <main className='front-end-main about'>
            <Header></Header>
            <Container className='padding-r-l-75'>

                <Row className='top-bottom-margin-8rem'>
                    <Col sm="12" >
                        <h1 className="text-align-center">About us</h1>
                        <p className="text-align-center">Our code generation engine enables API providers to generate SDKs for their APIs within minutes and at a fraction of the cost. We provide tools like our API editor and API transformer to further aid API providers in minimizing the time required to ship excellent quality SDKs to the developers using their APIs. Our code generation engine is also capable of generating succinct and error-free documentation for APIs and SDKs, both. The documentation for the SDKs includes dynamic screenshots detailing usage instructions tailored to the provider's specific API and also code snippets showing example usage. As the cherry on the cake, we provide beautifully designed DX portals to encapsulate this documentation.</p>
                    </Col>
                </Row>
                <div className="row text-center">
                    <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
                        <span><FaUserFriends /></span>
                        <h2>Community</h2>
                        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
                        <span><FaInfo /></span>
                        <h2>Resource</h2>
                        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
                        <span><FaCoins /></span>
                        <h2>Success</h2>
                        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                    </div>
                </div>

            </Container>
            <Footer></Footer>
        </main>
    )
}
