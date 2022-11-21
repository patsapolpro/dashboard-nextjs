import React from "react";

import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';

const Select = () => {
	return (
      <select class="form-select select-item-custom" aria-label="Default select example">
        <option value="0">Select User...</option>
        <option value="1">Transcript (ใบแสดงผลการศึกษา)</option>
        <option value="2">Internship Certificate (เอกสารรับรองการฝึกงาน)</option>
        <option value="3">Graduation certificate (ใบจบการศึกษา)</option>
      </select>
	);
}

export default Select;
