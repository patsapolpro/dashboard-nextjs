export const AUTH_STATE_KEY = {
  ID_TOKEN: 'idToken',
  STATUS: 'STATUS',
  ROLE: 'ROLE',
  EXPIRE_TIME: 'EXPIRE_TIME',
  COGNITO_USER: 'COGNITO_USER',
  EMAIL: 'EMAIL',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD'
};

export const LOGIN_CONSTANT = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  FORCE_CHANGE_PASSWORD: 'FORCE_CHANGE_PASSWORD',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  SET_STATE: 'SET_STATE',
  SET_STATUS: 'SET_STATUS',
  LOGOUT: 'LOGOUT',
  GET_CURRENT_SESSION_REQUEST: 'GET_CURRENT_SESSION_REQUEST'
};

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_CONSTANT.SET_STATE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    case LOGIN_CONSTANT.SET_STATUS:
      return {
        ...state,
        authStatus: action.payload
      };
    case LOGIN_CONSTANT.LOGIN_SUCCESS:
      return {
        ...state,
        authStatus: LOGIN_CONSTANT.LOGIN_SUCCESS,
        ...action.payload,
      }
    case LOGIN_CONSTANT.LOGOUT:
      return {
        ...state,
        authStatus: LOGIN_CONSTANT.LOGOUT
      };
    default:
      return state;
  }
};

export default authReducer;
export const authStateSelector = (state, key) => state.auth[key];
