import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';

import App from './app';

import axios from 'axios';
window.axios = axios;

ReactDOM.render(
	<Provider store={store}>
<App />
</Provider>,
	document.getElementById('root')
);
