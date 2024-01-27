import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

const PostForm = ({ action, actionText, ...props }) => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

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
    <form onSubmit={validate(handleSubmit)}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', { required: true, minLength: 4 })}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter title'
          style={{ width: '50%' }}
        />
        {errors.title && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required
          </small>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register('author', { required: true, minLength: 4 })}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type='text'
          placeholder='Enter title'
          style={{ width: '50%' }}
        />
        {errors.author && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required
          </small>
        )}
      </Form.Group>

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
        </Col>
      </Row>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register('shortDescription', { required: true, minLength: 21 })}
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          type='text'
          placeholder='Enter short description'
        />
        {errors.shortDescription && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required
          </small>
        )}
      </Form.Group>

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
