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

export const AddNewmarquee = () => {
  return (
    <>
    <AdminLayout>
      <div>
        <Container fluid>
          <Row className="">
            <Col md="12">
               <h3 className="common-page-heading mb-4">Add New Marquee</h3>
                 <div className="shadow-admin-box form-inner-admin m-0 mb-1">
                    
                        <Row>
                        <Col lg={8}>
                           <Form.Group className="mb-3">
                                <Form.Label>Tittle</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Link</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        
                    </Row>
                    <Row>
                         <Col lg={3}>
                            <button className="common-btn w-100 mt-3">Submit</button>
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
