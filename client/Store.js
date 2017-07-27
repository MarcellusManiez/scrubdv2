
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import saga from 'redux-saga';
// import commentReducer from './reducers/commentReducer';
import rootReducer from './reducers/index';

const initialState = {
  videos: {
    currentVideo: null,
    userVideos: [],
    allVideos: [],
  },

  comments: {
    videoComments: [],
    currentComment: [],
  },

  user: {
    username: null,
    userID: null,
  },
};


const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(logger));


module.exports = { initialState, store };
