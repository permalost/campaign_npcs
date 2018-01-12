import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/app';
import reducers from './reducers';

import NpcList from './components/show_npc_list';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
      <NpcList />
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
