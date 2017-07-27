
const commentState = {
  videoComments: [],
  currentComment: null,
};

function commentReducer(state = commentState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'FETCH_COMMENTS': {
      break;
    }
    case 'FETCH_COMMENTS_SUCCESS': {
      newState.videoComments = action.payload;
      break;
    }
    case 'FETCH_COMMENTS_FAILED': {
      break;
    }
    case 'ADD_COMMENTS': {
      newState.comments.push(action.payload);
      break;
    }
    case 'ADD_COMMENTS_SUCCESS': {
      break;
    }
    case 'ADD_COMMENTS_FAILED': {
      break;
    }
    default: return state;
  }
  return newState;
}

export default commentReducer;

