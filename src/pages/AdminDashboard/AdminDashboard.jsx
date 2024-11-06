import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/AdminLayout/AdminLayout";
import { Col, Row, Table, Tabs, Tab } from "react-bootstrap";
import AdminGraph from "./AdminGraph";

const AdminDashboard = () => {

  return (
    <div>
      <AdminLayout>
        <div>
          <AdminGraph />
          <Row>
            <Col md="6">
              <div className="shadow-admin-box mt-3">
                <div className="head-same-all">
                  <h4>Latest Transactions</h4>
                  <a href="/admin-transaction">View all</a>
                </div>
                <div className="">
                  <div className="table-responsive">
                    <Table className="table-admin-all min-width-tab table-mobile-view">
                      <thead>
                        <tr>
                          <th>User Name</th>
                          <th>Transaction type</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr>
                          <td className="set-12">
                            <label className="head-mobile">User Name</label>
                            rohit
                          </td>
                          <td className="set-12 light-black">
                            <label className="head-mobile">Transaction Type</label>
                            swap
                          </td>

                          <td className="set-12 light-black">
                            <label className="head-mobile">Amount</label>
                            23INA
                          </td>
                          <td className="set-10">
                            <label className="head-mobile">Date</label>
                            12:32<br />
                            6th April 2023
                          </td>
                          <td className="set-12 green">
                            <label className="head-mobile">Status</label>
                            Complete</td>
                        </tr> 

                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="shadow-admin-box mt-3">
                <div className="head-same-all">
                  <h4>Top Cryptocurrencies</h4>
                </div>
                <div className="">
                  <div className="table-responsive">
                    <Table className="table-admin-all min-width-tab  table-mobile-view">
                      <tbody>

                        <tr>
                          <td className="set-12 img-crypto">
                            <label className="head-mobile">Type</label>
                            <div>
                              <img
                                src="/assets/images/admin/binance.png"
                                className="img-fluid me-1"
                                alt="icon"
                              />
                              Binance
                            </div>
                          </td>
                          <td className="set-12">
                            <label className="head-mobile">User Name</label>
                            @rohit121</td>
                          <td className="set-12 grey">
                            <label className="head-mobile">Amount</label>
                            2,24,00INA
                          </td>
                          <td className="set-10">
                            <label className="head-mobile">Date</label>
                            12:32 <br />
                            6th April 2023
                            {/* <span style={{ color: "red" }}>
                                      {item?.priceChangePercent}%
                                    </span>
                                  
                                    <span style={{ color: "#03E787" }}>
                                      {item?.priceChangePercent}%
                                    </span> */}
                          </td>
                        </tr>

                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col md="8">
              <div className="shadow-admin-box mt-3">
                <Tabs
                  defaultActiveKey="transaction"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="transaction" title="Pending Transaction">
                    <div className="">
                      <div className="table-responsive">
                        <Table className="table-admin-all min-width-tab  table-mobile-view">
                          <thead>
                            <tr>
                              <th>User Name</th>
                              <th>Transaction type</th>
                              <th>Amount</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="set-14">
                                <label className="head-mobile">User Name</label>
                                User id
                              </td>
                              <td className="set-14">
                                <label className="head-mobile">Transaction type</label>
                                Transaction type
                              </td>
                              <td className="set-14">
                                <label className="head-mobile">Amount</label>
                                $65
                              </td>
                              <td className="set-14">
                                <label className="head-mobile">Date</label>
                                23 November 2024
                              </td>
                              <td
                                className="set-14"
                              >
                                <label className="head-mobile">Status</label>
                                Time & Date
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="request" title="Pending Kyc Requests">
                    <div className="">
                      <div className="table-responsive">
                        <Table className="table-admin-all min-width-tab  table-mobile-view">
                          <thead>
                            <tr>
                              <th>User Name</th>
                              <th>Mobile Number</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>

                            <tr>
                              <td className="set-14">
                              <label className="head-mobile">User Name</label>
                                User id
                              </td>
                              <td className="set-14">
                              <label className="head-mobile">Mobile No.</label>
                                Transaction type
                              </td>
                              <td className="set-14">
                              <label className="head-mobile">Date</label>
                                23 November, 2023
                              </td>
                              <td className="set-14">
                              <label className="head-mobile">Status</label>
                                Active
                              </td>
                              <td
                                className="set-14"
                              >
                                 <label className="head-mobile">Time</label>
                                03:22 PM
                              </td>
                            </tr>

                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
            <Col md="4" className="d-flex">
              <div className="shadow-admin-box w-100 mt-3">
                <div className="head-same-all">
                  <h4>Support List</h4>
                </div>
                <div className="">
                  <div className="table-responsive">
                    <Table className="table-admin-all min-width-tab  table-mobile-view">
                      <thead>
                        <tr>
                          <th>User Name</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr>
                          <td className="set-14">
                          <label className="head-mobile">User Name</label>
                          User id</td>
                          <td className="set-14">
                          <label className="head-mobile">Date</label>
                            23 Nov, 2023
                          </td>
                          <td
                            className="set-14"

                          >
                             <label className="head-mobile">Status</label>
                            Active
                          </td>
                        </tr>

                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminDashboard;
