import React from "react";
import Form from "react-bootstrap/Form";
import CustomButton from "../CustomButtons/CustomButton";
import AvatarPicker from "../Avatars/AvatarPicker"

export const RegisterNewUser = () => (
  <>
    <Form className="p-3">
      
      <Form.Group className="col-1">
      <Form.Label>Avatars</Form.Label>
        <AvatarPicker/>
      </Form.Group>

      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicAddress">
        <Form.Label>Home Address</Form.Label>
        <Form.Control type="address" placeholder="Enter Your Address" />
      </Form.Group>

      <Form.Group controlId="formBasicRole">
        <Form.Label>Designation / User Role</Form.Label>
        <Form.Control type="title" placeholder="Enter Your Title" />
      </Form.Group>
      <Form.Group controlId="formBasicEducation">
        <Form.Label>Education</Form.Label>
        <Form.Control type="education" placeholder="Enter Your Education" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSkills">
        <Form.Label>Skills</Form.Label>
        <Form.Control type="skills" placeholder="Enter Your Skills" />
      </Form.Group>

      <CustomButton />
    </Form>
  </>
);

export default RegisterNewUser;