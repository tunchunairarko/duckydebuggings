import {Card,CardGroup} from 'react-bootstrap'
import MemberCard from "../Cards/MemberCard";

const MemberCards = () => {
  return (
    <>    
      <CardGroup>
        <Card>
          <MemberCard />
        </Card>
        <Card>
          <MemberCard />
        </Card>
        <Card>
          <MemberCard />
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <MemberCard />
        </Card>
        <Card>
          <MemberCard />
        </Card>
        <Card>
          <MemberCard />
        </Card>
      </CardGroup>
    </>
  );
};

export default MemberCards;