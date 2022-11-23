import { AdminLayout } from '@layout';
import type { NextPage } from 'next'
import React, { useCallback, useState } from 'react';
import DropBox from '../components/DropBox/DropBox';
import InputDID from '../components/Input/InputDID';
import SelectIssuer from '../components/Select/SelectIssuer';
import Modal from 'src/components/Modal';

import { MODAL_ACTION_TYPE, MODAL_TYPE } from '../store/reducers/modalReducer';
import { SSI_ACTION_TYPE } from 'src/store/reducers/ssiReducer';
import { useApiContext } from 'src/store/ApiContext';
import Router from "next/router";

const fileTypes = ["JPEG", "PNG", "GIF"];

const Upload: NextPage = () => {
    const [state, dispatch] = useApiContext();
    const { issuer, did } = state.upload;

    const upload = () => { 
      if(issuer && did) {
        dispatch({
          type: MODAL_ACTION_TYPE.OPEN,
          payload: {
            type: MODAL_TYPE.ALERT
          }
        });
      } else {
        alert("Please Input")
      }
    }

    const json = {
      "university": "Kasetsart University",
      "faculty": "Computer Engineering",
      "gpa": "3.66",
      "subject": [
        {
          "name": "Math 2",
          "grade": "4"
        },
        {
          "name": "Computer Networks",
          "grade": "3"
        },
        {
          "name": "Database",
          "grade": "3"
        },
        {
          "name": "Image Processing",
          "grade": "3"
        },
        {
          "name": "Numerical Method",
          "grade": "2"
        }
      ]
    }

    const reload = () => {
      Router.reload();
    }

    return ( 
      <AdminLayout>
        <div className="App">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <strong>ISSUER: Issue Credentials</strong>
                </div>
                <div className="card-body">
                  <Modal json={json}/>
                  <SelectIssuer />
                  <InputDID />
                  <DropBox json={json}/>
                  <br/>
                  <div className="center">
                    <button type="button" class="btn btn-warning bth-custom" onClick={reload}>Clear</button>
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
