import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Button, Image } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/assets/style.css'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import DuckAvatar from '../components/assets/duck-avatar-1.png'
import FeaturePostCards from '../components/Cards/FeaturedPostCards'
import DuckAvatar1 from '../components/assets/duck-avatar-1.png'
import { FaCalendar, FaCalendarAlt, FaFigma, FaJava, FaPython } from 'react-icons/fa'
import { SiCodersrank, SiCplusplus, SiRuby, SiSpringboot } from 'react-icons/si'
import { GiSkills } from 'react-icons/gi'
import Tooltip from "react-simple-tooltip"
import CaseCarousel from '../components/Carousel/CaseCarousel'

export default function IndividualMember() {
    const { memberId } = useParams()
    const [member, setMember] = useState({ "skillSet": [] })
    const apiUrl = "http://localhost:8080"
    const randAvailableDates = ["Fully booked", "February 02", "January 15", "Now", "Fully booked", "January 17", "February 18", "Fully booked", "Now", "January 08", "Now"]

    useEffect(() => {
        const compMount = async () => {
            try {
                console.log(memberId)
                const userRes = await Axios.get(
                    // "/api/products/"+cookies.username,
                    apiUrl + "/api/basicUsers/" + memberId,

                )
                console.log(userRes)
                let joiningDate = new Date(userRes.data.accountCreation_date)
                joiningDate = (joiningDate.toLocaleString('default', { month: 'short' })) + " " + (joiningDate.getUTCFullYear())
                userRes.data.joiningDate = joiningDate

                var datePck = Math.floor(Math.random() * 11)
                userRes.data.availableFrom = randAvailableDates[datePck]
                var skillSet = userRes.data.skills.split(",")
                userRes.data.skillSet = skillSet
                console.log(skillSet)
                setMember(userRes.data)

            } catch (error) {
                console.log(error)
            }
        }
        compMount()
    }, [])
    return (
        <main className='front-end-main'>
            <Header></Header>
            <Container className='padding-r-l-75 position-relative'>

                <Row className=' individual-breadcrumb-row' >
                    <Col sm="12">
                        <p>Members / Profile<br />Profile</p>
                    </Col>

                </Row>
                <Row className='individual-profile-identity'>
                    <Col sm="1"><Image src={member.avatar} fluid /></Col>
                    <Col sm="2" style={{ paddingTop: "10px" }}>
                        <p><strong>{member.username}</strong><br />{member.designation}</p>
                    </Col>
                    <Col sm="5"></Col>
                    <Col sm="4" className='align-right padding-top-06rem'>
                        <Button className='individual-profile-buttons'>Contact me</Button>
                        <Button className='individual-profile-buttons'>Posts</Button>
                        <Button className='individual-profile-buttons'>Case studies</Button>
                    </Col>

                </Row>
                <Row className='top-margin-8rem'>
                    <Col sm="4">
                        <h5 style={{ fontWeight: 900 }}>Profile Information</h5>
                        <p>{member.bio}</p>
                        <hr />
                        <p>
                            <strong>Name:</strong> {member.username} <br />
                            <strong>Email:</strong> {member.email} <br />
                            <strong>Mobile:</strong> {member.phone} <br />
                            <strong>Joining date:</strong> {member.joiningDate} <br />
                            <strong>Education:</strong> {member.education} <br />
                        </p>
                    </Col>
                    <Col sm="4">
                        <h5 style={{ fontWeight: 900 }}>Skills</h5>

                        {member.skillSet.map(skill => {
                            if (skill == "python") {
                                return <span className="skill-icon-member-page" >
                                    <Tooltip content={skill} fontSize="12px" fadeDuration="200" background="rgba(0,0,0,0.67)">
                                        <FaPython />
                                    </Tooltip>

                                </span>
                            }
                            else if (skill === "java") {
                                return <span className="skill-icon-member-page" >
                                    <Tooltip content={skill} fontSize="12px" fadeDuration="200" background="rgba(0,0,0,0.67)">
                                        <FaJava />
                                    </Tooltip>

                                </span>

                            }
                            else if (skill === "c++") {
                                return <span className="skill-icon-member-page" >
                                    <Tooltip content={skill} fontSize="12px" fadeDuration="200" background="rgba(0,0,0,0.67)">
                                        <SiCplusplus />
                                    </Tooltip>
                                </span>
                            }
                            else if (skill === "ux") {
                                return <span className="skill-icon-member-page" >
                                    <Tooltip content={skill} fontSize="12px" fadeDuration="200" background="rgba(0,0,0,0.67)">
                                        <FaFigma />
                                    </Tooltip></span>
                            }
                            else if (skill === "spring") {
                                return <span className="skill-icon-member-page" ><Tooltip content={skill} fontSize="12px" fadeDuration="200" background="rgba(0,0,0,0.67)">
                                    <SiSpringboot />
                                </Tooltip></span>
                            }
                            else if (skill === "ruby") {
                                return <span className="skill-icon-member-page" ><Tooltip content={skill} fontSize="12px" fadeDuration="200" background="rgba(0,0,0,0.67)">
                                    <SiRuby />
                                    </Tooltip></span>
                            }
                            else {
                                return <span className="skill-icon-member-page" ><Tooltip content={skill} fontSize="12px" fadeDuration="200" background="rgba(0,0,0,0.67)">
                                    <SiCodersrank />
                                    </Tooltip></span>
                            }
                        })}

                        <h5 style={{ fontWeight: 900, marginTop:'10px' }}>Availability</h5>
                        <p>
                            <strong><FaCalendar /> From:</strong> 12 December
                            <br /><br />
                            <strong><FaCalendarAlt /> Until:</strong> 12 December
                        </p>
                    </Col>
                    <Col sm="4">
                        <h5 style={{ fontWeight: 900 }}>Featured posts</h5>
                        <FeaturePostCards title="Excellent project completed" value="May 2021 . python . Django " image={DuckAvatar1} />
                        <FeaturePostCards title="Excellent project completed" value="May 2021 . python . Django " image={DuckAvatar1} />
                        <FeaturePostCards title="Excellent project completed" value="May 2021 . python . Django " image={DuckAvatar1} />
                    </Col>
                </Row>
                <Row className="top-margin-2rem case-studies-carousel">
                    <Col sm="12">
                        <h2>Case Studies</h2>
                    </Col>
                    <CaseCarousel />
                </Row>
            </Container>
            <Footer></Footer>
        </main>
    )
}
