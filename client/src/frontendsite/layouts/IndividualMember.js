
import React from 'react'
import { Col, Container, Row, Button, Image} from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/assets/style.css'

import DuckAvatar from '../components/assets/duck-avatar-1.png'
import FeaturePostCards from '../components/Cards/FeaturedPostCards'
import DuckAvatar1 from '../components/assets/duck-avatar-1.png'



export default function IndividualMember() {
    return (
        <main className='front-end-main'>
            <Header></Header>
            <Container className='padding-r-l-75 position-relative'>

                <Row className='top-margin-8rem individual-breadcrumb-row' >
                    <Col sm="12">
                        <p>Members / Profile<br />Profile</p>
                    </Col>
                    
                </Row>
                <Row className='individual-profile-identity'>
                    <Col sm="1"><Image src={DuckAvatar} fluid/></Col>
                    <Col sm="2" >
                        <p><strong>username1</strong><br />designation_here</p>
                    </Col>
                    <Col sm="3"></Col>
                    <Col sm="6" className='align-right margin-top-1rem'>
                        <Button className='individual-profile-buttons'>Contact me</Button>
                        <Button className='individual-profile-buttons'>Posts</Button>
                        <Button className='individual-profile-buttons'>Case studies</Button>
                    </Col>
                    
                </Row>
                <Row className='top-margin-8rem'>
                    <Col sm="4">
                        <h5 style={{fontWeight:900}}>Profile Information</h5>
                        <p>Bio here</p>
                        <hr />
                        <p>
                            <strong>Name:</strong> ********** <br/>
                            <strong>Email:</strong> ********** <br/>
                            <strong>Mobile:</strong> ********** <br/>
                            <strong>Joining date:</strong> ********** <br/>
                            <strong>Education:</strong> ********** <br/>
                        </p>
                    </Col>
                    <Col sm="4">
                        <h5 style={{fontWeight:900}}>Skills</h5>
                        <p>SKILLS HERE</p>
                        <h5 style={{fontWeight:900}}>Availability</h5>
                        <p>
                        <strong>From:</strong> 12 December<br/>
                        <strong>Until:</strong> 12 December
                        </p>
                    </Col>
                    <Col sm="4">
                        <h5 style={{fontWeight:900}}>Featured posts</h5>
                        <FeaturePostCards title="Excellent project completed" value="May 2021 . python . Django " image={DuckAvatar1}/>
                        <FeaturePostCards title="Excellent project completed" value="May 2021 . python . Django " image={DuckAvatar1}/>
                        <FeaturePostCards title="Excellent project completed" value="May 2021 . python . Django " image={DuckAvatar1}/>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </main>
    )
}
