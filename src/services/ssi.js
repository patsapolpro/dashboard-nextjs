import axios from 'axios';
import { SSI_ENPOINT } from '../services/constant';

export const CreateVC = async (data) => {

  const claims= []

  //pass body
  const jsonUniversity = {
    "university": "Kasetsart University",
    "faculty": "Computer Engineering",
    "gpa": "3.23",
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

const jsonHealth = {
  "test": "Kasetsart University",
  "faculty": "Computer Engineering",
}

  claims.push({
    type: (data.issuer == 'did:ethr:0x539:0x03435d66b7fcd3136c386360dc71aee69b344129a24a530e3bf9b25c3c0aa7d55d') ? 'Transcript' : 'Health Report',
    value: JSON.stringify(data.payload)
  });
  
  const bodyData = {
    issuer : data.issuer,
    subject : data.did,
    additionalType: (data.issuer == 'did:ethr:0x539:0x03435d66b7fcd3136c386360dc71aee69b344129a24a530e3bf9b25c3c0aa7d55d') ? 'Transcript' : 'Health Report', //Health Report, Transcript
    claims: claims
  }

  return await axios.post(`${SSI_ENPOINT.IDENTITY_BACKEND_ENDPOINT}/agent/subsidiary/vc`, bodyData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }).then(
    (response) => {
      console.log("test : " + JSON.stringify(response.data));
      return response.data
    },
    (error) => console.log(error)
  )
};