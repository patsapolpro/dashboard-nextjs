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
			<div className="col-2">
				<div className="container2 centered">
					<FontAwesomeIcon icon={faRightLong} />
				</div>
			</div>
		    <div className="col-5">
				<div className="container2 backgroud-grey">
					<JsonTable json={json} />
				</div>
		    </div>
		  </div>
		</div>
	)
};

export default ShowImage;
