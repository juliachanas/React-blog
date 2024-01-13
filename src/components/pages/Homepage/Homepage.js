import PostCard from '../../features/PostCard/PostCard';
import Button from 'react-bootstrap/Button';

const Homepage = () => {
  return (
    <div>
      <div>
        <h1>All Posts</h1>
        <Button href='/add' variant='outline-info'>
          Add post
        </Button>{' '}
      </div>
      <PostCard />
    </div>
  );
};

export default Homepage;
