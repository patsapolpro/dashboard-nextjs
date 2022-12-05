import { LOGIN_CONSTANT } from '../reducers/authReducer';
import { MODAL_ACTION_TYPE, MODAL_TYPE } from '../reducers/modalReducer';
import { LOADING_ACTION_TYPE } from '../reducers/loadingReducer';
import {
  signIn,
  currentSession
} from '../../services/auth';

export const asyncActionHandlers = {
  [LOGIN_CONSTANT.GET_CURRENT_SESSION_REQUEST]: ({ dispatch }) => async () => {
    dispatch({ type: LOADING_ACTION_TYPE.OPEN });
    const isSessionExpired = await currentSession();

    dispatch({ type: LOADING_ACTION_TYPE.CLOSE });
    if (isSessionExpired) {
      dispatch({
        type: LOGIN_CONSTANT.LOGIN_SUCCESS,
        payload: {  }
      });
    } else {
      dispatch({ type: LOGIN_CONSTANT.LOGOUT });
    }
  },
  [LOGIN_CONSTANT.LOGIN_REQUEST]: ({ dispatch }) => async (action) => {
    const { username, password } = action.payload;
    console.log(action.payload);
    dispatch({ type: LOADING_ACTION_TYPE.OPEN });
    const response = await signIn({
      username,
      password
    });
    dispatch({ type: LOADING_ACTION_TYPE.CLOSE });
    if (response && response.token) {
      dispatch({
        type: LOGIN_CONSTANT.LOGIN_SUCCESS,
        payload: { token }
      });
    } else {
      dispatch({
        type: MODAL_ACTION_TYPE.OPEN,
        payload: {
          type: MODAL_TYPE.ALERT,
          title: 'login-error-title',
          message: 'login-error-message'
        }
      });
    }
  }
};
