import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import store from './redux/store';

import Homepage from './components/pages/Homepage/Homepage';
import PostPage from './components/pages/PostPage/PostPage';
import AddPostPage from './components/pages/AddPostPage/AddPostPage';
import EditPostPage from './components/pages/EditPostPage/EditPostPage';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import CategoriesPage from './components/pages/CategoriesPage/CategoriesPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/add' element={<AddPostPage />} />
          <Route path='/edit/:id' element={<EditPostPage />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  </Provider>
);

export default App;
