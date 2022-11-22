import axios from 'axios';
import { SSI_ENPOINT } from '../services/constant';

export const CreateVC = async (data) => {

  const claims= []

  claims.push({
    type: 'account',
    value: JSON.stringify(
      {
        "university": "Chula University",
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
    })
  });
  
  const bodyData = {
    issuer :"did:ethr:0x539:0x03435d66b7fcd3136c386360dc71aee69b344129a24a530e3bf9b25c3c0aa7d55d",
    subject : "did:ethr:0x539:0x026cfc6233f81f5d18b8ad60c97958fa1681d11fdd316abb8c679e2db057f8dd55",
    additionalType: 'Profile',
    claims: claims
  }

  try {
  const response = await axios.post(`${SSI_ENPOINT.IDENTITY_BACKEND_ENDPOINT}/agent/subsidiary/vc`, bodyData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  })  
  
  return response.data
  } catch (e) {
    return e;
  }
};