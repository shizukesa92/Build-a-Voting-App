import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
	Provider
} from 'react-redux';
import {
	createStore,
	applyMiddleware
} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
require("babel-polyfill");

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


window.axios = axios;
ReactDOM.render(
	<Provider store={store}>
	<App />
	 </Provider>,
	document.getElementById("root")
);
