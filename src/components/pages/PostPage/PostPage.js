import { useSelector } from 'react-redux';
import { getPostbyId } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
// import { Navigate } from 'react-router-dom';
import { getAllPosts } from '../../../redux/postsRedux';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';
import { removePost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';

const PostPage = () => {
  const { id } = useParams();
  const postData = useSelector((state) => getPostbyId(state, id));
  const dispatch = useDispatch();

  const handleRemovePost = (e) => {
    e.preventDefault();
    dispatch(removePost(postData.id));
  };

  if (!postData) return <Navigate to='/' />;
  return (
    <div style={{ marginBottom: '20px' }}>
      <Card
        key={postData.id}
        style={{ marginRight: '10%', marginLeft: '10%', border: 'none' }}
      >
        <Card.Body>
          <Row className='mb-5'>
            <Col md={8} lg={9}>
              <Card.Title>{postData.title}</Card.Title>
            </Col>
            <Col
              md={4}
              lg={3}
              className='d-flex justify-content-center align-items-center'
            >
              {' '}
              <Button
                href={`/edit/${postData.id}`}
                variant='outline-info'
                style={{ marginRight: '10px', marginBottom: '5px' }}
              >
                Edit
              </Button>
              <Button
                variant='outline-danger'
                style={{ marginRight: '10px', marginBottom: '5px' }}
                onClick={handleRemovePost}
              >
                Delete
              </Button>
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col xs={6} sm={6} md={4} lg={5}>
              <strong>Author:</strong>
            </Col>
            <Col xs={6} sm={6} md={8} lg={7}>
              {postData.author}
            </Col>
          </Row>
          <Row className='mb-2'>
            <Col xs={6} sm={6} md={4} lg={5}>
              <strong>Published:</strong>
            </Col>
            <Col xs={6} sm={6} md={8} lg={7}>
              {postData.publishedDate}
            </Col>
          </Row>
          <p>{postData.content}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostPage;
