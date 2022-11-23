export const UPLOAD_ACTION_TYPE = {
    SET_ISSUER: 'SET_ISSUER'
  };

const uploadReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case UPLOAD_ACTION_TYPE.SET_ISSUER:
      return {
        ...state,
        ...payload
      };
  
    default:
      return state;
  }
};

export default uploadReducer;
