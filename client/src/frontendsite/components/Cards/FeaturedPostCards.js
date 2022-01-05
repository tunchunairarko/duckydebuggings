import React, {Fragment} from 'react'
import { Row, Col, Card} from 'react-bootstrap'
import "../assets/style.css";



export default function FeaturePostCards({title, value, image}) {
    return (
        <Fragment>
            <Card className="card-stats featured-post-cards">
            <Card.Body align="left">
                <Row>
                    <Col className="col-2">
                        <Card.Img
                        align="left"
                        src={image}
                        className="featured-post-card-img"                  
                        alt="Card image cap"
                        fluid
                        />
                    </Col>
                    <Col className="col-10">
                        <div className="numbers">
                            <Card.Title className="featured-post-card-title">{title}</Card.Title>
                            <Card.Subtitle className="featured-post-card-subtitle">{value}</Card.Subtitle>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
            {/* <Card.Footer className="dashboard-card-footer">
                <small className="text-muted"><FaClock /> updated 5 minutes ago. </small>
            </Card.Footer> */}
            
          </Card>
        </Fragment>
    )
}