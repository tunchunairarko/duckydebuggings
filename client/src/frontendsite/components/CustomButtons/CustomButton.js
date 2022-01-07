import React from "react";
import Button from "react-bootstrap/Button";
import '../../frontendsite/assets/style.css'

const CustomButton = ({ type, size, title, onClick }) => {
  return (
    <>
      <Button className="btn-color"
        onClick={onClick}
        type={type}
        size={size}
        //variant={color}
      >
        {title}
      </Button>
    </>
  );
};

CustomButton.defaultProps = {
  title: "Button",
};

export default CustomButton