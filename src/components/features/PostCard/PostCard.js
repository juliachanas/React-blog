import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllPosts } from '../../../redux/postsRedux';

const PostCard = () => {
  const allPosts = useSelector(getAllPosts);

  return (
    <Row>
      {allPosts.map((post) => (
        <Col key={post.id} xs={12} sm={12} md={6} lg={4} xl={3}>
          <Card style={{ width: '100%', margin: '0.5rem' }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Row className='mb-2'>
                <Col md={3}>
                  <strong>Author:</strong>
                </Col>
                <Col md={9}>{post.author}</Col>
              </Row>
              <Row className='mb-2'>
                <Col md={3}>
                  <strong>Published:</strong>
                </Col>
                <Col md={9}>{post.publishedDate}</Col>
              </Row>
              <p>{post.shortDescription}</p>
              <Button href={`/post/${post.id}`}>Read more</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PostCard;
