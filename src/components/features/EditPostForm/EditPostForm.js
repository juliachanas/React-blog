import PostForm from '../PostForm/PostForm';
import { editPost } from '../../../redux/postsRedux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostbyId } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const postData = useSelector((state) => getPostbyId(state, id));

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };

  if (!postData) return <Navigate to='/' />;
  return (
    <PostForm
      key={postData.id}
      action={handleSubmit}
      actionText='Edit post'
      title={postData.title}
      author={postData.author}
      publishedDate={postData.publishedDate}
      category={postData.category}
      shortDescription={postData.shortDescription}
      content={postData.content}
    />
  );
};

export default EditPostForm;
