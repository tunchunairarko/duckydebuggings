import Carousel from "react-bootstrap/Carousel";
import GroupOfCards from "../Cards/GroupOfCards";

const CaruselTest = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <GroupOfCards/>
          
        </Carousel.Item>
        <Carousel.Item>
        <GroupOfCards/>
          
        </Carousel.Item>
        <Carousel.Item>
        <GroupOfCards/>
          
        </Carousel.Item>
      </Carousel>      
    </>
  );
};

export default CaruselTest;
