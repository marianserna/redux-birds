import { createStore, applyMiddleware } from 'redux';
import { composeWithDevtools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';

export default crateStore(
  reducer,
  // initial state
  {
    birds: []
  },
  // before actions
  composeWithDevtools(applyMiddleware(thunk))
);
