import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import DefaultButton from "../Buttons/DefaultButton";

import "../../assets/style.css"



const CustomCard = () => {
  return (
    <div>
      <Container fluid>
        <Card>
          <Card.Img
            src="https://media.istockphoto.com/photos/modern-and-bohemian-composition-of-interior-design-with-gray-sofa-picture-id1166445580?b=1&k=20&m=1166445580&s=170667a&w=0&h=d8FTif1t13MblnUe10b_Xk0drvlYStz3yU-Cqf2CSs4="
          />

          <Card.Body>
            <Card.Subtitle className="text-muted mb-1">
              Card Subtitle
            </Card.Subtitle>
            <Card.Title>Card Title</Card.Title>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Row>
              <Col xs>
                <DefaultButton />
              </Col>              
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CustomCard;
