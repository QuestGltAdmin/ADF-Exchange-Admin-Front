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
                <div className="user-all-tabs">
                  <Row>
                    <Col lg={4}>
                      <h3 className="common-page-heading">Stake Management</h3>
                    </Col>
                    <Col lg={3} className="ms-auto">
                      <InputGroup className="outer-input-search mt-0">
                        <Form.Control
                          placeholder="Search..."
                          name="OldPassword"
                        />
                        <InputGroup.Text className="search-space">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </InputGroup.Text>
                      </InputGroup>
                    </Col>
                    <Col lg={2}>
                      <a className="common-btn  " href="">
                        Add Stake Plan
                      </a>
                    </Col>
                  </Row>
                  <Tabs defaultActiveKey="tab1" className="mb-3">
                    <Tab eventKey="tab1" title="All">
                      <Row>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab2" title="Upcoming">
                      <Row>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab3" title="Running">
                      <Row>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab4" title="Expired">
                      <Row>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
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
