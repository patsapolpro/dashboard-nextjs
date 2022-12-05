import { CSpinner } from '@coreui/react';
import React from 'react';
import { useApiContext } from '../../../store/ApiContext';

export const Loading = () => {
  const [state] = useApiContext();
  const { loading: { loading } } = state;
  if (loading) {
    return (
        <CSpinner color="light"/>
    );
  } else {
    return null;
  }
};
