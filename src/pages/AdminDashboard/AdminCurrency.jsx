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

export const AdminCurrency = () => {
  return (
    <>
    <AdminLayout>
      <div>
        <Container fluid>
        
          <Row className="">
            <Col md="12">
            <h3 className="common-page-heading">Currency Management</h3>
              <div className="shadow-admin-box mt-3">
               
               
                <div className="filter-sort-sec">
                  <Row>
                    <Col md="12">
                       <h4 className="filter-icon"><img src="assets/images/filter.png"  alt="" /> Filter</h4>
                         <div className="filter-with-show-data">
                            <div className="outer-box-filter">
                                  
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i className="fa fa-search" aria-hidden="true"></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Sort By
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">Newest</Dropdown.Item>
                                      <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                      <Dropdown.Item href="#">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">Clear Filter</button>
                            </div>
                            <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Show
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">1 - 25</Dropdown.Item>
                                      <Dropdown.Item href="#">25 - 50</Dropdown.Item>
                                      <Dropdown.Item href="#">50 - 75</Dropdown.Item>
                                      <Dropdown.Item href="#">75 - 100</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                         </div>
                    </Col>
                  </Row>
                </div>
                <hr/>
                <div className="table-responsive">
                      <Table className="table-common-new">
                        <thead>
                          <tr>
                            <th>Sr. No</th>
                            <th>Image</th>
                            <th ><span className="d-flex">Name  <span className="arrow-filter"><a href="" className="up"><img src="assets/images/arrow-up.png" alt="" /></a><a className="down" href=""><img src="assets/images/arrow-down.png" alt="" /></a></span></span></th>
                            <th ><span className="d-flex"> Chain Id  <span className="arrow-filter"><a href="" className="up"><img src="assets/images/arrow-up.png" alt="" /></a><a className="down" href=""><img src="assets/images/arrow-down.png" alt="" /></a></span></span></th>
                            <th>Currency type</th>
                            <th>Total Balance</th>
                            <th>In Use Balance</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                       
                        <tbody>

                          <tr>
                            <td>S.No 1</td>
                            <td className="admin-table-img">

                              <img
                                src="/assets/images/admin/table-img.png"
                                className="img-fluid"
                                alt="icon"
                              />
                            </td>
                            <td className="">
                              User
                            </td>
                            <td className="">
                           1223467</td>

                            <td className="">
                            Bitcoin
                            </td>

                            <td >
                              12200 BTC
                            </td>

                            <td className="">
                            
                              434 BTC
                            </td>
                            <td>
                                <a href=""><small>More Info</small></a>
                            </td>
                          </tr>

                          {/* <tr>
                              <td colSpan={8} className="text-center">
                                No Data Found
                              </td>
                            </tr> */}
                        </tbody>
                      </Table>
                    </div>
                    <div className="mt-3">
                           <div className="d-flex justify-content-end list-pagination pb-5 pt-0">
                            <button
                              className="page-link"
                              
                            >
                              <i className="fa fa-angle-left"></i>
                            </button>
                            <button className="page-link">
                              
                              Page 1 of 5
                            </button>
                            <button
                              className="page-link"
                              
                            >
                              <i className="fa fa-angle-right"></i>
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
  )
}
