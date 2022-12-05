import { useEffect } from 'react';
import { LOGIN_CONSTANT } from '../store/reducers/authReducer';
import { useApiContext } from '../store/ApiContext';

const Init = ({ children }) => {
  const [, dispatch] = useApiContext();

  useEffect(() => {
    dispatch({ type: LOGIN_CONSTANT.GET_CURRENT_SESSION_REQUEST });
  }, []);
  return children;
};

export default Init;
