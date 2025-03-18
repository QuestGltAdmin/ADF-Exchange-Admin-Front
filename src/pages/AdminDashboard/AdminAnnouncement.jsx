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

export const AdminAnnouncement = () => {
  return (
    <>
      <AdminLayout>
        <div>
          <Container>
            <Row className="">
              <Col md="12">
                <h3 className="common-page-heading">Announcement Management</h3>
                <div className="user-all-tabs">
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
                  <Tabs defaultActiveKey="tab1" className="mb-3">
                    <Tab eventKey="tab1" title="Marquee">
                      <div className="shadow-admin-box mt-3">
                        <div className="text-end mb-3">
                          <a href="" className="common-btn">Add New Marquee</a>
                        </div>
                        <div className="table-responsive">
                          <Table className="table-common-new">
                            <thead>
                              <tr>
                                <th>Sr. No</th>
                                <th width="33%">Tittle</th>
                                <th>
                                  <span className="d-flex">
                                    Date{" "}
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
                               
                                <th>Link</th>
                                <th>Status</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>S.No 1</td>
                                
                                <td className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi blanditiis nisi veniam suscipit.</td>
                                
                                <td className="">20 Feb 2025</td>

                                <td>
                                 <a href=""><small>dfsfbsbtetelnkn</small></a>
                                </td>

                                <td className="">
                                  <div className="switch-to-lock mt-0">
                                          <Form.Check type="switch" label="Show" />
                                        </div>
                                </td>
                               
                              </tr>
                              <tr>
                                <td>S.No 1</td>
                                
                                <td className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi blanditiis nisi veniam suscipit.</td>
                                
                                <td className="">20 Feb 2025</td>

                                <td>
                                 <a href=""><small>dfsfbsbtetelnkn</small></a>
                                </td>

                                <td className="">
                                  <div className="switch-to-lock mt-0">
                                          <Form.Check type="switch" label="Show" />
                                        </div>
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

                    <Tab eventKey="tab2" title="Announcement">
                      <div className="shadow-admin-box mt-3">
                          <a href="">
                            <div className="outer-box-announcement">
                              <i class="fa fa-bullhorn text-orange" aria-hidden="true"></i>
                              <div>
                              <h5>SHIBAcoin (SHIBACOIN) Staking Event - 100,000,000 SHIBACOIN in Rewards</h5>
                              <p className="mb-0">February 17, 2025 at 15:30 (UTC+05:30)</p>
                              </div>
                            </div>
                          </a>
                          <a href="">
                          <div className="outer-box-announcement">
                             <i class="fa fa-bullhorn text-orange" aria-hidden="true"></i>
                             <div>
                             <h5>Easy Trading: ProBit Global’s New feature “Convert” with Zero Fees</h5>
                             <p className="mb-0">February 17, 2025 at 15:30 (UTC+05:30)</p>
                             </div>
                          </div>
                          </a>
                          <a href="">
                          <div className="outer-box-announcement">
                             <i class="fa fa-bullhorn text-orange" aria-hidden="true"></i>
                             <div>
                             <h5>Cryptohopper Trading Bots Now Available on ProBit Global</h5>
                             <p className="mb-0">February 17, 2025 at 15:30 (UTC+05:30)</p>
                             </div>
                          </div>
                          </a>
                         <a href="">
                         <div className="outer-box-announcement">
                             <i class="fa fa-bullhorn text-orange" aria-hidden="true"></i>
                             <div>
                             <h5>Vista Finance (VISTA) Trading Competition</h5>
                             <p className="mb-0">February 17, 2025 at 15:30 (UTC+05:30)</p>
                             </div>
                          </div>
                         </a>
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
