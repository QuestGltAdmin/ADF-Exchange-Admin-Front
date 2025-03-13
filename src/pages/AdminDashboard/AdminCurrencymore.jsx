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
              <div className="shadow-admin-box mt-3">
               
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </AdminLayout>
  </>
  )
}
