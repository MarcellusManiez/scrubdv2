import { combineReducers } from 'redux';
import userReducer from './userReducer';
import commentReducer from './commentReducer';
import videoReducer from './videoReducer';


const rootReducer = combineReducers({
  videos: videoReducer,
  comments: commentReducer,
  user: userReducer,
});

export default rootReducer;

