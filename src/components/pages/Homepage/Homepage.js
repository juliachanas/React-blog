import PostCard from '../../features/PostCard/PostCard';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Homepage = () => {
  return (
    <div>
      <Row className='mb-3'>
        <Col>
          <h1>All Posts</h1>
        </Col>
        <Col className='d-flex justify-content-end align-items-center'>
          <Button href='/add' variant='outline-info'>
            Add post
          </Button>
        </Col>
      </Row>
      <PostCard />
    </div>
  );
};

export default Homepage;
