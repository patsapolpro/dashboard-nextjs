import React from "react";
import { useApiContext } from "src/store/ApiContext";
import { UPLOAD_ACTION_TYPE } from "src/store/reducers/uploadReducer";

function InputDID() {
    const [state, dispatch] = useApiContext();

    const setDIDs = (event: { target: { value: any; }; }) => {
        dispatch({
            type: UPLOAD_ACTION_TYPE.SET_DID,
            payload: {
             did: event.target.value
            }
        });
    }

	return (
		<div className="dropbox">
            <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                    <span className="input-group-text group-text-custom" id="basic-addon1">DID: </span>
                </div>
                <input type="text" className="form-control" placeholder="Input DIDs" onChange={setDIDs} />
            </div>
        </div>
	);
}

export default InputDID;
