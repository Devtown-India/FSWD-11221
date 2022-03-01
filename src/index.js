import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// style imports
import './index.css';

import { createStore} from 'redux'
import todosReducer from './store/reducer';
import {Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  todos:["go to the GYM", "Eat Protein", "Do the work"]
}

const store = createStore(todosReducer, initialState, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store} >
      <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

