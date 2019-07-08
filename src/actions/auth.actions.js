import { LOGIN, LOGOUT } from '../constants';
import { history } from '../App';

export const sendLoginRequest = (data, redirectLocation = '/') => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: {
      user: data,
      token: data.token,
    },
  });
  history.push(redirectLocation);
};

export const sendLogoutRequest = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  history.push('/login');
};
