import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../../../redux/postsRedux';
import PostCard from '../../features/PostCard/PostCard';

const SelectedCategoryPage = () => {
  const { categoryName } = useParams();
  const allPosts = useSelector(getAllPosts);

  const filteredPosts = allPosts.filter(
    (post) => post.category === categoryName
  );

  return (
    <div className='container'>
      <h1 style={{ marginBottom: '1.5rem' }}>Category: {categoryName}</h1>
      {filteredPosts.length > 0 ? (
        <PostCard allPosts={filteredPosts} />
      ) : (
        <p>No posts found in this category.</p>
      )}
    </div>
  );
};

export default SelectedCategoryPage;
