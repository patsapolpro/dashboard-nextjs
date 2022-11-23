import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useApiContext } from 'src/store/ApiContext';
import ShowImage from '../ShowImage/ShowImage';

const DropBox = (props) => {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [state, dispatch] = useApiContext();
	const { issuer } = state.upload;

	const onDrop = async (acceptedFiles) => {
		setLoading(true);

		setTimeout(function() { 
			setLoading(false);
		}.bind(this), 2000);

		// acceptedFiles.map((file, index) => {
		// 	const reader = new FileReader();

		// 	reader.onload = function (e) {
		// 		setImages((prevState) => [
		// 			...prevState,
		// 			{ id: index, src: e.target.result },
		// 		]);
		// 	};

		// 	reader.readAsDataURL(file);
		// 	return file;
		// });

		if(issuer == "did:ethr:0x539:0x03435d66b7fcd3136c386360dc71aee69b344129a24a530e3bf9b25c3c0aa7d55d") {
			setImages("/assets/img/doc/transcript.jpeg")
		} else {
			setImages("/assets/img/doc/medical_report.png")
		}
	}

	const {
		getRootProps,
		getInputProps,
		acceptedFiles,
		open,
		isDragAccept,
		isFocused,
		isDragReject,
	} = useDropzone({
		accept: 'image/*',
		onDrop,
		noClick: true,
		noKeyboard: true,
	});    

	const lists = acceptedFiles.map((list) => (
		<li key={list.path}>
			{list.path} - {list.size} bytes
		</li>
	));  

	return (
		<>
			{ 
				(loading) ? 
				  <div class="d-flex justify-content-center">
					<div class="spinner-border" role="status">
					  <span class="visually-hidden">Loading...</span>
					</div>
				  </div>
				: <></>
			}
			{
				(!loading && images.length == 0) ?
				<section className="dropbox">
					<div
						className="dropbox-style dropbox"
						{...getRootProps({ isDragAccept, isFocused, isDragReject })}>
						<input {...getInputProps()} />
						<p>Choose a file or drag it here</p>
						<button type="button" className="btn btn-dark" onClick={open}>
							Click to select file
						</button>
					</div>
				</section>
				: <></>
			}
			{ 
				(!loading && images.length > 0) ? <ShowImage images={images} lists={lists} /> : <></>
			}
			{/* <br></br>
			<aside>
				<h4>Detail</h4>
				<p>{lists}</p>
			</aside> */}
		</>
	);
}

export default DropBox;
