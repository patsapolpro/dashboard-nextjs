export const UPLOAD_ACTION_TYPE = {
    SET_ISSUER: 'SET_ISSUER',
    SET_DID: 'SET_DID',
    SET_PAYLOAD: 'SET_PAYLOAD'
  };

const uploadReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case UPLOAD_ACTION_TYPE.SET_ISSUER:
        return {
          ...state,
          ...payload
        };
    case UPLOAD_ACTION_TYPE.SET_DID:
        return {
          ...state,
          ...payload
        }
    case UPLOAD_ACTION_TYPE.SET_PAYLOAD:
        return {
          ...state,
          ...payload
        }
    default:
      return state;
  }
};

export default uploadReducer;
