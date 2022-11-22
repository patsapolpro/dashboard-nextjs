import type { NextPage } from 'next'
import Router from 'next/router'
import { AdminLayout } from '@layout';
import {
    Card, Dropdown, Table, Form, Button, InputGroup
  } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEllipsisVertical, faSort, faSortDown, faSortUp,
  } from '@fortawesome/free-solid-svg-icons'

const Request: NextPage = () => {

  const handleNewRequest = () => {
    return Router.push('/new-request')  
  };

      return (
        <AdminLayout>
          <Card>
            <Card.Header>Request List</Card.Header>
            <Card.Body>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="search credentials"
                  aria-label="Search Credentials"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Search
                </Button>
              </InputGroup> 
              <button type="button" className="btn btn-primary" onClick={handleNewRequest}>New Request</button>
              <br/>
              <br/>
              <Table responsive bordered hover>
                <thead className="bg-light">
                  <tr>
                    <th>Request ID</th>
                    <th>DIDs (Decentralized Identifiers)</th>
                    <th>User</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                          <td>Request-1</td>
                          <td>did:ethr:0x539:0x026cfc6233f81f5d18b8ad60c97958fa1681d11fdd316abb8c679e2db057f8dd55</td>
                          <td>Transcript</td>
                          <td>
                            <Dropdown align="end">
                              <Dropdown.Toggle
                                as="button"
                                bsPrefix="btn"
                                className="btn-link rounded-0 text-black-50 shadow-none p-0"
                                id={`action-request-01`}
                              >
                                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                <Dropdown.Item
                                  className="text-danger"
                                  href="#/action-3"
                                >
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                        <tr>
                          <td>Request-2</td>
                          <td>did:ethr:0x539:0x026cfc6233f81f5d18b8ad60c97958fa1681d11fdd316abb8c679e2db057f8dd55</td>
                          <td>Internship Certificate</td>
                          <td>
                          <Dropdown align="end">
                              <Dropdown.Toggle
                                as="button"
                                bsPrefix="btn"
                                className="btn-link rounded-0 text-black-50 shadow-none p-0"
                                id={`action-request-01`}
                              >
                                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                <Dropdown.Item
                                  className="text-danger"
                                  href="#/action-3"
                                >
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            </td>
                        </tr>
                        <tr>
                          <td>Request-3</td>
                          <td>did:ethr:0x539:0x026cfc6233f81f5d18b8ad60c97958fa1681d11fdd316abb8c679e2db057f8dd55</td>
                          <td>Graduation Certificate</td>
                          <td>
                          <Dropdown align="end">
                              <Dropdown.Toggle
                                as="button"
                                bsPrefix="btn"
                                className="btn-link rounded-0 text-black-50 shadow-none p-0"
                                id={`action-request-01`}
                              >
                                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                <Dropdown.Item
                                  className="text-danger"
                                  href="#/action-3"
                                >
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            </td>
                        </tr>
                    </tbody>
              </Table>
            </Card.Body>
          </Card>
        </AdminLayout>  
      );
  }
  
  export default Request;