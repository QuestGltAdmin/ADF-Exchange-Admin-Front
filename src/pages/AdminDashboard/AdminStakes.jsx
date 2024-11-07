import React, { useEffect, useState } from "react";
import AdminLayout from "../../Components/AdminLayout/AdminLayout";
import { Col, Container, InputGroup, Row, Table, Form } from "react-bootstrap";
import Chart from "react-google-charts";

const AdminStakes = () => {

  // stake graph//
  const stakedata = [
    [
      "",
      `March Data`,
      `Feb Data`,
      `April Data`,
    ],
    [10, 20, 10, 20],
    [20, 30, 15, 25],
    [38, 35, 38, 30],
  ];

  const stakeoption = {
    title: "",
    legend: "none",
    backgroundColor: '#212023',  
    colors:  ["#E07A00", "#fba338", "#f3bd7c"],
    vAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2"},
      baselineColor: "#AEAEB2",
    },
    hAxis: {
      gridlines: {
        color: "transparent",
      },
      textStyle: { color: "#AEAEB2"},
      baselineColor: "#AEAEB2",
    },
  };
  //========================= end of code =========================//

  return (
    <>
      <AdminLayout>
        <div>
          <Container fluid>
            {/* {GraphData == undefined ? (
              <div>
                <div className="round-loader-container">
                  <IphoneSpinner />
                </div>
              </div>
            ) : ( */}
            <Row>
              <Col xl={4} lg="6" md="6" className="d-flex ">
                <div className="dashboard-admin-box mt-3 w-100">
                  <Row>
                    <Col lg={5} sm="5" >
                      <div className="stake-heading-same mb-3">
                        <h3 className="mt-0">Stakes</h3>
                      </div>
                      <div>
                        <h5>Stakes</h5>
                        <h2>12,345</h2>
                        <h5>Total Stakes</h5>
                        <h3>23,433</h3>
                      </div>
                    </Col>
                    <Col lg={7} sm="7" >
                      <div className="graph-heading">
                        <div className="month-color-box stakes-column">
                          <p className="first-line">
                            <span></span> February Data
                          </p>
                          <p className="sec-line">
                            <span></span> March Data
                          </p>
                          <p className="third-line">
                            <span></span>
                            April Data
                          </p>
                        </div>
                      </div>
                      <div>
                        <Chart
                          chartType="LineChart"
                          width="100%"
                          height="150px"
                          data={stakedata}
                          options={stakeoption}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xl={4} lg="12" md="6"  sm="6" className="order-responsive d-flex align-self-stretch">
                <div className="shadow-admin-box mt-3 " style={{width:'-webkit-fill-available'}}>
                  <div class="head-same-all mb-3">
                    <h3>Top Staking</h3>
                  </div>
                  <div className="">
                    <div className="table-responsive">
                      
                      <Table className="table-admin-all min-width-tab stake-table table-mobile-view">
                        <thead>
                          <tr>
                            <th>Token</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Participates</th>
                            <th>Interest</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>

                          <tr>
                            <td className="">
                            <label className="head-mobile">Token</label> 
                              <img src="assets/images/admin/bitcoin.png" className="img-fluid" alt="bitcoin" /></td>
                            <td className="set-12">
                            <label className="head-mobile">Name</label>Bitcoin</td>
                            <td className="set-12"> <label className="head-mobile">Amount</label>5.121 ETH</td>
                            <td className="set-12"> <label className="head-mobile">Participants</label>2000</td>
                            <td className="set-12"> <label className="head-mobile">Interest</label>14%</td>
                            <td className="set-12"> <label className="head-mobile">Status</label>Active</td>
                          </tr>

                          <tr>
                            <td className="">
                            <label className="head-mobile">Token</label> 
                              <img src="assets/images/admin/bitcoin.png" className="img-fluid" alt="bitcoin" /></td>
                            <td className="set-12">
                            <label className="head-mobile">Name</label>Bitcoin</td>
                            <td className="set-12"> <label className="head-mobile">Amount</label>5.121 ETH</td>
                            <td className="set-12"> <label className="head-mobile">Participants</label>2000</td>
                            <td className="set-12"> <label className="head-mobile">Interest</label>14%</td>
                            <td className="set-12"> <label className="head-mobile">Status</label>Active</td>
                          </tr>

                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={4} lg="6" md="6" className="d-flex">
                <div className="shadow-admin-box stake-rule-box mt-3 w-100">
                  <div class="head-same-all">
                    <h3>Staking Rules</h3>
                  </div>
                  <Row>
                    <Col lg={6} md="6">
                      <Form.Group className="mb-2">
                        <Form.Label>Minimum Principal Amount</Form.Label>
                        <Form.Control type="text" placeholder="$ 2,000 USD" />
                      </Form.Group>
                    </Col>
                    <Col lg={6} md="6">
                      <Form.Group className="mb-2">
                        <Form.Label>Minimum Principal Amount</Form.Label>
                        <Form.Control type="text" placeholder="$ 2,000 USD" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={10}>
                      <Form.Group className="mb-3">
                        <Form.Label>Terms</Form.Label>
                        <div className="group-with-btn">
                          <Form.Control
                            type="text"
                            placeholder="30 Days, 60 Days, 90 Days"
                          />
                          <button>
                            <img
                              src="assets/images/admin/plus-btn.png"
                              alt=""
                            />
                          </button>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={10}>
                      <Form.Group className="mb-2">
                        <Form.Label>Interest Rates %</Form.Label>
                        <div className="group-with-btn">
                          <Form.Control
                            type="text"
                            placeholder="9, 10, 11, 12, 13, 14"
                          />
                          <button>
                            <img
                              src="assets/images/admin/plus-btn.png"
                              alt=""
                            />
                          </button>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>
           
              <Col  xl="12" lg="12" md="6" sm="6" className="order-responsive-2">
                <div className="shadow-admin-box mt-3">
                  <div className="head-same-all">
                    <h3>Stakes List</h3>
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
                        <Table className="table-admin-all max-width-tab table-mobile-view ">
                          <thead>
                            <tr>
                              <th>S No.</th>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Credentials</th>
                              <th>Token</th>
                              <th>Principal Amount</th>
                              <th>Term</th>
                              <th>Transaction ID</th>
                              <th>Interest Rate</th>
                              <th>Payout Amount</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <br></br>
                          <tbody>

                            <tr>
                              <td>
                              <label className="head-mobile">S.No</label>1
                              </td>
                              <td className="admin-table-img">
                              <label className="head-mobile">Image</label>
                                <img
                                  src="assets/images/admin/table-img.png"
                                  className="img-fluid"
                                  alt="icon"
                                />

                              </td>
                              <td className="set-14   ">
                              <label className="head-mobile">Name</label>
                              <div>
                                <div className=" set-700">
                                  rohit
                                </div>
                                <div className="set-10 set-600 text-left grey">
                                  14:21 02th April 2023
                                </div>
                                </div>
                              </td>
                              <td className="set-10 grey text-left">
                              <label className="head-mobile">Credentials</label>
                              <div>

                                rohit12@gamil.com
                                <br></br>
                                India +91 91234-65412
                              </div>
                              </td>
                              <td className="set-10 set-600 text-center">
                              <label className="head-mobile">Token</label>
                              <div>

                              <img
                                  src="assets/images/admin/binance.png"
                                  className="img-fluid"
                                  alt="icon"
                                  /> <br></br>
                                Binance
                                  </div>
                              </td>
                              <td className="set-10 set-600">
                              <label className="head-mobile">Principal Amount</label>
                                5.121 ETH
                              </td>
                              <td className="set-10 set-600">
                              <label className="head-mobile">Term</label>
                                90 Days
                              </td>
                              <td className="set-12 set-600">
                              <label className="head-mobile">Transaction ID</label>
                                12sfsa
                              </td>
                              <td className="set-12 set-600">
                              <label className="head-mobile">Interest Rate</label>
                                11%
                              </td>
                              <td className="set-12 set-600">
                              <label className="head-mobile">Payout Amount</label>
                                5.910 ETH
                              </td>

                              <td
                                className="set-12 green set-600"
                              >
                                <label className="head-mobile">Status</label>
                                Active
                              </td>
                            </tr>
                            {/* );
                                })
                            ) : (
                              <tr>
                                <td colSpan={11} className="text-center">
                                  No Data Found
                                </td>
                              </tr>
                            )} */}
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

export default AdminStakes;
