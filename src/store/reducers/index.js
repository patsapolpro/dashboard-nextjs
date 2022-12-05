import authReducer from './authReducer';
import modalReducer from './modalReducer';
import ssiReducer from './ssiReducer';
import uploadReducer from './uploadReducer';
import loadingReducer from './loadingReducer';

export const initialState = {
  loading: {
    loading: false
  },
  auth: {
    authStatus: null,
    username: null,
    password: null
  },
  modal: {
    isOpen: false,
    title: null,
    message: null,
    type: null,
    onConfirm: null,
    onCancel: null
  },
  upload: {
    issuer: "",
    did: "",
    payload: {}
  }
};

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action)
    }),
    state
  );
const appReducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  ssi: ssiReducer,
  upload: uploadReducer,
  loading: loadingReducer
});

export default appReducers;
