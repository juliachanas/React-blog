import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllPosts } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';

const PostCard = () => {
  const allPosts = useSelector(getAllPosts);

  return (
    <Row>
      {allPosts.map((post) => (
        <Col key={post.id} xs={12} sm={12} md={6} lg={4}>
          <Card style={{ width: '100%', marginBottom: '15px' }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Row className='mb-2'>
                <Col xs={6} sm={6} md={4} lg={5}>
                  <strong>Author:</strong>
                </Col>
                <Col xs={6} sm={6} md={8} lg={7}>
                  {post.author}
                </Col>
              </Row>
              <Row className='mb-2'>
                <Col xs={6} sm={6} md={4} lg={5}>
                  <strong>Published:</strong>
                </Col>
                <Col xs={6} sm={6} md={8} lg={7}>
                  {post.publishedDate}
                </Col>
              </Row>
              <p dangerouslySetInnerHTML={{ __html: post.shortDescription }} />
              <Link to={`/post/${post.id}`}>
                <Button variant='primary'>Read more</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PostCard;
