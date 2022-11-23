import Router from 'next/router';
import { SSI_ACTION_TYPE } from '../reducers/ssiReducer';
import {CreateVC} from '../../services/ssi'
import { clearLocalStorage } from '../../libs/utility';
import { COGNITO_LOCAL_STORAGE_KEY, COGNITO_RESPONSE } from '../../services/constant';

export const ssiActionHandlers = {
  [SSI_ACTION_TYPE.SSI_SEND_REQUEST]: ({ dispatch }) => async (action) => {
    // const { upload } = action.payload;
    alert(JSON.stringify(action.payload));

    // dispatch({ type: LOADING_ACTION_TYPE.OPEN });

    const result = await CreateVC({});

    // dispatch({ type: LOADING_ACTION_TYPE.CLOSE });
    if (result) {
      dispatch({
        type: SSI_ACTION_TYPE.SSI_SEND_REQUEST_SUCCESS,
        payload: { result }
      });
    }
  }
};
