import { LOGIN, LOGOUT } from '../constants';

const initialState = {
  user: {},
  authenticated: false,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        authenticated: true,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        user: {},
        authenticated: false,
        token: null,
      };
    default:
      return state;
  }
};
