import Image from './Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { JsonTable } from 'react-json-to-html';

const ShowImage = ({ images }) => {
	const show = (image) => {
		return <Image image={image} />;
	};

	const json = {
		"university": "Kasetsart University",
		"faculty": "Computer Engineering",
		"gpa": "3.66",
		"subject": [
			{
				"name": "Calculus",
				"grade": "4"
			},
			{
				"name": "Computer Networks",
				"grade": "3"
			},
			{
				"name": "Introduction Database",
				"grade": "3"
			},
			{
				"name": "Digital Image Processing",
				"grade": "3"
			},
			{
				"name": "Numerical Method",
				"grade": "2"
			}
		]
	}
		
		

	return (
		<div className="container text-center">
		  <div className="row">
		    <div className="col-5">
				<div className="container2 backgroud-grey">{images.map(show)}</div>
		    </div>
			<div className="col-1">
				<div className="container2 centered">
					<FontAwesomeIcon icon={faRightLong} />
				</div>
			</div>
		    <div className="col-6">
				<div className="container2 backgroud-grey">
					<JsonTable json={json} />
				</div>
		    </div>
		  </div>
		</div>
	)
};

export default ShowImage;
