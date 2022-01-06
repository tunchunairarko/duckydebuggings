import CustomCard from './CarouselCard'
import {Card,CardGroup} from 'react-bootstrap'



const GroupOfCards = () => {
    return (
        <CardGroup>
            <Card><CustomCard/></Card>
            <Card><CustomCard/></Card>
            <Card><CustomCard/></Card>         
        </CardGroup>
    )
}



export default GroupOfCards
