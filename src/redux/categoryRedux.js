//selectors

export const getAllCategories = ({ categories }) => categories;
export const getPostByCategory = ({ posts }, category) =>
  posts.find((post) => post.category === category);

//reducer

export default function reducer(StatePart = [], action = {}) {
  switch (action.type) {
    default:
      return StatePart;
  }
}
