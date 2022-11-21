import { useDropzone } from 'react-dropzone';

function DropBox({ onDrop }) {
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
			<section className="dropbox">
				<div
					className="dropbox-style dropbox"
					{...getRootProps({ isDragAccept, isFocused, isDragReject })}>
					<input {...getInputProps()} />
					<p>Drag 'n' drop some files here</p>
					<button type="button" className="btn btn-dark" onClick={open}>
						Click to select file
					</button>
				</div>
			</section>
			{/* <br></br>
			<aside>
				<h4>Detail</h4>
				<p>{lists}</p>
			</aside> */}
		</>
	);
}

export default DropBox;
