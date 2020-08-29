import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'



const initialState = 0;

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'CUSTOM_NUMBER':
      return state + action.payload
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <App  store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

