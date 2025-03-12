import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Col,
  Row,
  NavDropdown,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function AdminHeader() {
 
  return (
    <>
      <header className="main-header login-header-home">
        <Navbar expand="lg" sticky="top">
          <Container fluid>
            <Row className="w-100 m-auto">
              <Col>
                <div className="d-flex justify-content-between align-items-center">
                  <Navbar.Brand href="/">
                    <img
                      src="assets/images/adf-white-logo.png"
                      className="img-fluid "
                      alt="logo"
                    />
                  </Navbar.Brand>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link
                        href="/admin-dashboard"
                      >
                        <div className="img-nav">
                          <img
                            src="assets/images/admin/dashboard-white.png"
                            className="img-fluid white"
                            alt="img"
                          />
                          <img
                            src="assets/images/admin/dashboard-black.png"
                            className="img-fluid green"
                            alt="img"
                          />
                        </div>
                        Dashboard
                      </Nav.Link>
                      <Nav.Link href="/admin-user">
                        <div className="img-nav">
                          <img
                            src="assets/images/admin/user-white.png"
                            className="img-fluid white"
                            alt="img"
                          />
                          <img
                            src="assets/images/admin/user-black.png"
                            className="img-fluid green"
                            alt="img"
                          />
                        </div>{" "}
                        Users
                      </Nav.Link>
                      <Nav.Link
                        href="/admin-transaction"
                      >
                        <div className="img-nav">
                          <img
                            src="assets/images/admin/transaction-white.png"
                            className="img-fluid white"
                            alt="img"
                          />
                          <img
                            src="assets/images/admin/transaction-black.png"
                            className="img-fluid green"
                            alt="img"
                          />{" "}
                        </div>{" "}
                        Transactions
                      </Nav.Link>
                      <Nav.Link href="/admin-stakes">
                        <div className="img-nav">
                          <img
                            src="assets/images/admin/stake-white.png"
                            className="img-fluid white"
                            alt="img"
                          />
                          <img
                            src="assets/images/admin/stake-black.png"
                            className="img-fluid green"
                            alt="img"
                          />
                        </div>{" "}
                        Stakes
                      </Nav.Link>
                      <Nav.Link  href="#">
                        <div className="img-nav">
                          <img
                            src="assets/images/admin/conversion-white.png"
                            className="img-fluid white"
                            alt="img"
                          />
                          <img
                            src="assets/images/admin/conversion-black.png"
                            className="img-fluid green"
                            alt="img"
                          />
                        </div>
                        Currencies Management
                      </Nav.Link>
                      <Nav.Link  href="/admin-kyc">
                        <div className="img-nav">
                          <img
                            src="assets/images/admin/kyc-white.png"
                            className="img-fluid white"
                            alt="img"
                          />
                          <img
                            src="assets/images/admin/kyc-black.png"
                            className="img-fluid green"
                            alt="img"
                          />
                        </div>{" "}
                        KYC Management
                      </Nav.Link>
                      <Nav.Link  href="/admin-support">
                        <div className="img-nav">
                          <img
                            src="assets/images/admin/support-white.png"
                            className="img-fluid white"
                            alt="img"
                          />
                          <img
                            src="assets/images/admin/support-black.png"
                            className="img-fluid green"
                            alt="img"
                          />
                        </div>{" "}
                        Support
                      </Nav.Link>

                      <Nav.Link  href="/admin-support">
                        <div className="img-nav">
                          <img
                            src="assets/images/admin/support-white.png"
                            className="img-fluid white"
                            alt="img"
                          />
                          <img
                            src="assets/images/admin/support-black.png"
                            className="img-fluid green"
                            alt="img"
                          />
                        </div>{" "}
                        Announcements
                      </Nav.Link>
                      <Nav.Link
                        // href="/"
                        className="bottom-fix"
                      >
                        <div className="img-nav">
                          <i className="fa fa-sign-out" aria-hidden="true" />
                        </div>{" "}
                        Logout
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>

                  <Link to="/" className="ms-auto profile-dropdown fix-bottom ">
                    <div className="img-nav">
                    <img src="assets/images/admin/profile.png" />{" "}
                    </div>
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
