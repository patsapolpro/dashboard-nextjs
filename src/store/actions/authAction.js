import Router from 'next/router';
import { AUTH_ACTION_TYPE } from '../reducers/authReducer';
import { clearLocalStorage } from '../../libs/utility';
import { COGNITO_LOCAL_STORAGE_KEY, COGNITO_RESPONSE } from '../../services/constant';

export const asyncActionHandlers = {

  [AUTH_ACTION_TYPE.GET_CURRENT_SESSION_REQUEST]: ({ dispatch }) => async () => {
    dispatch({ type: LOADING_ACTION_TYPE.OPEN });
    const idToken = await currentSession();

    dispatch({ type: LOADING_ACTION_TYPE.CLOSE });
    if (idToken.payload) {
      const {
        email: userEmail,
        'custom:role': role,
        'custom:vendor_id': vendorId,
        'custom:vendor_name': vendorName
      } = idToken.payload;

      dispatch({
        type: AUTH_ACTION_TYPE.LOGIN_SUCCESS,
        payload: { userEmail, role, vendorId, vendorName }
      });
    } else {
      dispatch({ type: AUTH_ACTION_TYPE.LOGOUT });
    }
  },
  [AUTH_ACTION_TYPE.LOGIN_REQUEST]: ({ dispatch }) => async (action) => {
    const { username, password } = action.payload;
    dispatch({ type: LOADING_ACTION_TYPE.OPEN });
    const { token } = await signIn({
      username,
      password
    });
    dispatch({ type: LOADING_ACTION_TYPE.CLOSE });
    if (token) {
      dispatch({
        type: AUTH_ACTION_TYPE.LOGIN_SUCCESS,
        payload: { token }
      });
    }
  },
  [AUTH_ACTION_TYPE.LOGOUT_REQUEST]: ({ dispatch }) => async (action) => {
    dispatch({ type: LOADING_ACTION_TYPE.OPEN });
    await signOut();
    dispatch({ type: LOADING_ACTION_TYPE.CLOSE });
    dispatch({ type: AUTH_ACTION_TYPE.LOGOUT });
  }
};
