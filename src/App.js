import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <h1>Hello world</h1>
    </BrowserRouter>
  </Provider>
);

export default App;
