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
import { useLocation } from "react-router-dom";
import axiosMain from "../../http/axios/axios_main";
import useAuth from "../../hooks/useAuth";

export const Adminkycdetails = () => {
  const { user } = useAuth();
  const { state } = useLocation();
  const { id } = state || "";

  const [showData, setShowData] = useState([]);

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);
  const getData = async () => {
    try {
      const getDetails = await axiosMain.get(
        `/admin/get-one-kyc-detail?kyc_id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user?.token}`,
          },
        }
      );
      if (getDetails?.data?.status) {
        setShowData(getDetails?.data?.data);
        console.log("getDetails", getDetails);
      }
    } catch (err) {}
  };
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
                          <h4 className="text-orange">{showData?.full_name}</h4>

                          {/* <p> arpitpatidar@gmail.com</p> */}
                          <p>
                            +{showData?.country_code} {showData?.mobile}
                          </p>

                          <p className="mt-3">
                            <button className="common-btn green-btn me-3">
                              Approve
                            </button>
                            <button className="common-btn red-btn">
                              Reject
                            </button>
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
                        {showData?.document_type}
                      </span>

                      <img
                        src={
                          showData?.front_side
                            ? showData?.front_side
                            : "https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/exchange_kyc_document/1740035554584-CB23-CARDjpg.webp"
                        }
                        className="img-fluid user-img"
                        alt="icon"
                      />
                    </h4>
                    <div>
                      <h4 className="text-orange">{showData?.full_name}</h4>
                      <p className="mb-3">
                        Date of Birth : {showData?.date_of_birth}
                      </p>
                      <p className="mb-3">
                        Mobile No. : +{showData?.country_code}{" "}
                        {showData?.mobile}
                      </p>
                      <p className="mb-3">Landmark : {showData?.landmark}</p>
                      <p className="mb-3">City : {showData?.city}</p>
                      <p className="mb-3">State : {showData?.state}</p>
                      <p className="mb-3">Country : {showData?.country}</p>
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
