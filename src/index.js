import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import App from './views/App'
import configureStore from './redux/store';

import './scss/styles.scss'

const target = document.querySelector('#root')
const store = configureStore();
const history = createHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
