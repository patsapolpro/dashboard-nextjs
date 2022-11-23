import React from "react";

import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react';
import { useApiContext } from "src/store/ApiContext";
import { UPLOAD_ACTION_TYPE } from "src/store/reducers/uploadReducer";

const SelectIssuer = () => {
  const [state, dispatch] = useApiContext();

  const jsonUniversity = {
    "university": "Kasetsart University",
    "faculty": "Computer Engineering",
    "gpa": "3.66",
    "subject": [
      {
        "name": "Math 2",
        "grade": "4"
      },
      {
        "name": "Computer Networks",
        "grade": "3"
      },
      {
        "name": "Database",
        "grade": "3"
      },
      {
        "name": "Image Processing",
        "grade": "3"
      },
      {
        "name": "Numerical Method",
        "grade": "2"
      }
    ]
  }

  const jsonHealth = {
    "Name": "Ben MARUCHAI WATTANARUNGSON",
    "Weight": "100kg",
    "Height": "150cm",
    "HealthStatus": "Good Health",
    "HealthDetail": {
      "Neutrophil": 4.62,
      "Lymphocyte": 47.1,
      "Monocyte": 44.6,
      "Eosinophil": 5.6,
      "Basophil": 1.8
    }
  }

    const setIssuer = (event: { target: { value: any; }; }) => {
        dispatch({
            type: UPLOAD_ACTION_TYPE.SET_ISSUER,
            payload: {
             issuer: event.target.value,
             payload: (event.target.value == "did:ethr:0x539:0x03435d66b7fcd3136c386360dc71aee69b344129a24a530e3bf9b25c3c0aa7d55d") ? jsonUniversity : jsonHealth
            }
        });
    }


	return (
    
      <select class="form-select select-item-custom" aria-label="Default select example" onChange={setIssuer}>
        <option value="0">Select Issuer...</option>
        <option value="did:ethr:0x539:0x03435d66b7fcd3136c386360dc71aee69b344129a24a530e3bf9b25c3c0aa7d55d">(UNIVERSITY) did:ethr:0x539:0x03435d66b7fcd3136c380dc71aee69b344129a24a530e3bf9b25c3c0aa7d55d</option>
        <option value="did:ethr:0x539:0x03cf3685b9a233960a06534c828c619c28f1cba6e2e5af9a036cd582a295fda409">(HOSPITAL) did:ethr:0x539:0x03cf3685b9a233a06534c828c619c28f1cba6e2e5af9a036cd582a295fda409</option>
      </select>
	);
}

export default SelectIssuer;
