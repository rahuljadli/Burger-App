import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Burgerreducer from './Store/Reducer/BurgerReducer';
import thunk from 'redux-thunk';
import OrderReducer from './Store/Reducer/order'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({burger:Burgerreducer,order:OrderReducer})
const store=createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  )

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter><App /></BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
