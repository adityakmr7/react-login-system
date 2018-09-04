import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
<BrowserRouter>
  <Provider store= { store }>
    <App />
  </Provider>
</BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
