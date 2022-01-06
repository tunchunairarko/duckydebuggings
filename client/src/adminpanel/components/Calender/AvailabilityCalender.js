import { Container, Row, Col, Form } from "react-bootstrap";
import CustomButton from "../CustomButtons/CustomButton";

const AvailabilityCalender = () => {
  return (
    <>
      <Form>
        <Form.Group className="mt-3">
          <Form.Label>Select Member:</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Please select a member</option>
            <option value="1">Member One</option>
            <option value="2">Member Two</option>
            <option value="3">Member Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3 mb-3" controlId="avl-date">
          <Row>
            <Col>
              <Form.Label>From:</Form.Label>
              <Form.Control
                type="date"
                name="avl-date"
                placeholder="Select Date"
              />
            </Col>
            <Col>
              <Form.Label>To:</Form.Label>
              <Form.Control
                type="date"
                name="avl-date"
                placeholder="Select Date"
              />
            </Col>
          </Row>
        </Form.Group>

        <Container fluid>
          <Row className="text-end">
            <Col>
              <CustomButton title="Submit" />
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default AvailabilityCalender;
