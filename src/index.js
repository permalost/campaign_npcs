import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';

import reducers from './reducers';

import Npc from './components/npc_show';
import NpcList from './components/npc_list';
import NpcNew from './components/npc_new';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <div>
    <Reboot />
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/npcs/new" component={NpcNew} />
          <Route path="/npcs/:name" component={Npc} />
          <Route path="/npcs" component={NpcList} />
          <Route path="/" component={NpcList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>,
  document.querySelector('.container')
);
