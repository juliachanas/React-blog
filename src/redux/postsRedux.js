//selectors
export const getAllPosts = ({ posts }) => posts;

export const getPostbyId = ({ posts }, id) =>
  posts.find((post) => post.id === id);

//actions
const createActionName = (actionName) => `app/posts/${actionName}`;

//action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default postsReducer;
