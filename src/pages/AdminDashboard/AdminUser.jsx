import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/AdminLayout/AdminLayout";
import { Col, Container, InputGroup, Row, Table, Form } from "react-bootstrap";
import AdminGraph from "./AdminGraph";

const AdminUser = () => {

  return (
    <>
      <AdminLayout>
        <div>
          <Container fluid>
            <AdminGraph />
            <Row className="">
              <Col md="12">
                <div className="shadow-admin-box mt-3">
                  <div className="head-same-all">
                    <h3>Users Data</h3>
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
                        <Table className="table-admin-all max-width-tab table-mobile-view">
                          <thead>
                            <tr>
                              <th>Sr. No</th>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Phone Number</th>
                              <th>KYC</th>
                              <th>Wallet</th>
                              <th>Profile</th>
                            </tr>
                          </thead>
                          <br></br>
                          <tbody>

                            <tr>
                              <td>
                              <label className="head-mobile">S.No</label>1</td>
                              <td className="admin-table-img">

                              <label className="head-mobile">Image</label>
                                <img
                                  src="/assets/images/admin/table-img.png"
                                  className="img-fluid"
                                  alt="icon"
                                />
                              </td>
                              <td className="set-14 set-700">
                              <label className="head-mobile">Name</label>
                                User
                              </td>
                              <td className="set-12">
                              <label className="head-mobile">Email</label>user@gmail.com</td>

                              <td className="set-12">
                              <label className="head-mobile">Phone No.</label>
                                +91 &nbsp;{" "}
                                8782772877
                              </td>

                              <td>
                              <label className="head-mobile">KYC</label>
                                <div className="kyc-set">

                                  <div className="kyc-set ">
                                    <img
                                      src="assets/images/admin/tick.png"
                                      className="img-fluid"
                                      alt="icon"
                                    />
                                    <p className="set-14 set-600">
                                      KYC
                                    </p>
                                    <img
                                      style={{ cursor: "pointer" }}

                                      src="assets/images/admin/attach.png"
                                      className="img-fluid"
                                      alt="icon"
                                    />
                                  </div>

                                  {/* // <p className="set-14 set-600">
                                            //   INCOMPLETE
                                            // </p> */}
                                </div>
                              </td>

                              <td className="set-14 green set-700">
                              <label className="head-mobile">Wallet</label>
                                $434
                                USD
                              </td>
                              <td
                                className="set-14 blue set-600"
                                style={{ cursor: "pointer" }}

                              >
                                <label className="head-mobile">Profile</label>
                                View
                              </td>
                            </tr>

                            {/* <tr>
                                <td colSpan={8} className="text-center">
                                  No Data Found
                                </td>
                              </tr> */}
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
            </Row>
          </Container>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminUser;
