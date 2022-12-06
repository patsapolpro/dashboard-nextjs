import { createContext, useContext } from 'react';
import { dispatcher } from '../store/actions';
import { useReducerAsync } from 'use-reducer-async';

const ApiContext = createContext();

const AppWrapper = ({ reducer, initialState = {}, children }) => {
  const [state, dispatch] = useReducerAsync(reducer, initialState, dispatcher);
  const memoize = [state, dispatch];

  return <ApiContext.Provider value={memoize}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => useContext(ApiContext);

export default AppWrapper;

