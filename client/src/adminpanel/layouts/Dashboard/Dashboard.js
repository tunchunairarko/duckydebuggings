import React, { useState } from 'react'
import "../../assets/style.css" //custom css
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import {FaBars} from 'react-icons/fa'
import '../../assets/admin-panel.scss'
import RegisterNewUser from '../../components/RegForm/RegistrationForm'
import AvailabilityCalender from '../../components/Calender/AvailabilityCalender'

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
                        
                        

                   
                </main>
            </div>
        </>
    )
}
