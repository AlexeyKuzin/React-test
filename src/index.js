import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {todoApp} from './App';
import { createStore, applyMiddleware, compose } from '../node_modules/redux/src/index.js';


import * as serviceWorker from './serviceWorker';
//import { Provider } from '../node_modules/react-redux/src/index.js'

//let store = createStore(todoApp)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
