import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  return (
    <form style={{ marginLeft: '10%', marginRight: '10%' }}>
      <Row>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <label>Title</label>
        </Col>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Add new title...'
            type='text'
            style={{ width: '50%' }}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <label>Author</label>
        </Col>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder='Enter author...'
            type='text'
            style={{ width: '50%' }}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <label>Published</label>
        </Col>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <input
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            placeholder='Enter date..'
            type='text'
            style={{ width: '50%' }}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <label>Short description</label>
        </Col>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <textarea
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            placeholder='Leave a comment here..'
            type='text'
            style={{ width: '100%', minHeight: '200px' }}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <label>Main content</label>
        </Col>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Leave a comment here..'
            type='text'
            style={{ width: '100%', minHeight: '300px' }}
          />
        </Col>
      </Row>
      <Button>Add post</Button>
    </form>
  );
};

export default AddPostForm;
