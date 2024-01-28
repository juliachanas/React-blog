//selectors

export const getAllCategories = ({ categories }) => categories;
export const getPostsByCategory = ({ posts }, category) =>
  posts.filter((post) => post.category === category);

//reducer

export default function reducer(StatePart = [], action = {}) {
  switch (action.type) {
    default:
      return StatePart;
  }
}
