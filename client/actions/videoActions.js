
import axios from 'axios';
import { fetchComments } from './commentActions';


export function fetchVideoInfo(videoID) {
  return (dispatch) => {
    dispatch({ type: 'FETCH_VIDEO_REQUESTED' });
    return axios.get(`/api/getVideo/${videoID}`)
      .then((video) => {
        dispatch({ type: 'FETCH_VIDEO_SUCCESS', payload: video.data });
      })
      .catch(err => dispatch({ type: 'FETCH_VIDEO_FAILED', payload: err }));
  };
}

export function fetchVideoWithComments(videoID) {
  return dispatch => Promise.all([
    dispatch(fetchComments(videoID)),
    dispatch(fetchVideoInfo(videoID)),
  ])
    .catch(err => console.error('fetchVideoWithComments threw the error:', err));
}

//  TODO: create action to fetch all videos

// TODO: create action to fetch videos based on popularity/ most recently added
