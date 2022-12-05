import Router from 'next/router';
import { SSI_ACTION_TYPE } from '../reducers/ssiReducer';
import {CreateVC} from '../../services/ssi'
import { clearLocalStorage } from '../../libs/utility';
import { COGNITO_LOCAL_STORAGE_KEY, COGNITO_RESPONSE } from '../../constant/auth-constant';

export const ssiActionHandlers = {
  [SSI_ACTION_TYPE.SSI_SEND_REQUEST]: ({ dispatch }) => async (action) => {
    const result = await CreateVC(action.payload);

    if (result) {
      dispatch({
        type: SSI_ACTION_TYPE.SSI_SEND_REQUEST_SUCCESS,
        payload: { result }
      });
    }
  }
};
