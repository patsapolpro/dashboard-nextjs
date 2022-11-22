import { AdminLayout } from '@layout';
import type { NextPage } from 'next'
import React, { useCallback, useState } from 'react';
import DropBox from '../components/DropBox/DropBox';
import ShowImage from '../components/ShowImage/ShowImage';
import InputDID from '../components/Input/InputDID';
import { SSI_ACTION_TYPE } from 'src/store/reducers/ssiReducer';
import { useApiContext } from 'src/store/ApiContext';

const fileTypes = ["JPEG", "PNG", "GIF"];

const Upload: NextPage = () => {
  const [images, setImages] = useState([]);
  const [state, dispatch] = useApiContext();
  
	const onDrop = useCallback((acceptedFiles) => {
		acceptedFiles.map((file, index) => {
			const reader = new FileReader();

			reader.onload = function (e) {
				setImages((prevState) => [
					...prevState,
					{ id: index, src: e.target.result },
				]);
			};
			reader.readAsDataURL(file);
			return file;
		});
	}, []);

  const onCreateVC = async () => {

    console.log("request Create VC")
    dispatch({
      type: SSI_ACTION_TYPE.SSI_SEND_REQUEST,
      payload: { firstNamne : 'Napisit' }
    });
    
  };

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
                  <InputDID />
                  <DropBox onDrop={onDrop} />
                  <div className="center">
                    <button type="button" className="btn btn-danger bth-custom"><span className="cil-contrast btn-icon mr-2"></span>Cancel</button>
                    <button onClick={onCreateVC} type="button" className="btn btn-success bth-custom"><span className="cil-contrast btn-icon mr-2"></span>Send Request</button>
                  </div>
                  {/* <ShowImage images={images} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>  
    );
}

export default Upload;
