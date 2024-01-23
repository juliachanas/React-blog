import { useSelector, useDispatch } from 'react-redux';
import { getPostbyId, removePost } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import { Card, Row, Col, Modal, Button } from 'react-bootstrap';
import { Navigate, Link } from 'react-router-dom';
import { useState } from 'react';

const PostPage = () => {
  const { id } = useParams();
  const postData = useSelector((state) => getPostbyId(state, id));
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <Link to={`/edit/${postData.id}`}>
                <Button
                  variant='outline-info'
                  style={{ marginRight: '10px', marginBottom: '5px' }}
                >
                  Edit
                </Button>
              </Link>
              <Button
                variant='outline-danger'
                style={{ marginRight: '10px', marginBottom: '5px' }}
                onClick={handleShow}
              >
                Delete
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This operation will completely remove this post from the app.
                  <br />
                  Are you sure?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant='danger' onClick={handleRemovePost}>
                    Remove
                  </Button>
                </Modal.Footer>
              </Modal>
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
