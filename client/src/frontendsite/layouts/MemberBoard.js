
import React, { Fragment } from 'react'
import { Col, Container, Row, Button, Image, InputGroup, FormControl } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Tedt from '../components/assets/home-page-slider.png'
import Clients from '../components/assets/Clients.png'
import Footer from '../components/Footer/Footer'
import '../components/assets/style.css'
import { FaSearch } from 'react-icons/fa'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'
import FeatureCards from '../components/Cards/FeatureCards'
import { FcBullish, FcQuestions, FcComboChart } from 'react-icons/fc'
import HomePageMemberCard from '../components/Cards/HomePageMemberCard'
import DuckAvatar1 from '../components/assets/duck-avatar-1.png'




export default function MemberBoard() {
    return (
        <Fragment>
            <Header></Header>
            <Container className='padding-r-l-75'>
                
                <Row className='top-bottom-margin-8rem'>
                    <Col sm="12" >
                        <h2 className="text-align-center">Our Members</h2>
                        <p className="text-align-center">Whether you’re starting out, settling in to or scaling up your freelance business, navigating the changing marketplace can be challenging. That’s why on top of essential practical support, our community provides the moral support to help you go it alone without feeling alone.</p>
                    </Col>
                    
                </Row>
                
                
            </Container>
            <Footer></Footer>
        </Fragment>
    )
}
