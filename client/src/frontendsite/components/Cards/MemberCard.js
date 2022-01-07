import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import '../assets/style.css'
import ViewButton from "../Buttons/ViewButton";
import {IoCalendar} from 'react-icons/io5'

const MemberCard = ({username, designation, bio, skills, availableFrom, avatar, memberId}) => {
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
        id={memberId}
      >
        <Image
            className="member-card-img justify-content-center"
          src={avatar}
          roundedCircle
        />

        <Card.Body className="text-center">
          <Card.Title>{username}</Card.Title>

          <Card.Subtitle>{designation}</Card.Subtitle>

          <Card.Text>
            <p className="member-card-bio">{bio}</p>
            <p><strong>Skills:</strong> {skills}</p>
            <p><strong> <IoCalendar/> Available from:</strong> {availableFrom}</p>
          </Card.Text>

          {/* <Card.Title>Skills: Python, Javascript, REST, Terraform</Card.Title> */}

          {/* <Card.Text>Available from: 23 December</Card.Text> */}
          
        </Card.Body>
        <div className={display} >
            
            <div className="d-grid">
              <ViewButton title="View Profile" type="Button" link={"/members/"+memberId}/>
            </div>
          
          </div>
      </Card>     
    </>
  );
};

export default MemberCard;

