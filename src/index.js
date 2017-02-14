// To wire up redux we need:
// 1. Provider (react-redux)
// 2.createStore (redux)
// 3.reducers to createStore
// 4.make rootReducer and pass to store 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
const theStore = createStore(reducers);


ReactDOM.render(
	<Provider store={theStore} >
		<App />
	</Provider>,
	document.getElementById('root')
);
