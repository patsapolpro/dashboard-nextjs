export const LOADING_ACTION_TYPE = {
  OPEN: 'LOADING/OPEN',
  CLOSE: 'LOADING/CLOSE',
  SET_STATE: 'LOADING/SET_STATE'
};

export const LOADING_STATE_KEY = {
  LOADING: 'loading'
};

const loadingReducer = (state, action) => {
  switch (action.type) {
    case LOADING_ACTION_TYPE.OPEN: {
      return {
        ...state,
        loading: true
      }; 
    }
    case LOADING_ACTION_TYPE.CLOSE: {
      return {
        ...state,
        loading: false
      };
    }
    case LOADING_ACTION_TYPE.SET_STATE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
      return state;
  }
};

export default loadingReducer;

export const loadingCreators = {
  setLoadingState: (key, value) => ({
    type: LOADING_ACTION_TYPE.SET_STATE,
    payload: { key, value }
  })
};

export const loadingStateSelector = (state, key) => state.loading[key];
