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

export const AdminCurrencymore = () => {
  return (
    <>
    <AdminLayout>
      <div>
        <Container fluid>
        
          <Row className="">
            <Col md="12">
            <h3 className="common-page-heading">More permission Managment</h3>
            <div className="user-details-outer">
                              <Row>
                                <Col lg="5">
                                  <div className="user-profile-box align-items-center">
                                    <img
                                      src="/assets/images/admin/user-img.png"
                                      className="img-fluid user-img"
                                      alt="icon"
                                    />
                                    <div>
                                      <h4 className="text-orange">Arpit Patidar</h4>
                                     
                                      <p > Chain ID : 
                                      1223467
                                      </p>
                                      <p >
                                      Currency Type : Bitcoin
                                      </p>
                                    </div>
                                  </div>
                                </Col>
                                <Col lg="7">
                                  <div className="outer-box-flex">
                                    <div className="box-total-user mb-2">
                                      <img src="assets/images/money-bag.png" alt="" />
                                      <h5>Total Balance</h5>
                                      <h3>
                                        <span className="text-orange">$</span>1200
                                      </h3>
                                    </div>
                                    <div className="box-total-user mb-2">
                                      <img src="assets/images/money-bag.png" alt="" />
                                      <h5>In Use Balance</h5>
                                      <h3>
                                        <span className="text-orange">$</span>200
                                      </h3>
                                    </div>
                                    <div className="box-total-user">
                                      <img src="assets/images/money-bag.png" alt="" />
                                      <h5>Available Balance</h5>
                                      <h3>
                                        <span className="text-orange">$</span>1000
                                      </h3>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
            
              <div className="shadow-admin-box mt-3">
              <div className="form-inner-admin ">
                <Row>
                      <Col lg={3}>
                        <Form.Group className="mb-3">
                              <Form.Label>Min Deposit Amount</Form.Label>
                              <Form.Control type="text" placeholder="00" />
                          </Form.Group>
                      </Col>
                      <Col lg={3}>
                        <Form.Group className="mb-3">
                              <Form.Label>Min Withdraw Amount</Form.Label>
                              <Form.Control type="text" placeholder="00" />
                          </Form.Group>
                      </Col> 
                  </Row>
              </div>
               <div className="switch-to-lock mt-0">
                <Form.Check
                    type="switch"
                    label="Allow user Display"
                />
                </div>
                <hr/>
                <div className="switch-to-lock">
                <Form.Check
                    type="switch"
                    label="Trade Status"
                />
                </div>
                <hr/>
                <div className="switch-to-lock">
                <Form.Check
                    type="switch"
                    label="Stake Status"
                />
                </div>
                <hr/>
                <div className="switch-to-lock">
                <Form.Check
                    type="switch"
                    label="Deposit Status"
                />
                </div>
                <hr/>
                <div className="switch-to-lock">
                <Form.Check
                    type="switch"
                    label="Withdraw Status"
                />
                </div>
                <hr/>
                <div className="switch-to-lock">
                <Form.Check
                    type="switch"
                    label="P2P Status"
                />
                </div>
                <hr/>
                <div className="switch-to-lock">
                <Form.Check
                    type="switch"
                    label="Swap Status"
                />
                </div>
                <Row>
                  <Col lg={3}>
                  <button className="common-btn w-100 mt-4">Submit</button>
                  </Col>
                </Row>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </AdminLayout>
  </>
  )
}
