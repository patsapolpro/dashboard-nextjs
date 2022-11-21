import { COGNITO_CHALLENGE, COGNITO_RESPONSE } from '../../services/constant';

export const AUTH_STATE_KEY = {
  ID_TOKEN: 'idToken',
  STATUS: 'STATUS',
  ROLE: 'ROLE',
  EXPIRE_TIME: 'EXPIRE_TIME',
  COGNITO_USER: 'COGNITO_USER',
  EMAIL: 'EMAIL',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD'
};

export const AUTH_ACTION_TYPE = {
  SET_STATUS: 'AUTH/SET_STATUS',
  SET_STATE: 'AUTH/SET_STATE',
  REQUEST: 'AUTH/REQUEST',
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_ERROR: 'AUTH/LOGIN_ERROR',
  LOGOUT: 'AUTH/LOGOUT',
  LOGOUT_REQUEST: 'AUTH/LOGOUT_REQUEST',
  FORGOT_PASSWORD_REQUEST: 'AUTH/FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: 'AUTH/FORGOT_PASSWORD_SUCCESS',
  RESET_PASSWORD_REQUEST: 'AUTH/RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS: 'AUTH/RESET_PASSWORD_SUCCESS',
  GET_CURRENT_SESSION_REQUEST: 'AUTH/GET_CURRENT_SESSION_REQUEST',
  GET_CURRENT_SESSION_SUCCESS: 'AUTH/GET_CURRENT_SESSION_SUCCESS',
  GET_CURRENT_SESSION_FAILURE: 'AUTH/GET_CURRENT_SESSION_FAILURE',
  NEW_PASSWORD_REQUIRED: 'AUTH/NEW_PASSWORD_REQUIRED',
  NEW_PASSWORD_REQUEST: 'AUTH/NEW_PASSWORD_REQUEST',
  NEW_PASSWORD_SUCCESS: 'AUTH/NEW_PASSWORD_SUCCESS'
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.SET_STATE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    case AUTH_ACTION_TYPE.SET_STATUS:
      return {
        ...state,
        authStatus: action.payload
      };
    case AUTH_ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        authStatus: COGNITO_CHALLENGE.LOGIN_SUCCESS,
        ...action.payload
      };
    case AUTH_ACTION_TYPE.LOGOUT:
      return {
        authStatus: COGNITO_CHALLENGE.LOGOUT_SUCCESS
      };
    case AUTH_ACTION_TYPE.NEW_PASSWORD_REQUIRED:
      return {
        ...state,
        authStatus: COGNITO_CHALLENGE.NEW_PASSWORD_REQUIRED,
        cognitoUser: action.payload
      };
    case AUTH_ACTION_TYPE.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        authStatus: COGNITO_RESPONSE.FORGOT_PASSWORD,
        changePassword: false,
        email: action.payload
      };
    case AUTH_ACTION_TYPE.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: true,
        authStatus: null
      };
    case AUTH_ACTION_TYPE.NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        newPassword: true,
        authStatus: null,
        cognitoUser: null
      };
    default:
      return state;
  }
};

export default authReducer;
export const authStateSelector = (state, key) => state.auth[key];
