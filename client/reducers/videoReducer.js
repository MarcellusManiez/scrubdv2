
const videoState = {
  currentVideo: null,
  userVideos: [],
  allVideos: [],
  fetchingVideos: false,
};

const videoReducer = (state = videoState, action) => {
  const newState = Object.assign({}, state);
  const video = action.payload;

  switch (action.type) {
    case 'ADD_VIDEO': {
      break;
    }
    case 'ADD_VIDEO_SUCCESS': {
      break;
    }
    case 'ADD_VIDEO_FAILED': {
      break;
    }
    case 'FETCH_VIDEO_REQUESTED': {
      newState.fetchingVideos = true;
      break;
    }
    case 'FETCH_VIDEO_SUCCESS': {
      newState.currentVideo = video;
      break;
    }
    case 'FETCH_VIDEO_FAILED': {
      break;
    }
    case 'FETCH_ALL_VIDEOS': {
      break;
    }
    case 'FETCH_ALL_VIDEOS_SUCCESS': {
      break;
    }
    case 'FETCH_ALL_VIDEOS_FAILED': {
      break;
    }
    default: return state;
  }
  return newState;
};

export default videoReducer;
