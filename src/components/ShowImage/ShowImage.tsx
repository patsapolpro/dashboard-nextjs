import Image from './Image';

const ShowImage = ({ images }) => {
	const show = (image) => {
		return <Image image={image} />;
	};

	return (
		<div className="container text-center">
		  <div className="row">
		    <div className="col">
				<div className="container2">{images.map(show)}</div>
		    </div>
		    <div className="col">
				<div className="container2">Test</div>
		    </div>
		  </div>
		</div>
	)
};

export default ShowImage;
