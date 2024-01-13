import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PostCard = () => {
  return (
    <Card style={{ width: '30%' }}>
      <Card.Body>
        <Card.Title>Article Title</Card.Title>
        <div className=''>
          <h5>Author: </h5>
          <p>EMI</p>
        </div>
        <div>
          <h5>Published: </h5>
          <p>02-03-2023</p>
        </div>
        <p>Short description...</p>
        <Button href='/post/:id'>Read more</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
