import { useDropzone } from 'react-dropzone';
import ShowImage from '../ShowImage/ShowImage';

const DropBox = () => {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);

	const onDrop = async (acceptedFiles) => {
		setLoading(true);

		setTimeout(function() { 
			setLoading(false);
		}.bind(this), 2000)

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
	}

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
				(!loading && images.length > 0) ? <ShowImage images={images} /> : <></>
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
