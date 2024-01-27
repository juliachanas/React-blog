const initialState = {
  categories: [
    { id: 'sport', name: 'Sport' },
    { id: 'news', name: 'News' },
    { id: 'movies', name: 'Movies' },
  ],
  posts: [
    {
      id: '1',
      title: 'How to be happy',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'news',
    },
    {
      id: '2',
      title: 'All about stress',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('04-05-2023'),
      author: 'Minni Mii',
      category: 'sport',
    },
    {
      id: '3',
      title: 'I am strong',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('05-10-2023'),
      author: 'Eleonor Bee',
      category: 'movies',
    },
  ],
};

export default initialState;
