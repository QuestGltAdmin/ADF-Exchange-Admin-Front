import React, { useCallback, useEffect, useState } from "react";
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
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axiosMain from "../../http/axios/axios_main";
import { debounce } from "lodash";

const AdminStakes = () => {
  //===============================Global State===============================//
  const { user } = useAuth();
  const navigate = useNavigate();
  //===============================End Of Code===============================//

  //===============================Local State===============================//
  const [showData, setShowData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalOrderCount, setTotalOrderCount] = useState(1);
  const [search, setSearch] = useState("");
  const [checkForCount, setCheckForCount] = useState(0);
  const [type, setType] = useState("");
  //===============================End Of Code===============================//

  //===============================Get Data===============================//
  const getProperty = async (search, type) => {
    setCheckForCount(0);
    try {
      const URL = `/admin/get-all-stake?search=${search}&type=${type}`;
      const getApiData = await axiosMain.get(URL, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user?.token}`,
        },
      });
      if (getApiData?.data?.status) {
        if (getApiData?.data?.data?.list?.length > 0) {
          setCheckForCount(1);

          setShowData(getApiData?.data?.data?.list);
          setTotalOrderCount(getApiData?.data?.data?.total);
        } else {
          setCheckForCount(2);
          setShowData([]);
        }
      }
    } catch (err) {
      setCheckForCount(2);
    }
  };

  const filterData = useCallback(debounce(getProperty, 500), []);
  useEffect(() => {
    filterData(search, type);
  }, [search, type]);
  return (
    <>
      <AdminLayout>
        <div>
          <Container fluid>
            <Row className="">
              <Col md="12">
                <div className="user-all-tabs">
                  <Row>
                    <Col lg={4}>
                      <h3 className="common-page-heading">Stake Management</h3>
                    </Col>
                    <Col lg={3} className="ms-auto">
                      <InputGroup className="outer-input-search mt-0">
                        <Form.Control
                          placeholder="Search..."
                          onChange={(e) => {
                            setSearch(e.target.value);
                          }}
                          value={search}
                        />
                        <InputGroup.Text className="search-space">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </InputGroup.Text>
                      </InputGroup>
                    </Col>
                    <Col lg={2}>
                      <a
                        className="common-btn"
                        onClick={() => {
                          navigate("/admin-add-stake");
                        }}
                      >
                        Add Stake Plan
                      </a>
                    </Col>
                  </Row>
                  {/* <Tabs defaultActiveKey="tab1" className="mb-3">
                    <Tab eventKey="tab1" title="All"> */}
                  <Row>
                    <Col lg={12} className="d-flex gap-2 mt-3 mb-5">
                      <button
                        className={
                          type == "" ? "border-btn common-btn" : "border-btn"
                        }
                        onClick={() => {
                          setType("");
                        }}
                      >
                        All
                      </button>
                      <button
                        className={
                          type == "upcoming"
                            ? "border-btn common-btn"
                            : "border-btn"
                        }
                        onClick={() => {
                          setType("upcoming");
                        }}
                      >
                        Upcoming
                      </button>
                      <button
                        className={
                          type == "running"
                            ? "border-btn common-btn"
                            : "border-btn"
                        }
                        onClick={() => {
                          setType("running");
                        }}
                      >
                        Running
                      </button>
                      <button
                        className={
                          type == "expired"
                            ? "border-btn common-btn"
                            : "border-btn"
                        }
                        onClick={() => {
                          setType("expired");
                        }}
                      >
                        Expired
                      </button>
                    </Col>
                  </Row>
                  <Row>
                    {checkForCount == 1 &&
                      showData?.map((items, index) => {
                        return (
                          <Col lg={4}>
                            <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                              <img
                                src={
                                  items?.currency_image
                                    ? items?.currency_image
                                    : "https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                                }
                                className="img-fluid stake-img"
                                alt="stake-img"
                              />
                              <h5>{items?.title}</h5>
                              <div className="d-flex justify-content-between">
                                <h6>{items?.currency} </h6>
                                <h6>
                                  Amount:{" "}
                                  <b className="text-orange">
                                    {(items?.amount * 1)?.toFixed(4)}
                                  </b>{" "}
                                </h6>
                              </div>
                              <div className="stake-days-outer">
                                <span className="p-0">
                                  <big className="text-orange">
                                    {items?.interest_rate}%
                                  </big>{" "}
                                  {items?.duration} {items?.duration_cycle}
                                </span>
                                <span className="text-end me-0 p-0">
                                  From: {items?.start_date}
                                  <br />
                                  To: {items?.end_date}
                                </span>
                              </div>
                              <div className="d-flex gap-2 align-items-center">
                                <button className="common-btn w-100">
                                  Edit
                                </button>
                                <div className="switch-to-lock mt-0">
                                  <Form.Check type="switch" label="Off" />
                                </div>
                                <button className="common-btn w-100">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    {checkForCount == 0 && (
                      <Col lg={12} className="mt-5 text-center">
                        <img
                          width={50}
                          src="/assets/images/admin/orange-loader.gif"
                        />{" "}
                      </Col>
                    )}
                    {checkForCount == 2 && (
                      <Col lg={12} className="mt-5">
                        <p className="text-center">No Data Found</p>{" "}
                      </Col>
                    )}
                  </Row>
                  {/* </Tab>
                    <Tab eventKey="tab2" title="Upcoming">
                      <Row>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab3" title="Running">
                      <Row>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="tab4" title="Expired">
                      <Row>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div className="shadow-admin-box stake-box-outer m-0 mb-1">
                            <img
                              src="https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/coin-logo/BTC.png"
                              className="img-fluid stake-img"
                              alt="stake-img"
                            />
                            <h5>BTC Round 3 </h5>
                            <div className="d-flex justify-content-between">
                              <h6>BTC </h6>
                              <h6>
                                Amount: <b className="text-orange">2</b>{" "}
                              </h6>
                            </div>
                            <div className="stake-days-outer">
                              <span className="p-0">
                                <big className="text-orange">19%</big> 50 Day
                              </span>
                              <span className="text-end me-0 p-0">
                                From: 20th Dec, 2024
                                <br />
                                To: 10th Jan, 2025
                              </span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              <button className="common-btn w-100">Edit</button>
                              <div className="switch-to-lock mt-0">
                                <Form.Check type="switch" label="Off" />
                              </div>
                              <button className="common-btn w-100">
                                Delete
                              </button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab>
                  </Tabs> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </AdminLayout>
    </>
  );
};
export default AdminStakes;
