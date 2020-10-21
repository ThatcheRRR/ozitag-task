import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import '@babel/polyfill';
import { rootReducer } from './redux/rootReducer';
import App from './Components/App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const app = <Provider store = {store}>
    <App />
</Provider>

render(<App />, document.getElementById('root'));
