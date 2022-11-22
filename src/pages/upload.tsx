import { AdminLayout } from '@layout';
import type { NextPage } from 'next'
import React, { useCallback, useState } from 'react';
import DropBox from '../components/DropBox/DropBox';
import InputDID from '../components/Input/InputDID';
import SelectIssuer from 'src/components/Select/SelectIssuer';
import Modal from 'src/components/Modal';

import { MODAL_ACTION_TYPE, MODAL_TYPE } from '../store/reducers/modalReducer';
import { useApiContext } from 'src/store/ApiContext';

const fileTypes = ["JPEG", "PNG", "GIF"];

const Upload: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useApiContext();

    const upload = () => {
      setLoading(true);

      setTimeout(function() { 
        setLoading(false);
      }.bind(this), 2000)

      dispatch({
        type: MODAL_ACTION_TYPE.OPEN,
        payload: {
          type: MODAL_TYPE.ALERT
        }
      });
    }

    return (
      <AdminLayout>
        <div className="App">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <strong>Issue Credentials</strong>
                </div>
                <div className="card-body">
                  { 
			            	(loading) ? 
			            	  <div class="d-flex justify-content-center">
			            		<div class="spinner-border" role="status">
			            		  <span class="visually-hidden">Loading...</span>
			            		</div>
			            	  </div>
			            	: <></>
			            }
                  <Modal/>
                  <SelectIssuer />
                  <InputDID />
                  <DropBox />
                  <br/>
                  <div className="center">
                    <button type="button" class="btn btn-warning bth-custom"><span class="cil-contrast btn-icon mr-2"></span>Clear</button>
                    <button type="button" class="btn btn-success bth-custom" onClick={upload}>Upload</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>  
    );
}

export default Upload;