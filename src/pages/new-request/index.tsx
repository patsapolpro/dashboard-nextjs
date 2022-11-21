import type { NextPage } from 'next'
import { AdminLayout } from '@layout';
import {
    Card
  } from 'react-bootstrap'
import InputDID from 'src/components/Input/InputDID';
import Select from 'src/components/Select/Select';

const NewRequest: NextPage = () => {
      return (
        <AdminLayout>
          <Card>
            <Card.Header>New Request</Card.Header>
            <Card.Body>
              <div class="container text-center">
                <div class="row">
                  <InputDID />
                </div>
                <div class="row">
                  <Select />
                </div>
              </div>
              <br/>
              <div className="center">
                <button type="button" class="btn btn-danger bth-custom"><span class="cil-contrast btn-icon mr-2"></span>Cancel</button>
                <button type="button" class="btn btn-success bth-custom"><span class="cil-contrast btn-icon mr-2"></span>Send Request</button>
              </div>
            </Card.Body>
          </Card>
        </AdminLayout>  
      );
  }
  
  export default NewRequest;