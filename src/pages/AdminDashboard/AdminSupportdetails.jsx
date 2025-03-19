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
              <Col md="7">
                <h3 className="common-page-heading">Support Details</h3>
                <div className="user-details-outer">
                  <Row>
                    <Col lg="12">
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
              <Col md="5">
              <div className="chat-support-outer">
                    <ul className="chat-list-main">
                      <li className="inner-chat-box">
                        <img src="assets/images/admin/table-img.png" alt="" />
                        <div>
                          <div className="chat-text">
                            <p>The Swap function is not working.</p>
                            <p>
                              <small>12:45</small>
                            </p>
                          </div>
                          <div className="chat-text">
                            <p>
                              Since this morning I am not able use the Swap
                              function. I have tried restarting the app several
                              times but it’s still the same. Please help me
                              resolve this problem so I can yse this app.
                            </p>
                            <p>
                              <small>12:45</small>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="inner-chat-box right-chat-list">
                        <div>
                          <div className="chat-text">
                            <p>
                              Hello, Rohit! <br /> I am very sorry for the
                              problem you are facing, me and May team will
                              resolve this issue as quick as we can.
                            </p>
                            <p>
                              <small>13:12</small>
                            </p>
                          </div>
                          <div className="chat-text">
                            <p>
                              Since this morning I am not able use the Swap
                              function. I have tried
                            </p>
                            <p>
                              <small>13:12</small>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="inner-chat-box">
                        <img src="assets/images/admin/table-img.png" alt="" />
                        <div>
                          <div className="chat-text">
                            <p>The Swap function is not working.</p>
                            <p>
                              <small>12:45</small>
                            </p>
                          </div>
                          <div className="chat-text">
                            <p>
                              Since this morning I am not able use the Swap
                              function. I have tried restarting the app several
                              times but it’s still the same. Please help me
                              resolve this problem so I can yse this app.
                            </p>
                            <p>
                              <small>12:45</small>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="inner-chat-box right-chat-list">
                        <div>
                          <div className="chat-text">
                            <p>
                              Hello, Rohit! <br /> I am very sorry for the
                              problem you are facing, me and May team will
                              resolve this issue as quick as we can.
                            </p>
                            <p>
                              <small>13:12</small>
                            </p>
                          </div>
                          <div className="chat-text">
                            <p>
                              Since this morning I am not able use the Swap
                              function. I have tried
                            </p>
                            <p>
                              <small>13:12</small>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="type-box-main">
                      <Form.Control type="text" placeholder="Type message..." />
                      <div className="d-flex align-items-center">
                        
                        <button className="common-btn">
                          Send <img src="assets/images/admin/send.png" alt="" />
                        </button>
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
