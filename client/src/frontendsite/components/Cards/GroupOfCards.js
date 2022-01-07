import CustomCard from './CarouselCard'
import {Card,CardGroup} from 'react-bootstrap'



const GroupOfCards = () => {
    return (
        <CardGroup>
            <Card className="case-carousel-cards"><CustomCard/></Card>
            <Card className="case-carousel-cards"><CustomCard/></Card>
            <Card className="case-carousel-cards"><CustomCard/></Card>         
        </CardGroup>
    )
}



export default GroupOfCards
