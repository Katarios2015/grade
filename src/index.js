import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';

import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from 'redux';
import rootReducer from './store/root-reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createAPI } from './services/api';
import thunk from 'redux-thunk';

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
