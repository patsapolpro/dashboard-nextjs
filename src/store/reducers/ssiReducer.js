import { COGNITO_CHALLENGE, COGNITO_RESPONSE } from '../../services/constant';

export const SSI_ACTION_TYPE = {
  SSI_SEND_REQUEST: 'SSI_SEND_REQUEST',
  SSI_SEND_REQUEST_SUCCESS: 'SSI_SEND_REQUEST_SUCCESS',
  SSI_SEND_REQUEST_FAILS: 'SSI_SEND_REQUEST_FAILS'
};

const ssiReducer = (state, action) => {
  switch (action.type) {
    case SSI_ACTION_TYPE.SSI_SEND_REQUEST_SUCCESS:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
  
    default:
      return state;
  }
};

export default ssiReducer;
export const ssiStateSelector = (state, key) => state.auth[key];
