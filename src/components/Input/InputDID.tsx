import React from "react";

function InputDID() {
	return (
		<div className="dropbox">
            <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                    <span className="input-group-text group-text-custom" id="basic-addon1">DID: </span>
                </div>
                <input type="text" className="form-control" placeholder="Input DIDs"/>
            </div>
        </div>
	);
}

export default InputDID;
