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

export const AddNewAnnouncment = () => {
  return (
    <>
    <AdminLayout>
      <div>
        <Container fluid>
          <Row className="">
            <Col md="12">
               <h3 className="common-page-heading mb-4">Add New Announcment</h3>
                 <div className="shadow-admin-box form-inner-admin m-0 mb-1">
                        
                        
                        <Row>
                        <Col lg={12}>
                            <Form.Group className="mb-3">
                                <Form.Label>Tittle</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                           <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="" />
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Published date</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Twitter Link</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Telegram Link</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Facebook Link</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                           <Form.Group className="mb-3">
                                <Form.Label>Share Link</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                            <Col lg={4}>
                                    <Form.Group className="mb-3">
                                      <div className=" ">
                                        <Form.Label>Image</Form.Label>
                                        
                                            <div class="upload-photo-box">
                                                <Form.Control type="file" placeholder="" />
                                                <button disabled="" class="border-btn">Upload</button>
                                            </div>
                                            </div>
                                            <div class="announcment-img mt-3">
                                                <img src="assets/images/admin/user-img.png" alt="" />
                                            </div>
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
