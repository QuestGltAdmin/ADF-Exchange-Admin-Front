import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/AdminLayout/AdminLayout";
import {
  Col,
  Container,
  InputGroup,
  Row,
  Table,
  Form,
  Modal,
  Button,
} from "react-bootstrap";
import AdminGraph from "./AdminGraph";

const AdminKyc = () => {

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
                    <h3>KYC Requests</h3>
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
                            // onKeyUp={(e) => handleSearch(e)}
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
                              <th>Sr. No</th>
                              <th>User</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Approve</th>
                              <th>Reject</th>
                              <th></th>
                            </tr>
                          </thead>
                          <br></br>
                          <tbody>
                           
                                    <tr>
                                      <td>
                                      <label className="head-mobile">S.No</label>1</td>
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
                                           Rohit Sharma
                                          </div>
                                          <div className="set-10 grey text-left">
                                          rohit12@gmail.com
                                            <br></br>
                                            India +91&nbsp;{" "}
                                            91234-65412
                                          </div>
                                        </div>
                                            </div>
                                      </td>

                                      <td className="set-10 set-600 grey text-left">
                                      <label className="head-mobile">Date</label>
                                      <div>

                                      02 April 2023<br></br> 03:45 PM 
                                      </div>
                                      </td>
                                      <td
                                        className="set-12 green set-600"
                                       
                                      >
                                         <label className="head-mobile">Status</label>
                                     Approved
                                      </td>
                                      <td className="set-12 set-600 text-left">
                                      <label className="head-mobile">Approve</label>
                                          <button
                                            className="table-btn green-btn"
                                          >
                                            Approve
                                          </button>
                                       
                                          {/* <button className="table-btn gray-btn">
                                            Approve
                                          </button> */}
                                      
                                      </td>
                                      <td className="set-12 set-600 text-left">
                                      <label className="head-mobile">Reject</label>
                                          <button
                                            className="table-btn red-btn"
                                            onClick={() => handleReject(item)}
                                          >
                                            Reject
                                          </button>
                                          {/* <button className="table-btn gray-btn">
                                            Reject
                                          </button> */}
                                      </td>
                                      <td
                                        className="set-12 blue set-600"
                                        style={{ cursor: "pointer" }}                                       
                                      >
                                         <label className="head-mobile">Action</label>
                                        View
                                      </td>
                                    </tr>
                                
                              {/* <tr>
                                <td colSpan={6} className="text-center">
                                  No Data Found
                                </td>
                              </tr> */}
                           
                          </tbody>
                        </Table>
                       
                      </div>
                      {/* <div className="custom-pagination">
                        <ReactPaginate
                          previousLabel={"<"}
                          nextLabel={">"}
                          pageCount={pageCountuser}
                          onPageChange={changeuserPage}
                          containerClassName={"paginationBttns"}
                          previousLinkClassName={"previousBttn"}
                          nextLinkClassName={"nextBttn"}
                          disabledClassName={"paginationDisabled"}
                          activeClassName={"paginationActive"}
                        />
                      </div> */}
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

export default AdminKyc;
