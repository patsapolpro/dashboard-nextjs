import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from './Image';
import { JsonTable } from 'react-json-to-html';
import { useApiContext } from 'src/store/ApiContext';

const ShowImage = ({lists, images }) => {
	const [state, dispatch] = useApiContext();
	const { payload } = state.upload;

	return (
		<div className="container text-center">
		  <div className="row">
		    <div className="col-5">
				<div className="container2 backgroud-grey">
					<Image image={images} />
				</div>
		    </div>
			<div className="col-1">
				<div className="container2 centered">
					<FontAwesomeIcon icon={faRightLong} />
				</div>
			</div>
		    <div className="col-6">
				<div className="container2 backgroud-grey">
					<JsonTable json={payload} /> 
				</div>
		    </div>
		  </div>
		</div>
	)
};

export default ShowImage;
