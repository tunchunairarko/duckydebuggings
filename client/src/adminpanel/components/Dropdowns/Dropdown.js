import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const CustomeDropdown = ({ id,title,color,dItem1,dItem2,dItem3, href1,href2,href3 }) => {
  return (
    <div>
      <DropdownButton id={id} title={title} variant={color}>
        <Dropdown.Item href={href1}>{dItem1}</Dropdown.Item>
        <Dropdown.Item href={href2}>{dItem2}</Dropdown.Item>
        <Dropdown.Item href={href3}>{dItem3}</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default CustomeDropdown;
