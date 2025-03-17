import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/AdminLayout/AdminLayout";
import {
  Col,
  Container,
  InputGroup,
  Row,
  Table,
  Form,
  Dropdown,
  Tabs,
  Tab,
} from "react-bootstrap";

export const Adminsupport = () => {

  return (
    <>
      <AdminLayout>
        <div>
          <Container>
            <Row className="">
              <Col md="12">
                <h3 className="common-page-heading">Support Management</h3>
                <Row>
                  <Col lg="8">
                    <div className="outer-box-flex">
                      <div className="box-total-user limit-balance-box mb-2">
                        <h5>Total Support Tickets</h5>
                        <h3>
                          <span className="text-orange">24</span>
                        </h3>
                      </div>
                      <div className="box-total-user limit-balance-box mb-2">
                        <h5>Total Open Tickets</h5>
                        <h3>
                          <span className="text-orange">12</span>
                        </h3>
                      </div>
                      <div className="box-total-user limit-balance-box mb-2">
                        <h5>Total Closed Tickets</h5>
                        <h3>
                          <span className="text-orange">12</span>
                        </h3>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="shadow-admin-box mt-3">
                  <div className="filter-sort-sec">
                    <Row>
                      <Col md="12">
                        <h4 className="filter-icon">
                          <img src="assets/images/filter.png" alt="" /> Filter
                          <button className="common-btn ms-3">
                            Clear Filter
                          </button>
                        </h4>
                        <div className="filter-with-show-data">
                          <div className="outer-box-filter">
                            <InputGroup className="outer-input-search ">
                              <Form.Control
                                placeholder="Search..."
                                name="OldPassword"
                              />
                              <InputGroup.Text className="search-space">
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                ></i>
                              </InputGroup.Text>
                            </InputGroup>
                            <Dropdown className="dropdwon-border-box">
                              <Dropdown.Toggle>Sort By</Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#">Newest</Dropdown.Item>
                                <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Something else
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="dropdwon-border-box">
                              <Dropdown.Toggle>Sort By User</Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#">Newest</Dropdown.Item>
                                <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                <Dropdown.Item href="#">
                                  Something else
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <InputGroup className="outer-input-search date-search">
                              <Form.Control
                                placeholder="DD/MM/YYYY"
                                name="OldPassword"
                              />
                              <InputGroup.Text className="search-space ml-3">
                                From
                              </InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="outer-input-search date-search ">
                              <Form.Control
                                placeholder="DD/MM/YYYY"
                                name="OldPassword"
                              />
                              <InputGroup.Text className="search-space ml-3">
                                To
                              </InputGroup.Text>
                            </InputGroup>
                          </div>
                          <Dropdown className="dropdwon-border-box">
                            <Dropdown.Toggle>Show</Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#">1 - 25</Dropdown.Item>
                              <Dropdown.Item href="#">25 - 50</Dropdown.Item>
                              <Dropdown.Item href="#">50 - 75</Dropdown.Item>
                              <Dropdown.Item href="#">75 - 100</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <hr />
                  <div className="table-responsive">
                    <Table className="table-common-new">
                      <thead>
                        <tr>
                          <th>Sr. No</th>
                          <th>Name</th>
                          <th>
                            <span className="d-flex">
                              Name{" "}
                              <span className="arrow-filter">
                                <a href="" className="up">
                                  <img
                                    src="assets/images/arrow-up.png"
                                    alt=""
                                  />
                                </a>
                                <a className="down" href="">
                                  <img
                                    src="assets/images/arrow-down.png"
                                    alt=""
                                  />
                                </a>
                              </span>
                            </span>
                          </th>
                          <th>
                            <span className="d-flex">
                              {" "}
                              Email{" "}
                              <span className="arrow-filter">
                                <a href="" className="up">
                                  <img
                                    src="assets/images/arrow-up.png"
                                    alt=""
                                  />
                                </a>
                                <a className="down" href="">
                                  <img
                                    src="assets/images/arrow-down.png"
                                    alt=""
                                  />
                                </a>
                              </span>
                            </span>
                          </th>
                          <th>Phone Number</th>
                          <th>Subject</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>S.No 1</td>
                          <td className="admin-table-img">
                            <img
                              src="/assets/images/admin/table-img.png"
                              className="img-fluid"
                              alt="icon"
                            />
                          </td>
                          <td className="">User</td>
                          <td className="">user@gmail.com</td>

                          <td className="">+91 &nbsp; 8782772877</td>

                          

                          <td className="">LOrem Ipsum</td>
                          <td><span className="text-green">Open</span> </td>
                          <td>
                            <a href="" className="me-2"> View More</a>
                            <button className="common-btn table-btn red-btn">
                              Mark As Closed
                            </button>
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
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </AdminLayout>
    </>
  );
};
