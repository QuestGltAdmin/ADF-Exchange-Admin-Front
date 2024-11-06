import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/AdminLayout/AdminLayout";
import { Col, Container, InputGroup, Row, Table, Form } from "react-bootstrap";
// import axiosMain from "../../http/axios/axios_main";
// import moment from "moment";
// import ReactPaginate from "react-paginate";
import AdminGraph from "./AdminGraph";

const AdminTransaction = () => {

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
                    <h3>Transactions</h3>
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
                              <th>S.No</th>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Credentials</th>
                              <th>Type</th>
                              <th>From</th>
                              <th>To</th>
                              <th>Transaction ID</th>
                              <th>From Amount</th>
                              <th>To Amount</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <br></br>
                          <tbody>

                            <tr>
                              <td>
                                <label className="head-mobile">S.No</label>  1
                              </td>
                              <td className="admin-table-img">
                                <label className="head-mobile">Image</label>
                                <img
                                  src="/assets/images/admin/table-img.png"
                                  className="img-fluid"
                                  alt="icon"
                                />

                              </td>
                              <td className="set-14   ">
                                <label className="head-mobile">Name</label>
                                <div className=" set-700">
                                  Rohit
                                </div>
                                <div className="set-10 set-600 text-left grey">
                                  uey
                                </div>
                              </td>
                              <td className="set-10 grey text-left">
                                <label className="head-mobile">Credentials</label>
                                ishitarathore@gmail.com
                                <br></br>+91 &nbsp;
                                8727367263
                              </td>
                              <td className="set-10 set-600 text-left">
                                <label className="head-mobile">Type</label>
                                Swap
                              </td>
                              <td className="set-10 set-600">
                                <label className="head-mobile">From</label>
                                91
                              </td>
                              <td className="set-10 set-600">
                                <label className="head-mobile">To</label>
                                jsdd
                              </td>
                              <td className="set-12 set-600">  <label className="head-mobile">Transaction ID</label>
                                dfsf                                      </td>
                              <td className="set-12 set-600">
                                <label className="head-mobile">From Amount</label>
                                fdfsdfsdf
                              </td>
                              <td className="set-12 set-600">
                                <label className="head-mobile"></label>To Amount
                                dsfsf
                              </td>
                              <td
                                className="set-12 blue set-600"
                              // style={{
                              //   color:
                              //     item?.status === "SUCCESS"
                              //       ? "#2bc92b"
                              //       : item?.status === "PENDING"
                              //       ? "red"
                              //       : item?.status === "CLOSED"
                              //       ? "red"
                              //       : "",
                              // }}
                              >
                                <label className="head-mobile">Status</label>
                                Success
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
            </Row>
          </Container>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminTransaction;
