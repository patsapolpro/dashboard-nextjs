import { CSpinner } from '@coreui/react';
import React from 'react';
import { useApiContext } from '../../../store/ApiContext';

export const Loading = () => {
  const [state] = useApiContext();
  const { loading } = state;
  if (loading.loading) {
    return (
      <>
        <div className="loading-default">
          <div className="icon-loading">
            <CSpinner color="info" />
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
