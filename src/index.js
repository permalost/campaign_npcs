import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import NPC from './components/show_npc';

const npc = {
  name: "Trinia",
  thumbnail: "http://static2.paizo.com/image/content/PathfinderAdventurePath/PZO1021-Trinia.jpg",
  notes: "Some interesting things about her are...unknown",
  associations: "none"
};

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <NPC npc={npc} />
  </Provider>
  , document.querySelector('.container'));
