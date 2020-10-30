import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware  } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./store/reducers";
import thunk from 'redux-thunk'
import { fetchData } from './store/actions'

// Create the store with a thunk to fetch the data Asynchronously.
const store = createStore(rootReducer, applyMiddleware(thunk));
//triggers the data fetch.
store.dispatch(fetchData())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


