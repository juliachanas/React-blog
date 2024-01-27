import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({
      title,
      author,
      publishedDate,
      shortDescription,
      content,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
            placeholderText='Enter date..'
            dateFormat='MM/dd/yyyy'
            style={{ width: '50%' }}
          />

          {/* <input
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            placeholder='Enter date..'
            type='text'
            style={{ width: '50%' }}
          /> */}
        </Col>
      </Row>
      <Row>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <label>Short description</label>
        </Col>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <ReactQuill
            theme='snow'
            value={shortDescription}
            onChange={(shortDescription) =>
              setShortDescription(shortDescription)
            }
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <label>Main content</label>
        </Col>
        <Col sm={12} style={{ marginBottom: '10px', marginTop: '10px' }}>
          <ReactQuill
            theme='snow'
            value={content}
            onChange={(content) => setContent(content)}
          />
        </Col>
      </Row>
      <Button type='submit'>{actionText}</Button>
    </form>
  );
};

export default PostForm;
