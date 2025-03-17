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

export const AdminSupportdetails = () => {
  return (
    <>
      <AdminLayout>
        <div>
          <Container fluid>
            <Row className="">
              <Col md="12">
                <h3 className="common-page-heading">Support Details</h3>
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

                          <p> arpitpatidar@gmail.com</p>
                          <p>+91 2345678900</p>
                          <p>Support ID : 12023</p>
                          <p>Created Date : 4 Feb 2025</p>
                          <p>
                            Status : <span className="text-green">Open</span>
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

                <div className="shadow-admin-box query-details-box mt-3">
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro soluta maxime esse
                  </h4>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quam neque id unde, esse totam fuga eos soluta
                    error distinctio perferendis at voluptatem suscipit dolore
                    odit blanditiis obcaecati dolorum? Doloremque.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quam neque id unde, esse totam fuga eos soluta
                    error distinctio perferendis at voluptatem suscipit dolore
                    odit blanditiis obcaecati dolorum? Doloremque.
                  </p>
                  <p>
                    <img
                      src="/assets/images/admin/user-img.png"
                      className="img-fluid"
                      alt="query image"
                    />
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </AdminLayout>
    </>
  );
};
