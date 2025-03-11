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

const AdminTransaction = () => {

  return (
    <>
    <AdminLayout>
      <div>
        <Container fluid>
          <Row className="">
            <Col md="12">
              <h3 className="common-page-heading">All Transactions</h3>
             
              <div className="user-all-tabs">
                <Tabs defaultActiveKey="tab1" className="mb-3">
                  <Tab eventKey="tab1" title="KYC">
                    <div className="shadow-admin-box mt-3">
                    <div className="user-profile-box kyc-profile-box">
                      <h4>
                        <span className="mb-3 d-block text-orange">Driving License</span>
                       
                          <img
                            src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/exchange_kyc_document/1740035554584-CB23-CARDjpg.webp"
                            className="img-fluid user-img"
                            alt="icon"
                          />
                      </h4>
                      <div>
                        <h4 className="text-orange">Arpit Patidar</h4>
                        <p className="mb-3">Date of Birth : 12/10/2002</p>
                        <p className="mb-3">Mobile No. : +91 2345678900</p>
                        <p className="mb-3">Landmark : -</p>
                        <p className="mb-3">City : Surat</p>
                        <p className="mb-3">State : gujarat</p>
                        <p className="mb-3">Country : India</p>
                        
                        
                      </div>
                    </div>
                    </div>
                  </Tab>
                  <Tab eventKey="tab2" title="Wallet Balance">
                    <div className="shadow-admin-box mt-3">
                      <div className="filter-sort-sec">
                        <Row>
                          <Col md="12">
                            <h4 className="filter-icon">
                              <img src="assets/images/filter.png" alt="" />{" "}
                              Filter
                            </h4>
                            <div className="filter-with-show-data">
                            <div className="outer-box-filter">
                                  
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i className="fa fa-search" aria-hidden="true"></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Sort By
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">Newest</Dropdown.Item>
                                      <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                      <Dropdown.Item href="#">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">Clear Filter</button>
                            </div>
                            <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Show
                                    </Dropdown.Toggle>

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
                              <th>KYC</th>
                              <th>Wallet</th>
                              <th>Profile</th>
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

                              <td>
                                <div className="kyc-set">
                                  KYC
                                  <img
                                    style={{ cursor: "pointer" }}
                                    src="assets/images/admin/attach.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </div>
                              </td>

                              <td className="">$434 USD</td>
                              <td>
                                <a href="">
                                  <i className="fa fa-eye"></i>
                                </a>
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
                  </Tab>
                  <Tab eventKey="tab3" title="Stakes">
                    <div className="shadow-admin-box mt-3">
                      <div className="filter-sort-sec">
                        <Row>
                          <Col md="12">
                            <h4 className="filter-icon">
                              <img src="assets/images/filter.png" alt="" />{" "}
                              Filter
                            </h4>
                            <div className="filter-with-show-data">
                            <div className="outer-box-filter">
                                  
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i className="fa fa-search" aria-hidden="true"></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Sort By
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">Newest</Dropdown.Item>
                                      <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                      <Dropdown.Item href="#">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">Clear Filter</button>
                            </div>
                            <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Show
                                    </Dropdown.Toggle>

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
                              <th>KYC</th>
                              <th>Wallet</th>
                              <th>Profile</th>
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

                              <td>
                                <div className="kyc-set">
                                  KYC
                                  <img
                                    style={{ cursor: "pointer" }}
                                    src="assets/images/admin/attach.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </div>
                              </td>

                              <td className="">$434 USD</td>
                              <td>
                                <a href="">
                                  <i className="fa fa-eye"></i>
                                </a>
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
                  </Tab>
                  <Tab eventKey="tab4" title="Deposit/Withdraw">
                    <div className="shadow-admin-box mt-3">
                      <div className="filter-sort-sec">
                        <Row>
                          <Col md="12">
                            <h4 className="filter-icon">
                              <img src="assets/images/filter.png" alt="" />{" "}
                              Filter
                            </h4>
                            <div className="filter-with-show-data">
                            <div className="outer-box-filter">
                                  
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i className="fa fa-search" aria-hidden="true"></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Sort By
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">Newest</Dropdown.Item>
                                      <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                      <Dropdown.Item href="#">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">Clear Filter</button>
                            </div>
                            <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Show
                                    </Dropdown.Toggle>

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
                              <th>KYC</th>
                              <th>Wallet</th>
                              <th>Profile</th>
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

                              <td>
                                <div className="kyc-set">
                                  KYC
                                  <img
                                    style={{ cursor: "pointer" }}
                                    src="assets/images/admin/attach.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </div>
                              </td>

                              <td className="">$434 USD</td>
                              <td>
                                <a href="">
                                  <i className="fa fa-eye"></i>
                                </a>
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
                  </Tab>
                  <Tab eventKey="tab5" title="Orders">
                    <div className="shadow-admin-box mt-3">
                      <div>
                        <Tabs
                          defaultActiveKey="ordertab1"
                          className="mb-3 mt-0"
                        >
                          <Tab eventKey="ordertab1" title="Open Order">
                            <div className="filter-sort-sec">
                              <Row>
                                <Col md="12">
                                  <h4 className="filter-icon">
                                    <img
                                      src="assets/images/filter.png"
                                      alt=""
                                    />{" "}
                                    Filter
                                  </h4>
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
                                      <Dropdown.Toggle>
                                        Sort By
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                          Newest
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                          Oldest
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                          Something else
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <button className="common-btn">
                                      Clear Filter
                                    </button>
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
                                    <th>KYC</th>
                                    <th>Wallet</th>
                                    <th>Profile</th>
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

                                    <td className="">
                                      +91 &nbsp; 8782772877
                                    </td>

                                    <td>
                                      <div className="kyc-set">
                                        KYC
                                        <img
                                          style={{ cursor: "pointer" }}
                                          src="assets/images/admin/attach.png"
                                          className="img-fluid"
                                          alt="icon"
                                        />
                                      </div>
                                    </td>

                                    <td className="">$434 USD</td>
                                    <td>
                                      <a href="">
                                        <i className="fa fa-eye"></i>
                                      </a>
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
                          </Tab>
                          <Tab eventKey="ordertab2" title="Order History">
                            <div className="filter-sort-sec">
                              <Row>
                                <Col md="12">
                                  <h4 className="filter-icon">
                                    <img
                                      src="assets/images/filter.png"
                                      alt=""
                                    />{" "}
                                    Filter
                                  </h4>
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
                                      <Dropdown.Toggle>
                                        Sort By
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                          Newest
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                          Oldest
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                          Something else
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <button className="common-btn">
                                      Clear Filter
                                    </button>
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
                                    <th>KYC</th>
                                    <th>Wallet</th>
                                    <th>Profile</th>
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

                                    <td className="">
                                      +91 &nbsp; 8782772877
                                    </td>

                                    <td>
                                      <div className="kyc-set">
                                        KYC
                                        <img
                                          style={{ cursor: "pointer" }}
                                          src="assets/images/admin/attach.png"
                                          className="img-fluid"
                                          alt="icon"
                                        />
                                      </div>
                                    </td>

                                    <td className="">$434 USD</td>
                                    <td>
                                      <a href="">
                                        <i className="fa fa-eye"></i>
                                      </a>
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
                          </Tab>
                          <Tab eventKey="ordertab3" title="Trade History">
                            <div className="filter-sort-sec">
                              <Row>
                                <Col md="12">
                                  <h4 className="filter-icon">
                                    <img
                                      src="assets/images/filter.png"
                                      alt=""
                                    />{" "}
                                    Filter
                                  </h4>
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
                                      <Dropdown.Toggle>
                                        Sort By
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
                                        <Dropdown.Item href="#">
                                          Newest
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                          Oldest
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                          Something else
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>
                                    <button className="common-btn">
                                      Clear Filter
                                    </button>
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
                                    <th>KYC</th>
                                    <th>Wallet</th>
                                    <th>Profile</th>
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

                                    <td className="">
                                      +91 &nbsp; 8782772877
                                    </td>

                                    <td>
                                      <div className="kyc-set">
                                        KYC
                                        <img
                                          style={{ cursor: "pointer" }}
                                          src="assets/images/admin/attach.png"
                                          className="img-fluid"
                                          alt="icon"
                                        />
                                      </div>
                                    </td>

                                    <td className="">$434 USD</td>
                                    <td>
                                      <a href="">
                                        <i className="fa fa-eye"></i>
                                      </a>
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
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="tab6" title="Refferal">
                    <div className="shadow-admin-box mt-3">
                      <div className="filter-sort-sec">
                        <Row>
                          <Col md="12">
                            <h4 className="filter-icon">
                              <img src="assets/images/filter.png" alt="" />{" "}
                              Filter
                            </h4>
                            <div className="filter-with-show-data">
                            <div className="outer-box-filter">
                                  
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i className="fa fa-search" aria-hidden="true"></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Sort By
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">Newest</Dropdown.Item>
                                      <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                      <Dropdown.Item href="#">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">Clear Filter</button>
                            </div>
                            <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Show
                                    </Dropdown.Toggle>

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
                              <th>KYC</th>
                              <th>Wallet</th>
                              <th>Profile</th>
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

                              <td>
                                <div className="kyc-set">
                                  KYC
                                  <img
                                    style={{ cursor: "pointer" }}
                                    src="assets/images/admin/attach.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </div>
                              </td>

                              <td className="">$434 USD</td>
                              <td>
                                <a href="">
                                  <i className="fa fa-eye"></i>
                                </a>
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
                  </Tab>
                  <Tab eventKey="tab7" title="Swap">
                    <div className="shadow-admin-box mt-3">
                      <div className="filter-sort-sec">
                        <Row>
                          <Col md="12">
                            <h4 className="filter-icon">
                              <img src="assets/images/filter.png" alt="" />{" "}
                              Filter
                            </h4>
                            <div className="filter-with-show-data">
                            <div className="outer-box-filter">
                                  
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i className="fa fa-search" aria-hidden="true"></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Sort By
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">Newest</Dropdown.Item>
                                      <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                      <Dropdown.Item href="#">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">Clear Filter</button>
                            </div>
                            <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Show
                                    </Dropdown.Toggle>

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
                              <th>KYC</th>
                              <th>Wallet</th>
                              <th>Profile</th>
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

                              <td>
                                <div className="kyc-set">
                                  KYC
                                  <img
                                    style={{ cursor: "pointer" }}
                                    src="assets/images/admin/attach.png"
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </div>
                              </td>

                              <td className="">$434 USD</td>
                              <td>
                                <a href="">
                                  <i className="fa fa-eye"></i>
                                </a>
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
                  </Tab>
                  <Tab eventKey="tab8" title="P2P">
                    <div className="shadow-admin-box mt-3">
                      <div className="filter-sort-sec">
                        <Row>
                          <Col md="12">
                            <h4 className="filter-icon">
                              <img src="assets/images/filter.png" alt="" />{" "}
                              Filter
                            </h4>
                            <div className="filter-with-show-data">
                            <div className="outer-box-filter">
                                  
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i className="fa fa-search" aria-hidden="true"></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Sort By
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">Newest</Dropdown.Item>
                                      <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                      <Dropdown.Item href="#">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">Clear Filter</button>
                            </div>
                            <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Show
                                    </Dropdown.Toggle>

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
                              
                              <th>
                                <span className="d-flex">
                                  Transfer Date{" "}
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
                              <th>Beneficiary Name</th>
                              
                              <th>Currency</th>
                              <th>
                              <span className="d-flex">
                                  Amount{" "}
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
                              <th>Status</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Feb 28, 2025 2:11 PM</td>
                              <td>Krishna Dobariya</td>
                              <td>USDT</td>
                              <td>1.000000</td>
                              <td className="text-green">Successs</td>
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
                  </Tab>
                </Tabs>
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
