import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ type, size, color, text, onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        type={type}
        size={size}
        variant={color}
      >
        {text}
      </Button>
    </>
  );
};

CustomButton.defaultProps = {
  title: "Button",
};

export default CustomButton