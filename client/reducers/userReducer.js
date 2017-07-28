

const userReducer = (state = { username: null, userID: null }, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'LOGIN_USER': {
      break;
    }
    case 'LOGIN_USER_SUCCESS': {
      break;
    }
    case 'LOGIN_USER_FAILED': {
      break;
    }
    case 'LOGOUT_USER': {
      break;
    }
    case 'LOGOUT_USER_SUCCESS': {
      break;
    }
    case 'LOGOUT_USER_FAILED': {
      break;
    }
    case 'CHECK_AUTH': {
      break;
    }
    case 'CHECK_AUTH_SUCCESS': {
      break;
    }
    case 'CHECK_AUTH_FAILED': {
      break;
    }
    default: return state;
  }
  return newState;
};

export default userReducer;
