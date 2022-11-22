import React from "react";

function InputDID() {
	return (
		<div className="dropbox">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text group-text-custom" id="basic-addon1">DID: </span>
                </div>
                <input type="text" className="form-control" placeholder="Input DIDs" value="did:ethr:0x539:0x026cfc6233f81f5d18b8ad60c97958fa1681d11fdd316abb8c679e2db057f8dd55" />
            </div>
        </div>
	);
}

export default InputDID;
