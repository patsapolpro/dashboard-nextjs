import React from "react";

import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';

const SelectIssuer = () => {
	return (
      <select class="form-select select-item-custom" aria-label="Default select example">
        <option value="0">Select Issuer...</option>
        <option value="did:ethr:0x539:0x03435d66b7fcd3136c386360dc71aee69b344129a24a530e3bf9b25c3c0aa7d55d">(UNIVERSITY) did:ethr:0x539:0x03435d66b7fcd3136c380dc71aee69b344129a24a530e3bf9b25c3c0aa7d55d</option>
        <option value="did:ethr:0x539:0x03cf3685b9a233960a06534c828c619c28f1cba6e2e5af9a036cd582a295fda409">(HOSPITAL) did:ethr:0x539:0x03cf3685b9a233a06534c828c619c28f1cba6e2e5af9a036cd582a295fda409</option>
      </select>
	);
}

export default SelectIssuer;
