
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import saga from 'redux-saga';
// import reducer from './reducers/index';
const middleware = applyMiddleware(thunk, saga);

