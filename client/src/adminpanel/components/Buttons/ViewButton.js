import React from "react";
import Button from "react-bootstrap/Button";
import "../../assets/style.css"
import {IoIosEye} from 'react-icons/io'

const ViewButton = ({ type, title, onClick }) => {
  return (
    <>
      <Button className="view-btn-color view-member-btn"
        onClick={onClick}
        type={type}
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