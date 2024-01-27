//selectors

export const getAllCategories = ({ categories }) => categories;

//reducer

export default function reducer(StatePart = [], action = {}) {
  switch (action.type) {
    default:
      return StatePart;
  }
}
