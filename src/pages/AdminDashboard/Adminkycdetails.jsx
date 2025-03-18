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

export const Adminkycdetails = () => {
  return (
    <>
    <AdminLayout>
      <div>
        <Container fluid>
          <Row className="">
            <Col md="12">
              <h3 className="common-page-heading">KYC Details</h3>
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
                        
                        <p className="mt-3">
                            <button className="common-btn green-btn me-3">Approve</button>
                            <button className="common-btn red-btn">Reject</button>
                        </p>
                      </div>
                    </div>
                  </Col>
                 
                </Row>
              </div>

              <div className="shadow-admin-box mt-3">
                        <div className="user-profile-box kyc-profile-box">
                          <h4>
                            <span className="mb-3 d-block text-orange">
                              Driving License
                            </span>

                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/exchange_kyc_document/1740035554584-CB23-CARDjpg.webp"
                              className="img-fluid user-img"
                              alt="icon"
                            />
                          </h4>
                          <div>
                            <h4 className="text-orange">Arpit Patidar</h4>
                            <p className="mb-3">Date of Birth : </p>
                            <p className="mb-3">Mobile No. : </p>
                            <p className="mb-3">Landmark : </p>
                            <p className="mb-3">City : </p>
                            <p className="mb-3">State : </p>
                            <p className="mb-3">Country : </p>
                          </div>
                        </div>
                      </div>

             
            </Col>
          </Row>
        </Container>
      </div>
    </AdminLayout>
  </>
  )
}
