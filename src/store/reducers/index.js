import authReducer from './authReducer';
import modalReducer from './modalReducer';

export const initialState = {
  loading: {
    loading: false
  },
  modal: {
    isOpen: false,
    title: null,
    message: null,
    type: null,
    onConfirm: null,
    onCancel: null
  },
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
});

export default appReducers;
