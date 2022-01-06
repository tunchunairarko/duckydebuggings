import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import '../assets/style.css'
import ViewButton from "../Buttons/ViewButton";
import {IoCalendar} from 'react-icons/io5'

const MemberCard = () => {
  const [display, setDisplay] = useState("notdisplayed");
  const showButton = e => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = e => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };

  return (
    <>
      <Card 
        onMouseEnter={e => showButton(e)}
        onMouseLeave={e => hideButton(e)}
        className="member-card"
      >
        <Image
            className="member-card-img justify-content-center"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          roundedCircle
        />

        <Card.Body className="text-center">
          <Card.Title>username1</Card.Title>

          <Card.Subtitle>API Developer</Card.Subtitle>

          <Card.Text>
            <p>username1 is a efficient developer in python and javascript
            programming</p>
            <p><strong>Skills:</strong> Python, Javascript, REST, Terraform</p>
            <p><strong> <IoCalendar/> Available from:</strong> 23 December</p>
          </Card.Text>

          {/* <Card.Title>Skills: Python, Javascript, REST, Terraform</Card.Title> */}

          {/* <Card.Text>Available from: 23 December</Card.Text> */}
          
        </Card.Body>
        <div className={display} >
            
            <div className="d-grid">
              <ViewButton title="View Profile" type="Button" />
            </div>
          
          </div>
      </Card>     
    </>
  );
};

export default MemberCard;

