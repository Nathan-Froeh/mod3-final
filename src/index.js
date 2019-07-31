import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {allReducers} from './Reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(allReducers, composeWithDevTools())


ReactDOM.render(
<Provider>
  <App store={store}/>
</Provider>

, document.getElementById('root'));


serviceWorker.unregister();
