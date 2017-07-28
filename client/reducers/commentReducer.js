
import { reduceCommentsByTimestamp } from '../helperFunctions';

const commentState = {
  videoComments: {},
  currentComment: null,
  commentGraphData: [],
  fetchingComments: false,
  addingComment: false,
};

function commentReducer(state = commentState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'FETCH_COMMENTS_REQUESTED': {
      newState.fetchingComments = true;
      break;
    }

    case 'FETCH_COMMENTS_SUCCESS': {
      const fetchedComments = action.payload;
      newState.videoComments = reduceCommentsByTimestamp(fetchedComments);
      break;
    }

    case 'FETCH_COMMENTS_FAILED': {
      break;
    }

    case 'ADD_COMMENT_REQUESTED': {
      newState.addingComment = true;
      break;
    }
    case 'ADD_COMMENT_SUCCESS': {
      const comment = action.payload;
      const time = comment.comment_timestamp;
      let commentAtSpecificTime = newState.videoComments[time];

      newState.currentComment = comment;

      if (commentAtSpecificTime) {
        commentAtSpecificTime.unshift(comment);
      } else {
        commentAtSpecificTime = [comment];
      }

      newState.commentGraphData[time] = (newState.commentGraphData[time] || 0) + 1;
      break;
    }
    case 'ADD_COMMENT_FAILED': {
      break;
    }
    case 'UPDATE_CURRENT_COMMENT': {
      newState.currentComment = action.payload;
      break;
    }
    case 'UPDATE_CURRENT_COMMENT_FAILED': {
      console.error('Updating current comment failed');
      break;
    }
    default: return state;
  }
  return newState;
}

export default commentReducer;

