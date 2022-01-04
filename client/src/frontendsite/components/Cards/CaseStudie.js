import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container,Row,Col, Image } from "react-bootstrap";

import '../assets/style.css'


const CaseStudieCard = () => {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
  <Image variant="top" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Subtitle>Project #1</Card.Subtitle>
    <Card.Title>Random</Card.Title>
    <Card.Text>
    As Uber works through a huge amount of internal management turmoil.
    </Card.Text>
    <Container>
      <Row>

      <Col sm={8}>
      <Button variant="primary">View More</Button>
      </Col>

      <Col sm={4}>
      Icon placeholder
      </Col>

      </Row>
    
    </Container>
    
    
  
  </Card.Body>
</Card>
        </div>
    )
}

export default CaseStudieCard
