import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookCard = ({obj}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{obj.title}</Card.Title>
        <Card.Text>
          {obj.genres}
        </Card.Text>
        <Link to={`/book/${obj._id}`}>View Book</Link>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
