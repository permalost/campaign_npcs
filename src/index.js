import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

import NpcList from './components/npc_list';
import Npc from './components/npc_show';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/npcs/:id" component={Npc} />
        <Route path="/npcs" component={NpcList} />
        <Route path="/" component={NpcList} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
