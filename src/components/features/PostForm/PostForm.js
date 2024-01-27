import { useState } from 'react';
import Button from 'react-bootstrap/Button';
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
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', { required: true, minLength: 3 })}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='Enter title'
          style={{ width: '50%' }}
        />
        {errors.title && (
          <small className='d-block form-text text-danger mt-2'>
            Title is too short (min: 3)
          </small>
        )}
      </Form.Group>
      <Form.Group className='mb-3' controlId='formAuthor'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register('author', { required: true, minLength: 3 })}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type='text'
          placeholder='Enter title'
          style={{ width: '50%' }}
        />
        {errors.author && (
          <small className='d-block form-text text-danger mt-2'>
            Author is too short (min: 3)
          </small>
        )}
      </Form.Group>

      <Form.Group
        controlId='formPublishedDate'
        style={{ marginBottom: '10px', marginTop: '10px' }}
      >
        <Form.Label>Published Date</Form.Label>
        <DatePicker
          selected={publishedDate}
          onChange={(date) => setPublishedDate(date)}
          placeholderText='Enter date..'
          dateFormat='MM/dd/yyyy'
        />
        {dateError && (
          <small className='d-block form-text text-danger mt-2'>
            Date is required
          </small>
        )}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formShortDescription'>
        <Form.Label>Short description</Form.Label>
        <Form.Control
          {...register('shortDescription', { required: true, minLength: 20 })}
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          type='text'
          placeholder='Enter short description'
        />
        {errors.shortDescription && (
          <small className='d-block form-text text-danger mt-2'>
            Short description is too short (min: 20)
          </small>
        )}
      </Form.Group>

      <Form.Group
        controlId='formContent'
        style={{ marginBottom: '10px', marginTop: '10px' }}
      >
        <Form.Label>Main Content</Form.Label>
        <ReactQuill
          theme='snow'
          value={content}
          onChange={(content) => setContent(content)}
        />
        {contentError && (
          <small className='d-block form-text text-danger mt-2'>
            Content can't be empty
          </small>
        )}
      </Form.Group>
      <Button type='submit'>{actionText}</Button>
    </Form>
  );
};

export default PostForm;
