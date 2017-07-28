import axios from 'axios';

export function addComment(comment) {
  return (dispatch) => {
    dispatch({ type: 'ADD_COMMENT_REQUESTED' });

    axios.post('/api/addComment', { comment })
      .then((res) => {
        console.log('After comment post', res);
        dispatch({
          type: 'ADD_COMMENT_SUCCESS',
          payload: res.data,
        });
      })
      .catch(err => dispatch('ADD_COMMENT_FAILED', err));
  };
}

export function fetchComments(videoID) {
  return (dispatch) => {
    dispatch({ type: 'FETCH_COMMENTS_REQUESTED' });

    axios.get(`/api/getVideoComments/${videoID}`)
      .then((comments) => {
        dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: comments.data });
      })
      .catch(err => dispatch('FETCH_COMMENTS_FAILED', err));
  };
}

export function updateCurrentComment(comment) {
  return {
    type: 'UPDATE_CURRENT_COMMENT',
    payload: comment,
  };
}

