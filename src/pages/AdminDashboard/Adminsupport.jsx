import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/AdminLayout/AdminLayout";
import { Col, Container, InputGroup, Row, Table, Form, Dropdown } from "react-bootstrap";
import AdminGraph from "./AdminGraph";

export const Adminsupport = () => {

  return (
    <>
      <AdminLayout>
        <div>
          <Container fluid>
            <AdminGraph />
            <Row className="">
              <Col xxl="8" xl="7" md="7">
                <div className="shadow-admin-box mt-3">
                  <div className="head-same-all">
                    <h3>Support request</h3>
                    <h5>
                      47 Requests{" "}
                      <img
                        src="assets/images/admin/requests.png"
                        className="img-fluid"
                        alt="icon"
                      />
                    </h5>
                  </div>
                  <div className="filter-sort-sec">
                    <Row>
                      <Col md="8">
                        <InputGroup className="">
                          <Form.Control
                            placeholder="Search name,email or phone number"
                            name="OldPassword"
                          />
                          <InputGroup.Text className="search-space">
                            {/* <img
                              src="assets/images/admin/search.png"
                              className="img-fluid"
                              alt="icon"
                            /> */}
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <div className="set-height-table">
                      <div className="table-responsive">
                        <Table className="table-admin-all max-width-tab  table-mobile-view">
                          <thead>
                            <tr>
                              {/* <th>Sr. No</th> */}
                              <th>User</th>
                              <th>Subject</th>
                              <th>Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <br></br>
                          <tbody>

                            <tr>
                              {/* <td> <label className="head-mobile">S.No</label>1</td> */}
                              <td className="admin-table-img d-flex align-items-center">
                                <label className="head-mobile">User</label>
                                <div className="d-flex align-items-center gap-1">
                                  <img
                                    src="assets/images/admin/table-img.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />

                                  <div className="set-14   ">
                                    <div className=" set-700">
                                      rohit
                                    </div>
                                    <div className="set-10 grey text-left">
                                      rohit12@gamil.com
                                      <br></br>
                                      India +91 91234-65412
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="set-14 set-600">
                                <label className="head-mobile">Subject</label>Swap is not working</td>
                              <td className="set-10 set-600 grey text-left">
                                <label className="head-mobile">Date</label>
                                14:21 02th April 2023<br></br> 03:45 PM
                              </td>
                              <td
                                className="set-12 blue set-600"

                              >
                                <label className="head-mobile">Status</label>
                                Action Needed
                              </td>
                            </tr>
                            <tr>
                              {/* <td> <label className="head-mobile">S.No</label>1</td> */}
                              <td className="admin-table-img d-flex align-items-center">
                                <label className="head-mobile">User</label>
                                <div className="d-flex align-items-center gap-1">
                                  <img
                                    src="assets/images/admin/table-img.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />

                                  <div className="set-14   ">
                                    <div className=" set-700">
                                      rohit
                                    </div>
                                    <div className="set-10 grey text-left">
                                      rohit12@gamil.com
                                      <br></br>
                                      India +91 91234-65412
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="set-14 set-600">
                                <label className="head-mobile">Subject</label>Swap is not working</td>
                              <td className="set-10 set-600 grey text-left">
                                <label className="head-mobile">Date</label>
                                14:21 02th April 2023<br></br> 03:45 PM
                              </td>
                              <td
                                className="set-12 blue set-600"

                              >
                                <label className="head-mobile">Status</label>
                                Action Needed
                              </td>
                            </tr>
                            <tr>
                              {/* <td> <label className="head-mobile">S.No</label>1</td> */}
                              <td className="admin-table-img d-flex align-items-center">
                                <label className="head-mobile">User</label>
                                <div className="d-flex align-items-center gap-1">
                                  <img
                                    src="assets/images/admin/table-img.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />

                                  <div className="set-14   ">
                                    <div className=" set-700">
                                      rohit
                                    </div>
                                    <div className="set-10 grey text-left">
                                      rohit12@gamil.com
                                      <br></br>
                                      India +91 91234-65412
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="set-14 set-600">
                                <label className="head-mobile">Subject</label>Swap is not working</td>
                              <td className="set-10 set-600 grey text-left">
                                <label className="head-mobile">Date</label>
                                14:21 02th April 2023<br></br> 03:45 PM
                              </td>
                              <td
                                className="set-12 blue set-600"

                              >
                                <label className="head-mobile">Status</label>
                                Action Needed
                              </td>
                            </tr>
                            <tr>
                              {/* <td> <label className="head-mobile">S.No</label>1</td> */}
                              <td className="admin-table-img d-flex align-items-center">
                                <label className="head-mobile">User</label>
                                <div className="d-flex align-items-center gap-1">
                                  <img
                                    src="assets/images/admin/table-img.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />

                                  <div className="set-14   ">
                                    <div className=" set-700">
                                      rohit
                                    </div>
                                    <div className="set-10 grey text-left">
                                      rohit12@gamil.com
                                      <br></br>
                                      India +91 91234-65412
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="set-14 set-600">
                                <label className="head-mobile">Subject</label>Swap is not working</td>
                              <td className="set-10 set-600 grey text-left">
                                <label className="head-mobile">Date</label>
                                14:21 02th April 2023<br></br> 03:45 PM
                              </td>
                              <td
                                className="set-12 blue set-600"

                              >
                                <label className="head-mobile">Status</label>
                                Action Needed
                              </td>
                            </tr>
                            <tr>
                              {/* <td> <label className="head-mobile">S.No</label>1</td> */}
                              <td className="admin-table-img d-flex align-items-center">
                                <label className="head-mobile">User</label>
                                <div className="d-flex align-items-center gap-1">
                                  <img
                                    src="assets/images/admin/table-img.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />

                                  <div className="set-14   ">
                                    <div className=" set-700">
                                      rohit
                                    </div>
                                    <div className="set-10 grey text-left">
                                      rohit12@gamil.com
                                      <br></br>
                                      India +91 91234-65412
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="set-14 set-600">
                                <label className="head-mobile">Subject</label>Swap is not working</td>
                              <td className="set-10 set-600 grey text-left">
                                <label className="head-mobile">Date</label>
                                14:21 02th April 2023<br></br> 03:45 PM
                              </td>
                              <td
                                className="set-12 blue set-600"

                              >
                                <label className="head-mobile">Status</label>
                                Action Needed
                              </td>
                            </tr>
                            <tr>
                              {/* <td> <label className="head-mobile">S.No</label>1</td> */}
                              <td className="admin-table-img d-flex align-items-center">
                                <label className="head-mobile">User</label>
                                <div className="d-flex align-items-center gap-1">
                                  <img
                                    src="assets/images/admin/table-img.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />

                                  <div className="set-14   ">
                                    <div className=" set-700">
                                      rohit
                                    </div>
                                    <div className="set-10 grey text-left">
                                      rohit12@gamil.com
                                      <br></br>
                                      India +91 91234-65412
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="set-14 set-600">
                                <label className="head-mobile">Subject</label>Swap is not working</td>
                              <td className="set-10 set-600 grey text-left">
                                <label className="head-mobile">Date</label>
                                14:21 02th April 2023<br></br> 03:45 PM
                              </td>
                              <td
                                className="set-12 blue set-600"

                              >
                                <label className="head-mobile">Status</label>
                                Action Needed
                              </td>
                            </tr> 

                          </tbody>
                        </Table>
                      </div>
                      <div className="custom-pagination">
                        {/* <ReactPaginate
                          previousLabel={"<"}
                          nextLabel={">"}
                          pageCount={pageCountuser}
                          onPageChange={changeuserPage}
                          containerClassName={"paginationBttns"}
                          previousLinkClassName={"previousBttn"}
                          nextLinkClassName={"nextBttn"}
                          disabledClassName={"paginationDisabled"}
                          activeClassName={"paginationActive"}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xxl="4" xl="5" md="5">
                <div className="shadow-admin-box mt-3">
                  <div class="head-same-all">
                    <h3>Support Chat</h3>
                  </div>
                  <div className="outer-dropdown-support">
                    <div className="user-details">
                      <img
                        src="assets/images/admin/table-img.png"
                        className="img-fluid"
                        alt="icon"
                      />
                      <div className="set-14   ">
                        <div className=" set-700">Rohit Sharma</div>
                        <div className="set-10 grey text-start">
                          rohit12@gamil.com<br></br>
                          India +91 91234-65412
                        </div>
                      </div>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Action Needed
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <ul className="chat-list-main">
                      <li className="inner-chat-box">
                        <img src="assets/images/admin/table-img.png" alt="" />
                        <div>
                          <div className="chat-text">
                            <p>The Swap function is not working.</p>
                            <p>
                              <small>12:45</small>
                            </p>
                          </div>
                          <div className="chat-text">
                            <p>
                              Since this morning I am not able use the Swap
                              function. I have tried restarting the app several
                              times but it’s still the same. Please help me
                              resolve this problem so I can yse this app.
                            </p>
                            <p>
                              <small>12:45</small>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="inner-chat-box right-chat-list">
                        <div>
                          <div className="chat-text">
                            <p>
                              Hello, Rohit! <br /> I am very sorry for the
                              problem you are facing, me and May team will
                              resolve this issue as quick as we can.
                            </p>
                            <p>
                              <small>13:12</small>
                            </p>
                          </div>
                          <div className="chat-text">
                            <p>
                              Since this morning I am not able use the Swap
                              function. I have tried
                            </p>
                            <p>
                              <small>13:12</small>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="type-box-main">
                      <Form.Control type="text" placeholder="Type message..." />
                      <div className="d-flex align-items-center">
                        <a href="">
                          <img src="assets/images/admin/smile.png" alt="" />{" "}
                        </a>
                        <a href="">
                          <img src="assets/images/admin/upload.png" alt="" />{" "}
                        </a>
                        <button>
                          Send <img src="assets/images/admin/send.png" alt="" />
                        </button>
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
