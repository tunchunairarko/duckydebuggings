import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'



export default function FeatureCards({title,text,link, linkText,icon}) {
    return (
        <Fragment>
            <Card className="feature-cards">
                <Card.Body>
                    <div className='feature-card-icon min-width-128 d-flex justify-content-center'>
                        {icon}
                    </div>
                    <Card.Title className="d-flex justify-content-center">{title}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text className="d-flex justify-content-center">
                        {text}
                    </Card.Text>
                    <Card.Link href={link}>{linkText} <HiOutlineArrowNarrowRight /></Card.Link>
                    
                </Card.Body>
            </Card>
        </Fragment>
    )
}