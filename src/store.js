import {applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger' // we can logger in console 
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {
  count: 0
};


function reducer(state = initialState, action) {
    console.log("action",action);
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
      default:
        return state;
    }
  }
  
  const store = createStore(reducer,
  composeWithDevTools(
    applyMiddleware(logger)
  ));


  export default store;
  