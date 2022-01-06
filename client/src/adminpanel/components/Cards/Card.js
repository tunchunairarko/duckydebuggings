import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import CustomButton from "../CustomButtons/CustomButton";
import '../../assets/style.css'

const CustomeCard = () => {
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
      >
        <Image
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          roundedCircle
        />

        <Card.Body className="text-center">
          <Card.Title>username1</Card.Title>

          <Card.Subtitle>API Developer</Card.Subtitle>

          <Card.Text>
            username1 is a efficient developer in python and javascript
            programming
          </Card.Text>

          <Card.Title>Skills: Python, Javascript, REST, Terraform</Card.Title>

          <Card.Text>Available from: 23 December</Card.Text>
          
          <div className={display} >
            
            <div className="d-grid">
              <CustomButton title="View Profile"/>
            </div>
          
          </div>
          
        </Card.Body>
      </Card>     
    </>
  );
};

export default CustomeCard;


