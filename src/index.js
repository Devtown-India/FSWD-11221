import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import { todosReducer } from './redux/reducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';

const initialState =["Workout", "eat", "Work"]
const store = createStore(todosReducer,initialState,composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} >
        <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

