import React from "react";
import Button from "react-bootstrap/Button";
import "../assets/style.css"
import {IoIosEye} from 'react-icons/io'

const ViewButton = ({ type, title, onClick, link }) => {
  return (
    <>
      <Button className="view-btn-color view-member-btn "
        onClick={onClick}
        type={type}
        href={link}
        //variant={color}
      >
        <IoIosEye/>
        {title}
      </Button>
    </>
  );
};

ViewButton.defaultProps = {
  title: "Button",
};

export default ViewButton