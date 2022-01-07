import React, { useState } from 'react'
import "../../assets/style.css" //custom css
import { Row } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import {FaBars} from 'react-icons/fa'
import '../../assets/admin-panel.scss'
import MemberCards from '../../components/Cards/MemberCards'

export default function ManageMember() {
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
                    
                    <Row className="justify-content-center">Our Members</Row>
                        <MemberCards />
                        
                    
                </main>
            </div>
        </>
    )
}
