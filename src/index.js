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
  composeWithDevTools(
    // Начнём с конфигурирования хранилища. Подключим `redux-thunk` в список
    // middlewares. Аргументом для `thunk` передадим сконфигурированный
    // экземпляр `axios`, чтобы была возможность обратиться к нему из действия
    applyMiddleware(thunk.withExtraArgument(api)),
    //applyMiddleware(redirect),
  ),
);

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
