import { AdminLayout } from '@layout';
import type { NextPage } from 'next'
import React, { useCallback, useState } from 'react';
import DropBox from '../components/DropBox/DropBox';
import ShowImage from '../components/ShowImage/ShowImage';
import InputDID from '../components/Input/InputDID';

const fileTypes = ["JPEG", "PNG", "GIF"];

const Upload: NextPage = () => {
  const [images, setImages] = useState([]);

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
                    <button type="button" class="btn btn-danger bth-custom"><span class="cil-contrast btn-icon mr-2"></span>Cancel</button>
                    <button type="button" class="btn btn-success bth-custom"><span class="cil-contrast btn-icon mr-2"></span>Upload</button>
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