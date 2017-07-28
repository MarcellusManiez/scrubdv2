
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import saga from 'redux-saga';
import rootReducer from './reducers/index';
// import commentReducer from './reducers/commentReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk, logger)));


export default store;
