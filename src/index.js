import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router'
import App from './App'
import GamesContainer from './games/GamesContainer'
import GamePage from './games/GamePage'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store, { history } from './store'
import './index.css';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ GamesContainer } />
        <Route path="/games/:gameId" component={GamePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
