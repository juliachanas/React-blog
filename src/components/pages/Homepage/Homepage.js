import PostCard from '../../features/PostCard/PostCard';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <Row className='mb-3'>
        <Col>
          <h1>All Posts</h1>
        </Col>
        <Col className='d-flex justify-content-end align-items-center'>
          <Link to='/add'>
            <Button variant='outline-info'>Add post</Button>
          </Link>
        </Col>
      </Row>
      <PostCard />
    </div>
  );
};

export default Homepage;
