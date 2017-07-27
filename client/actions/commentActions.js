import axios from 'axios';

export function addComment(comment, videoID) {
  return ((dispatch) => {
    axios.post(`/api/addComment/${videoID}`, { comment })
      .then((comments) => {
        dispatch('ADD_COMMENT_SUCCESS', comments);
      });
  });
}

export function fetchComments(videoID) {
  return dispatch => axios.get(`/api/getVideoComments/${videoID}`)
    .then((comments) => {
      dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: comments.data });
    })
    .catch(err => dispatch('FETCH_COMMENTS_FAILED', err));
}

