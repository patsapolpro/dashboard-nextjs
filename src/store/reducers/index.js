import authReducer from './authReducer';

export const initialState = {
  loading: {
    loading: false
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
  auth: authReducer
});

export default appReducers;
