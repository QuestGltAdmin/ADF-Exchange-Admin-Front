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

const AdminStakes = () => {
  return (
    <>
      <AdminLayout>
        <div>
          <Container fluid>
            <Row className="">
              <Col md="12">
                <h3 className="common-page-heading">Stake Management</h3>
                <div className="user-all-tabs">
                  <Row>
                    <Col lg={3}>
                    <InputGroup className="outer-input-search mt-3">
                    <Form.Control placeholder="Search..." name="OldPassword" />
                    <InputGroup.Text className="search-space">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </InputGroup.Text>
                  </InputGroup>
                    </Col>
                  </Row>
                  <Tabs defaultActiveKey="tab1" className="mb-3">
                    <Tab eventKey="tab1" title="All">
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
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>Sort By</Dropdown.Toggle>

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
                                <Dropdown className="dropdwon-border-box">
                                  <Dropdown.Toggle>Show</Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                      1 - 25
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      25 - 50
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      50 - 75
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      75 - 100
                                    </Dropdown.Item>
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
                                <th>Tittle</th>
                                <th>
                                  <span className="d-flex">
                                    Amount Invested{" "}
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
                                    Payout Amount{" "}
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
                                <th>Duration</th>
                                <th>Interest Rate</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>BTC</td>
                                <td className="">1.00 BTC</td>
                                <td className="">2.00 BTC</td>

                                <td className="">140 Days</td>

                                <td>12%</td>

                                <td>12 March 2025</td>
                                <td>12 March 2025</td>
                                <td>
                                  <span className="text-green">Active</span>
                                </td>
                              </tr>

                              {/* <tr>
                                                        <td colSpan={9} className="text-center">
                                                        No Data Found
                                                        </td>
                                                    </tr> */}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="tab2" title="Upcoming">
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
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>Sort By</Dropdown.Toggle>

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
                                <Dropdown className="dropdwon-border-box">
                                  <Dropdown.Toggle>Show</Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                      1 - 25
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      25 - 50
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      50 - 75
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      75 - 100
                                    </Dropdown.Item>
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
                                <th>Coin</th>
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
                                    Available Balance{" "}
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
                                <th>Total Balance</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>S.No 1</td>
                                <td className="admin-table-img">
                                  <img
                                    src="/assets/images/admin/table-img.png"
                                    className="img-fluid"
                                    alt="coin icon"
                                  />
                                </td>
                                <td className="">ETH</td>
                                <td className="">$1200</td>

                                <td className="">$1200</td>
                              </tr>

                              {/* <tr>
                                                        <td colSpan={5} className="text-center">
                                                        No Data Found
                                                        </td>
                                                    </tr> */}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="tab3" title="Running">
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
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>Sort By</Dropdown.Toggle>

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
                                <Dropdown className="dropdwon-border-box">
                                  <Dropdown.Toggle>Show</Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                      1 - 25
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      25 - 50
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      50 - 75
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      75 - 100
                                    </Dropdown.Item>
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
                                <th>Tittle</th>
                                <th>
                                  <span className="d-flex">
                                    Amount Invested{" "}
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
                                    Payout Amount{" "}
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
                                <th>Duration</th>
                                <th>Interest Rate</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>BTC</td>
                                <td className="">1.00 BTC</td>
                                <td className="">2.00 BTC</td>

                                <td className="">140 Days</td>

                                <td>12%</td>

                                <td>12 March 2025</td>
                                <td>12 March 2025</td>
                                <td>
                                  <span className="text-green">Active</span>
                                </td>
                              </tr>

                              {/* <tr>
                                                        <td colSpan={9} className="text-center">
                                                        No Data Found
                                                        </td>
                                                    </tr> */}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="tab3" title="Expired">
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
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>Sort By</Dropdown.Toggle>

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
                                <Dropdown className="dropdwon-border-box">
                                  <Dropdown.Toggle>Show</Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                      1 - 25
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      25 - 50
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      50 - 75
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      75 - 100
                                    </Dropdown.Item>
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
                                <th>Tittle</th>
                                <th>
                                  <span className="d-flex">
                                    Amount Invested{" "}
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
                                    Payout Amount{" "}
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
                                <th>Duration</th>
                                <th>Interest Rate</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>BTC</td>
                                <td className="">1.00 BTC</td>
                                <td className="">2.00 BTC</td>

                                <td className="">140 Days</td>

                                <td>12%</td>

                                <td>12 March 2025</td>
                                <td>12 March 2025</td>
                                <td>
                                  <span className="text-green">Active</span>
                                </td>
                              </tr>

                              {/* <tr>
                                                        <td colSpan={9} className="text-center">
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
export default AdminStakes;
