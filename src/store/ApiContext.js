import React, { createContext } from 'react';
import { dispatcher } from './actions';
import { useReducerAsync } from 'use-reducer-async';

const apiContext = createContext();

const ApiContext = ({ reducer, initialState = {}, children }) => {
  const [state, dispatch] = useReducerAsync(reducer, initialState, dispatcher);
  const memoize = [state, dispatch];

  return <apiContext.Provider value={memoize}>{children}</apiContext.Provider>;
};

export const useApiContext = () => React.useContext(apiContext);

export default ApiContext;
