import React from "react";

import Select from 'react-select'

const MultipleSelect = () => {
    const options = [
        { value: 'Transcript', label: 'Transcript (ใบแสดงผลการศึกษา)' },
        { value: 'Internship Certificate', label: 'Graduation certificate (ใบจบการศึกษา)' },
        { value: 'Medical Certificate', label: 'Medical Certificate (ใบรับรองแพทย์)' }
      ]
      

	return (
      <Select
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select dropbox"
          classNamePrefix="select"
        />
	);
}

export default MultipleSelect;
