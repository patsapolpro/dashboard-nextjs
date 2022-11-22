import { AdminLayout } from '@layout';
import type { NextPage } from 'next'
import React, { useCallback, useState } from 'react';
import DropBox from '../components/DropBox/DropBox';
import ShowImage from '../components/ShowImage/ShowImage';
import InputDID from '../components/Input/InputDID';
import SelectIssuer from 'src/components/Select/SelectIssuer';

const fileTypes = ["JPEG", "PNG", "GIF"];

const Upload: NextPage = () => {

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
                  <SelectIssuer />
                  <InputDID />
                  <DropBox />
                  <div className="center">
                    <button type="button" class="btn btn-danger bth-custom"><span class="cil-contrast btn-icon mr-2"></span>Cancel</button>
                    <button type="button" class="btn btn-success bth-custom"><span class="cil-contrast btn-icon mr-2"></span>Upload</button>
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