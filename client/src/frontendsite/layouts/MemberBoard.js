
import React, {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/assets/style.css'
import MemberCard from '../components/Cards/MemberCard'
import Axios from 'axios'

export default function MemberBoard() {
    const [members, setMembers] = useState([])
    const randAvailableDates = ["Fully booked","February 02", "January 15", "Now", "Fully booked", "January 17", "February 18", "Fully booked", "Now", "January 08", "Now"]
    const apiUrl = "http://localhost:8080"

    useEffect(() => {
        const compMount = async () => {
            try {
                const userRes = await Axios.get(
                    // "/api/products/"+cookies.username,
                    apiUrl + "/api/basicUsers/",

                )
                console.log(userRes)
                for (var i = 0; i < userRes.data.length; i++) {
                    // let joiningDate = new Date(userRes.data[i].accountCreation_date)
                    // joiningDate = (joiningDate.toLocaleString('default', { month: 'short' })) + " " + (joiningDate.getUTCFullYear())
                    // userRes.data[i].joiningDate = joiningDate
                    var datePck = Math.floor(Math.random() * 11)
                    userRes.data[i].availableFrom = randAvailableDates[datePck]
                    userRes.data[i].skills = userRes.data[i].skills.replace(/,/g, " . ")
                }
                setMembers(userRes.data)

            } catch (error) {
                console.log(error)
            }
        }
        compMount()
    }, [])
    return (
        <main className='front-end-main'>
            <Header></Header>
            <Container className='padding-r-l-75'>

                <Row className='top-bottom-margin-8rem'>
                    <Col sm="12" >
                        <h1 className="text-align-center">Our Members</h1>
                        <p className="text-align-center">Whether you’re starting out, settling in to or scaling up your freelance business, navigating the changing marketplace can be challenging. That’s why on top of essential practical support, our community provides the moral support to help you go it alone without feeling alone.</p>
                    </Col>
                </Row>
                <Row className='top-bottom-margin-8rem'>
                    {members.map(member => (
                        <Col sm="4">
                            <MemberCard username={member.username} designation={member.designation} bio={member.bio} skills={member.skills} availableFrom={member.availableFrom} avatar={member.avatar} memberId={member.userAccount_id}/>
                        </Col>
                    ))}
                    {/* <Col sm="4">
                        <MemberCard />
                    </Col>
                    <Col sm="4">
                        <MemberCard />
                    </Col> */}
                </Row>

            </Container>
            <Footer></Footer>
        </main>
    )
}
