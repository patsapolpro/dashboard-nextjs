import type { NextPage } from 'next'
import { AdminLayout } from '@layout';
import {
    Card
  } from 'react-bootstrap'
import InputDID from 'src/components/Input/InputDID';
import MultipleSelect from 'src/components/Select/MultipleSelect';
import Router from 'next/router';
import { useApiContext } from 'src/store/ApiContext';
import { MODAL_ACTION_TYPE, MODAL_TYPE } from 'src/store/reducers/modalReducer';
import Modal from 'src/components/Modal';

const NewRequest: NextPage = () => {
  const [state, dispatch] = useApiContext();

  const request = () => {
    dispatch({
      type: MODAL_ACTION_TYPE.OPEN,
      payload: {
        type: MODAL_TYPE.ALERT
      }
    });
  }

  const json = {
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

  const reload = () => {
    Router.reload();
  }

      return (
        <AdminLayout>
          <Card>
            <Card.Header>New Request</Card.Header>
            <Card.Body>
              <Modal json={json}/>
              <div className="container text-center">
                <div className="row">
                  <InputDID />
                </div>
                <div className="row">
                  <MultipleSelect /> 
                </div>
              </div>
              <br/>
              <div className="center">
                <button type="button" class="btn btn-warning bth-custom" onClick={reload}>Clear</button>
                <button type="button" class="btn btn-success bth-custom" onClick={request}>Send Request</button>
              </div>
            </Card.Body>
          </Card>
        </AdminLayout>  
      );
  }
  
  export default NewRequest;