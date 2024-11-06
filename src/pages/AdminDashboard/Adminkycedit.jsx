import React, { useState } from "react";
import AdminLayout from "../../Components/AdminLayout/AdminLayout";
import { Col, Container, Row, Form } from "react-bootstrap";
// import "react-datepicker/dist/react-datepicker.css";

export const Adminkycedit = () => {
   return (
    <>
      <AdminLayout>
        
          <div>
            <Container fluid>
              <Row className="">
                <Col md="12">
                  <div className="shadow-admin-box ">
                    <div className="kyc-edit-heading">
                      <h4
                        // onClick={() => navigate("/admin-kyc")}
                        style={{ cursor: "pointer" }}
                      >
                        <img src="assets/images/admin/arrow-left.png" alt="" />{" "}
                        KYC Details
                      </h4>
                      <div>
                       
                          <button className="table-btn green-btn">
                            Approve
                          </button>
                          <button className="table-btn red-btn">
                            REJECTED
                          </button>
                          <button className="table-btn yellow-btn">
                            Pending
                          </button>
                      </div>
                    </div>
                    <div className="profile-admin-sec">
                      <div className="profile-detail">
                        <div>
                         
                            <img
                              src="assets/images/admin/table-img.png"
                              className="img-fluid"
                              alt="icon"
                            />
                        
                        </div>
                        <div className="detail-name">
                          <h4>Rohit</h4>
                          <p>rohit@gmail.com</p>
                          <p>8477636776</p>
                        </div>
                      </div>
                      <div className="date-sec">
                        <p>  14:21 02th April 2023</p>
                      </div>
                    </div>
                    <Row className="justify-content-center">
                      <Col lg="8" md="10">
                        <div className="documents">
                          <div className="document-img">
                            <h6>Front Image</h6>
                            <img
                              src="assets/images/admin/adhar-front.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="document-img">
                            <h6>Rear Image</h6>
                            <img
                              src="assets/images/admin/adhar-rear.png"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className=" stake-rule-box ">
                          <Row>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Rohit"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Sharma"
                                  readonly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="dd-mm-yyyy"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Landmark</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Lump sum"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Indore"
                                  readonly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Madhya Pradesh"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="India"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Country Code</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="India +91"
                                  readonly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="91234-48273"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Document</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Lump sum"
                                  readOnly
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4} md="6" sm="6">
                              <Form.Group className="mb-2">
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Lump sum"
                                  readonly
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
      </AdminLayout>
    </>
  );
};
