export const LOADING_ACTION_TYPE = {
  OPEN: 'LOADING/OPEN',
  CLOSE: 'LOADING/CLOSE',
  SET_STATE: 'LOADING/SET_STATE'
};

export const LOADING_STATE_KEY = {
  LOADING: 'loading'
};

const loadingReducer = (state, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case LOADING_ACTION_TYPE.OPEN: {
      return {
        loading: true
      };
    }
    case LOADING_ACTION_TYPE.CLOSE: {
      return {
        loading: false
      };
    }
    case LOADING_ACTION_TYPE.SET_STATE:
      return {
        ...state,
        [payload.key]: payload.value
      };
    default:
      return state;
  }
};

export default loadingReducer;
