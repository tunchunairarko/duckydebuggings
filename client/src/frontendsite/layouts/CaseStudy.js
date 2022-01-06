
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




export default function CaseStudy() {
    return (
        <Fragment>
            <Header></Header>
            <Container className='padding-r-l-75'>
                <Row >
                    <Col sm="12">
                        <Image src='https://i.imgur.com/JNes3J4.jpeg' fluid />
                        <hr className='dotted-hr' />
                    </Col>
                    <Col sm="12">
                        <h1>Case Study:</h1>
                        <h2>A goal tracker worth every penny</h2>
                        <h4><strong><em>for</em> Patelco Credit Union</strong></h4>
                        <Image src="https://i.imgur.com/jCtHEIC.png" />
                        <hr className='dotted-hr' />
                    </Col>
                    <Col sm="9">
                        <h3>
                            Brief
                        </h3>
                        <p>
                            (Brief Provided by General Assembly UXDi NYC) Patelco has not upgraded their website in quite some time. They do not want to be stuck with their current limitations upon upgrading their system in two years. Also, they are seeking a fresh approach to help customers manage their money.
                        </p>
                        <h3>
                            Roles
                        </h3>
                        <p>
                            User Research, UX Design, UI Design
                        </p>
                        <h3>
                            Time
                        </h3>
                        <p>
                            2 Week Project
                        </p>
                        <h3>
                            Value Added
                        </h3>
                        <p>
                            Developed a goal setting feature. Allowing customers to create financial goals based on their specified wants and needs within a redesigned responsive webpage.
                        </p>
                    </Col>
                    <Col sm="3">
                        <Card
                            bg="info"
                            key="1"
                            text="light"
                            style={{ width: '18rem' }}
                            className="mb-2"
                        >
                            <Card.Header>Activities</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li>Conducted User Interviews</li>
                                        <li>Constructed Personas</li>
                                        <li>Drafted Wireframes</li>
                                        <li>Built a Prototype</li>
                                        <li>Delivered a Design Brief</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Fragment>
    )
}
