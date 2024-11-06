import React, { useEffect } from "react";
import {
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import AdminLayout from "../../Components/AdminLayout/AdminLayout";

const AdminProfile = () => {
 
  return (
    <>
      <AdminLayout>
        <div>
          <Container fluid>
            <Row className="">
              <Col md="12">
                <div className="shadow-admin-box ">
                  <div className="kyc-edit-heading">
                    <h4>
                      <img src="assets/images/admin/arrow-left.png" alt="" />{" "}
                      User Information
                    </h4>
                    <div className="text-end">
                      <button className="table-btn red-btn">Delete</button>
                    </div>
                  </div>
                  <div className="profile-admin-sec remove-flex">
                    <Row className="align-items-center">
                      <Col md="2">
                        <div className="profile-detail mt-0">
                          <div>
                            <img
                              src="assets/images/admin/table-img.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md="10">
                        <div className=" stake-rule-box ">
                          <Row>
                            <Col lg={3} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Rohit Sharma"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={3} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Email id</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="rohit@gmail.com"
                                  readonly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={2} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="India +91"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={3} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="8574636273"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={3} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>KYC</Form.Label>
                                <InputGroup>
                                  <InputGroup.Text></InputGroup.Text>
                                  <Form.Control
                                    type="text"
                                    placeholder="KYC"
                                    readOnly
                                  />
                                  <InputGroup.Text>
                                    <img
                                      src="assets/images/admin/gallery.png"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </InputGroup.Text>
                                </InputGroup>
                              </Form.Group>
                            </Col>
                            <Col lg={3} md="6" sm="6">
                              <Form.Group className="mb-2 text-green-input">
                                <Form.Label>Wallet Balance ($)</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="$15,421 USD"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={2} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Account Status</Form.Label>
                                <InputGroup>
                                  <InputGroup.Text>
                                    <img
                                      src="assets/images/admin/active.png"
                                      className="img-fluid"
                                      alt=""
                                    />
                                  </InputGroup.Text>
                                  <Form.Control
                                    type="text"
                                    placeholder="Active"
                                    readOnly
                                  />
                                </InputGroup>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={3} md={6} sm={6}>
                              <Form.Group className="mb-2">
                                <Form.Label>
                                  Total Referral Earning ($)
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="$15,421 USD"
                                  readonly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={3} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Total Referral used</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="20"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="">
              <Col md="8">
                <div className="shadow-admin-box mt-3">
                  <div className="head-same-all">
                    <h3>Assets</h3>
                  </div>
                  <div>
                    <div className="set-min-height-table">
                      <div className="table-responsive">
                        <Table className="table-admin-all max-width-tab">
                          <thead>
                            <tr>
                              <th>Asset Type</th>
                              <th>Total Balance</th>
                              <th>Asset Value</th>
                              <th>Interest Earned</th>
                            </tr>
                          </thead>
                          <br></br>
                          <tbody>
                           
                                  <tr>
                                    <td className="admin-table-img d-flex align-items-center">
                                      <img
                                        src="assets/images/admin/binance.png"
                                        className="img-fluid small"
                                        alt="icon"
                                      />
                                      <div className="set-14   ">
                                        <div className=" set-700">
                                         Binance
                                        </div>
                                      </div>
                                    </td>
                                    <td className="set-12 green set-500">
                                    73.642 BNB
                                    </td>
                                    <td className="set-12  set-500">
                                    5.755%
                                    </td>
                                    <td className="set-12  set-500">
                                    9.45%
                                    </td>
                                  </tr>
                               
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="shadow-admin-box mt-3">
                  <div className="head-same-all">
                    <h3>Referral List</h3>
                  </div>
                  <div>
                    <div className="set-min-height-table">
                      <div className="table-responsive">
                        <Table className="table-admin-all max-width-tab stake-table">
                          <thead>
                            <tr>
                              <th>Referral To</th>
                              <th>Register date</th>
                              <th>Earned</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <br></br>
                          <tbody>
                           
                                  <tr>
                                    <td className="set-12  set-600">
                                      Admin
                                    </td>
                                    <td className="set-10  set-600 grey">
                                    02 April, 2023
                                    </td>
                                    <td className="set-10  set-600 grey">
                                    0.12 BTC
                                    </td>
                                    <td>
                                      <div className="status-set">
                                        <img
                                          src="assets/images/admin/active.png"
                                          className="img-fluid green"
                                          alt="icon"
                                        />
                                        <p className="set-10 set-600 mb-0">
                                          Active
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                               
                          </tbody>

                          <br></br>
                        </Table>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="">
              <Col md="8">
                <div className="shadow-admin-box mt-3">
                  <Tabs
                    defaultActiveKey="userkycdata"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="userkycdata" title="Users KYC Data">
                        {/* <div>
                          <p className="nodatacol">No data found</p>
                        </div> */}
                        <div className="">
                          <div className="documents">
                            <div className="document-img">
                              <h6>Front Image</h6>
                              <img
                                src="assets/images/admin/adhar-front.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="document-img">
                              <h6>Rear Image</h6>
                              <img
                                src="assets/images/admin/adhar-rear.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className=" stake-rule-box ">
                            <Row>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>First Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                      placeholder="Rohit"
                                    readOnly
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>Last Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Sharma"
                                    readonly
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>Date of Birth</Form.Label>
                                  <Form.Control
                                    type="text"
                                      placeholder="dd-mm-yyyy"
                                    readOnly
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>Country</Form.Label>
                                  <Form.Control
                                    type="text"
                                   placeholder="India"
                                    readOnly
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>Country Code</Form.Label>
                                  <Form.Control
                                    type="text"
                                     placeholder="India +91"
                                    readonly
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>Mobile Number</Form.Label>
                                  <Form.Control
                                    type="text"
                                     placeholder="91234-48273"
                                    readOnly
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>Landmark</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Lump sum"
                                    readOnly
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>City</Form.Label>
                                  <Form.Control
                                    type="text"
                                     placeholder="Indore"
                                    readonly
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>State</Form.Label>
                                  <Form.Control
                                    type="text"
                                   placeholder="Madhya Pradesh"
                                    readOnly
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>Document</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Lump sum"
                                    readOnly
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={4} md="6" sm="6">
                                <Form.Group className="mb-2">
                                  <Form.Label>Card Number</Form.Label>
                                  <Form.Control
                                    type="text"
                                   placeholder="Lump sum"
                                    readonly
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </div>
                        </div>
                    </Tab>
                  </Tabs>
                </div>
              </Col>
              <Col md="4">
                <div className="shadow-admin-box mt-3">
                  <div className="head-same-all">
                    <h3>Transactions</h3>
                  </div>
                  <div>
                    <div className="set-height-table">
                      <div className="table-responsive">
                        <Table className="table-admin-all max-width-tab">
                          <thead>
                            <tr>
                              <th>Type</th>
                              <th>Date & Time</th>
                              <th>From/To</th>
                              <th>From/To Amount</th>
                              <th></th>
                            </tr>
                          </thead>
                          <br></br>
                          <tbody>
                           
                                  <tr>
                                    <td className="set-10  set-600">
                                      Banking
                                    </td>
                                    <td className="set-10  set-600 grey">
                                    02 April 2023
                                    </td>
                                    <td>
                                      <div className="from-to">
                                        <img
                                          src="assets/images/admin/binance.png"
                                          className="img-fluid"
                                          alt="icon"
                                        />
                                        <img
                                          src="assets/images/admin/swap.png"
                                          className="img-fluid"
                                          alt="icon"
                                        />
                                        <img
                                          src="assets/images/admin/tron.png"
                                          className="img-fluid"
                                          alt="icon"
                                        />
                                      </div>
                                    </td>
                                    <td className="set-10  set-600 grey">
                                     $342 /{" "} $32  &nbsp; &nbsp;
                                     <a className="blue">View</a>
                                    
                                    </td>
                                  </tr>
                                
                          </tbody>
                        </Table>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminProfile;
