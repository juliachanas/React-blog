import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostCard from '../../features/PostCard/PostCard';
import { getPostsByCategory } from '../../../redux/categoryRedux';

const SelectedCategoryPage = () => {
  const { categoryName } = useParams();

  const filteredPosts = useSelector(
    (state) => getPostsByCategory(state, categoryName) || []
  );

  console.log('filteredPosts', filteredPosts);
  return (
    <div className='container'>
      <h1 style={{ marginBottom: '1.5rem' }}>Category: {categoryName}</h1>
      {filteredPosts && <PostCard allPosts={filteredPosts} />}
      {!filteredPosts.length && <p>No posts found in this category.</p>}
    </div>
  );
};

export default SelectedCategoryPage;
