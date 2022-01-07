import { Form, Row, Col, Button } from "react-bootstrap";

const NewPostForm = () => {
  return (
    <>
      <Form className="mt-3">
        <Form.Label>Create new Post</Form.Label>
        <Row className="mb-3">
          <Col>
            <Form.Control placeholder="Your Name" />
          </Col>
          <Col>
            <Form.Control placeholder="Your Nickname" />
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Say what you need to say!</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default NewPostForm;
