import React, { useState } from 'react'
import "../../assets/style.css" //custom css
import { Container, Row, Card, Col } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { FaAddressBook, FaBars, FaList, FaPaperclip, FaUser } from 'react-icons/fa'
import '../../assets/admin-panel.scss'
import { Link } from 'react-router-dom'


export default function Dashboard() {
    const [collapsed] = useState(false);

    const [toggled, setToggled] = useState(false);


    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    return (
        <>
            <div id="content-body" className={`app  ${toggled ? 'toggled' : ''}`}>

                <Sidebar
                    collapsed={collapsed}
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                />

                <main>
                    <div className="sidebar-main-btn-toggle  btn-toggle" onClick={() => handleToggleSidebar(true)}>
                        <FaBars />
                    </div>
                    <Header />
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <Card className="mt-3 pb-3 dashboard-card" >
                                    <Card.Header className="dashboard-card-header">Quick Links</Card.Header>
                                    <Card.Body>
                                        <Row className="ml-2 pr-3 mt-2 ">
                                            <Col xs={12} sm={12} md={6} lg={4} className="mt-2 mt-mb-0">
                                                <Link className="btn btn-primary btn-block" to="/admin/members/new"><FaUser /> <br />Register <br /> new member</Link>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={4} className="mt-2 mt-mb-0">
                                                <Link className="btn btn-primary btn-block" to="/admin/availability"><FaAddressBook /> <br />Manage <br /> user roles</Link>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={4} className="mt-2 mt-mb-0">
                                                <Link className="btn btn-primary btn-block" to="/admin/posts/new"><FaPaperclip /> <br />Manage <br /> posts</Link>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={12} className="mt-2 mt-mb-0" >
                                                <Link className="btn btn-danger btn-block" to="/admin/members"><FaList /> <br />Manage members</Link>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col >
                        </Row>
                    </Container>
                </main>
            </div>
        </>
    )
}
