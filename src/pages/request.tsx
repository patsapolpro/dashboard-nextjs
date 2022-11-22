import type { NextPage } from 'next'
import { AdminLayout } from '@layout';
import {
    Card, Dropdown, Table, Form, Button, InputGroup
  } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEllipsisVertical, faSort, faSortDown, faSortUp,
  } from '@fortawesome/free-solid-svg-icons'

const Request: NextPage = () => {
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
              <button type="button" className="btn btn-dark" href="/new-request">New Request</button>
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
                          <td>Request-123</td>
                          <td>did-1</td>
                          <td>User DID</td>
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
                          <td>Request-456</td>
                          <td>did-2</td>
                          <td>User DID</td>
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
                          <td>Request-789</td>
                          <td>did-3</td>
                          <td>User DID</td>
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