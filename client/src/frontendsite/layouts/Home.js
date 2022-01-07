
import React from 'react'
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




export default function Home() {
    return (
        <main className='front-end-main'>
            <Header></Header>
            <Container className='padding-r-l-75'>
                <Row className='bottom-margin-8-rem'>
                    <Col sm="5" xs="12">
                        <div className="py-8">
                            <h1>We make debugging easy</h1>
                            <h5 className='pt-2 pb-5'>Ducky Debugging is a community of freelancers who can provide you the best services for your business</h5>
                            <InputGroup className='search-bar-banner'>
                                <InputGroup.Text id="search-icon-banner"><FaSearch /></InputGroup.Text>
                                <FormControl
                                    placeholder="Search"
                                    aria-label="search"
                                    aria-describedby="search-addon"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <IoChevronForwardCircleOutline />
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                    <Col sm="7" xs="12">
                        <Image src={Tedt} fluid />
                    </Col>
                </Row>
                <Row className='top-bottom-margin-8rem'>
                    <Col sm="12">
                        <Image src={Clients} fluid />
                    </Col>
                </Row>
                <Row className='top-bottom-margin-8rem'>
                    <Col sm="12" >
                        <h2 className="text-align-center">Getting work done has never been easier</h2>
                        <p className="text-align-center">Whether you’re starting out, settling in to or scaling up your freelance business, navigating the changing marketplace can be challenging. That’s why on top of essential practical support, our community provides the moral support to help you go it alone without feeling alone.</p>
                    </Col>
                    <Col sm="4">
                        <FeatureCards title="Get Ahead" text="Financial planning, forecasting and adjusting rapidly with customer demands and budgets." link="#" linkText="Learn more" icon={<FcBullish />} />
                    </Col>
                    <Col sm="4">
                        <FeatureCards title="Get Ahead" text="Financial planning, forecasting and adjusting rapidly with customer demands and budgets." link="#" linkText="Learn more" icon={<FcComboChart />} />
                    </Col>
                    <Col sm="4">
                        <FeatureCards title="Get Ahead" text="Financial planning, forecasting and adjusting rapidly with customer demands and budgets." link="#" linkText="Learn more" icon={<FcQuestions />} />
                    </Col>
                </Row>
                <Row className='top-bottom-margin-8rem'>
                    <Col sm="12" >
                        <h2 className="text-align-center">Our Members</h2>
                        <p className="text-align-center">Search for freelancers by skill, location, or just browse for inspiration and camaraderie.</p>
                    </Col>
                    <Col sm="4" className='mt-2 mb-2'>
                        <HomePageMemberCard title="username1" value="May 2021 . python . Django " image={DuckAvatar1}/>
                    </Col>
                    <Col sm="4" className='mt-2 mb-2'>
                        <HomePageMemberCard title="username1" value="May 2021 . python . Django " image={DuckAvatar1}/>
                    </Col>
                    <Col sm="4" className='mt-2 mb-2'>
                        <HomePageMemberCard title="username1" value="May 2021 . python . Django " image={DuckAvatar1}/>
                    </Col>
                    <Col sm="4" className='mt-2 mb-2'>
                        <HomePageMemberCard title="username1" value="May 2021 . python . Django " image={DuckAvatar1}/>
                    </Col>
                    <Col sm="4" className='mt-2 mb-2'>
                        <HomePageMemberCard title="username1" value="May 2021 . python . Django " image={DuckAvatar1}/>
                    </Col>
                    <Col sm="4" className='mt-2 mb-2'>
                        <HomePageMemberCard title="username1" value="May 2021 . python . Django " image={DuckAvatar1}/>
                    </Col>
                    <Col sm="12" style={{textAlign:'center'}}>
                        <Button variant="info" className='home-view-all-button' href="/our-members">
                            View All
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </main>
    )
}
