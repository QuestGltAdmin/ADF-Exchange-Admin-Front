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

export const AddAdminStake = () => {
  return (
    <>
    <AdminLayout>
      <div>
        <Container fluid>
          <Row className="">
            <Col md="12">
               <h3 className="common-page-heading mb-4">Add New Stake</h3>
                 <div className="shadow-admin-box form-inner-admin m-0 mb-1">
                    <Row>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Coin Symbol</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Coin Name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Stake Title</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Interest Rate</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Min Amount</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Coin Image</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
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
