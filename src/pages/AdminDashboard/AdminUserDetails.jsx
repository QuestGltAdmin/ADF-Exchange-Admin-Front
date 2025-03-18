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

export const AdminUserDetails = () => {
  const { state } = useLocation();
  const { id } = state || "";
  const { user } = useAuth();
  const [userDetails , setUserDetails] = useState([])
  const [userKYC , setUserKYC] = useState([])
  useEffect(() => {
    if (id) {
      getUserData();
      getKYCData();
    }
  }, [id]);
  const getUserData = async () => {
    try {
      const getData = await axiosMain.get(
        `/admin/get-user-details?user_id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user?.token}`,
          },
        }
      );
      if (getData?.data?.status) {
        setUserDetails(getData?.data?.userDetail)
        console.log("getData", getData);
      }
    } catch (err) {}
  };

  const getKYCData = async () => {
    try {
      const getData = await axiosMain.get(
        `/admin/get-user-kyc-detail?user_id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user?.token}`,
          },
        }
      );
      if (getData?.data?.status) {
        setUserKYC(getData?.data?.data)
        console.log("getData", getData);
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
                <h3 className="common-page-heading">Users Details</h3>
                <div className="user-details-outer">
                  <Row>
                    <Col lg="6">
                      <div className="user-profile-box">
                        <img
                          src={userDetails?.profile ? userDetails?.profile : "/assets/images/admin/user-img.png"}
                          className="img-fluid user-img"
                          alt="icon"
                        />
                        <div>
                          <h4 className="text-orange">{userDetails?.full_name}</h4>
                          <p>{userDetails?.email}</p>
                          <p>+{userDetails?.country_code} {userDetails?.mobile_no}</p>
                          {/* <p className="referal-break">
                            bnenbtebntebteb,5b35b3jbj36bj3bbjyebjy4bj64bj64bj
                          </p> */}
                          <div className="switch-to-lock">
                            <Form.Check
                              type="switch"
                              label="Lock User for Login/trade"
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="outer-box-flex">
                        <div className="box-total-user mb-2">
                          <img src="assets/images/money-bag.png" alt="" />
                          <h5>Total Balance</h5>
                          <h3>
                            <span className="text-orange">$</span>1200
                          </h3>
                        </div>
                        <div className="box-total-user mb-2">
                          <img src="assets/images/money-bag.png" alt="" />
                          <h5>In Use Balance</h5>
                          <h3>
                            <span className="text-orange">$</span>200
                          </h3>
                        </div>
                        <div className="box-total-user">
                          <img src="assets/images/money-bag.png" alt="" />
                          <h5>Available Balance</h5>
                          <h3>
                            <span className="text-orange">$</span>1000
                          </h3>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="user-all-tabs">
                  <Tabs defaultActiveKey="tab1" className="mb-3">
                    <Tab eventKey="tab1" title="KYC">
                      <div className="shadow-admin-box mt-3">
                        <div className="user-profile-box kyc-profile-box">
                          <h4>
                            <span className="mb-3 d-block text-orange">
                              {userKYC?.document_type}
                            </span>

                            <img
                              src={userKYC?.front_side ? userKYC?.front_side : "https://adf-star-s3-bucket.s3.ap-south-1.amazonaws.com/exchange_kyc_document/1740035554584-CB23-CARDjpg.webp"}
                              className="img-fluid user-img"
                              alt="icon"
                            />
                          </h4>
                          <div>
                            <h4 className="text-orange">{userKYC?.full_name}</h4>
                            <p className="mb-3">Date of Birth : {userKYC?.date_of_birth}</p>
                            <p className="mb-3">Mobile No. : +{userKYC?.country_code} {userKYC?.mobile}</p>
                            <p className="mb-3">Landmark : {userKYC?.landmark}</p>
                            <p className="mb-3">City : {userKYC?.city}</p>
                            <p className="mb-3">State : {userKYC?.state}</p>
                            <p className="mb-3">Country : {userKYC?.country}</p>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="tab2" title="Wallet Balance">
                      <div className="shadow-admin-box mt-3">
                        <div className="filter-sort-sec">
                          <Row>
                            <Col md="12">
                              <h4 className="filter-icon">
                                <img src="assets/images/filter.png" alt="" />{" "}
                                Filter
                              </h4>
                              <div className="filter-with-show-data">
                                <div className="outer-box-filter">
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>Sort By</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">
                                        Newest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Oldest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Something else
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">
                                    Clear Filter
                                  </button>
                                </div>
                                <Dropdown className="dropdwon-border-box">
                                  <Dropdown.Toggle>Show</Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                      1 - 25
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      25 - 50
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      50 - 75
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      75 - 100
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <hr />
                        <div className="table-responsive">
                          <Table className="table-common-new">
                            <thead>
                              <tr>
                                <th>Sr. No</th>
                                <th>Coin</th>
                                <th>
                                  <span className="d-flex">
                                    Name{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>
                                  <span className="d-flex">
                                    {" "}
                                    Available Balance{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>Total Balance</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>S.No 1</td>
                                <td className="admin-table-img">
                                  <img
                                    src="/assets/images/admin/table-img.png"
                                    className="img-fluid"
                                    alt="coin icon"
                                  />
                                </td>
                                <td className="">ETH</td>
                                <td className="">$1200</td>

                                <td className="">$1200</td>
                              </tr>

                              {/* <tr>
                                        <td colSpan={5} className="text-center">
                                        No Data Found
                                        </td>
                                    </tr> */}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="tab3" title="Stakes">
                      <div className="shadow-admin-box mt-3">
                        <div className="filter-sort-sec">
                          <Row>
                            <Col md="12">
                              <h4 className="filter-icon">
                                <img src="assets/images/filter.png" alt="" />{" "}
                                Filter
                              </h4>
                              <div className="filter-with-show-data">
                                <div className="outer-box-filter">
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>Sort By</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">
                                        Newest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Oldest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Something else
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">
                                    Clear Filter
                                  </button>
                                </div>
                                <Dropdown className="dropdwon-border-box">
                                  <Dropdown.Toggle>Show</Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                      1 - 25
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      25 - 50
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      50 - 75
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      75 - 100
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <hr />
                        <div className="table-responsive">
                          <Table className="table-common-new">
                            <thead>
                              <tr>
                                <th>Sr. No</th>
                                <th>Tittle</th>
                                <th>
                                  <span className="d-flex">
                                    Amount Invested{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>
                                  <span className="d-flex">
                                    {" "}
                                    Payout Amount{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>Duration</th>
                                <th>Interest Rate</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>BTC</td>
                                <td className="">1.00 BTC</td>
                                <td className="">2.00 BTC</td>

                                <td className="">140 Days</td>

                                <td>12%</td>

                                <td>12 March 2025</td>
                                <td>12 March 2025</td>
                                <td>
                                  <span className="text-green">Active</span>
                                </td>
                              </tr>

                              {/* <tr>
                                        <td colSpan={9} className="text-center">
                                        No Data Found
                                        </td>
                                    </tr> */}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="tab4" title="Deposit/Withdraw">
                      <div className="shadow-admin-box mt-3">
                        <div className="filter-sort-sec">
                          <Row>
                            <Col md="12">
                              <h4 className="filter-icon">
                                <img src="assets/images/filter.png" alt="" />{" "}
                                Filter
                              </h4>
                              <div className="filter-with-show-data">
                                <div className="outer-box-filter">
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>Sort By</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">
                                        Newest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Oldest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Something else
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">
                                    Clear Filter
                                  </button>
                                </div>
                                <Dropdown className="dropdwon-border-box">
                                  <Dropdown.Toggle>Show</Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                      1 - 25
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      25 - 50
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      50 - 75
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      75 - 100
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <hr />
                        <div className="table-responsive">
                          <Table className="table-common-new">
                            <thead>
                              <tr>
                                <th>Sr. No</th>
                                <th>Name</th>
                                <th>
                                  <span className="d-flex">
                                    Name{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>
                                  <span className="d-flex">
                                    {" "}
                                    Email{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>Phone Number</th>
                                <th>KYC</th>
                                <th>Wallet</th>
                                <th>Profile</th>
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
                                <td className="">User</td>
                                <td className="">user@gmail.com</td>

                                <td className="">+91 &nbsp; 8782772877</td>

                                <td>
                                  <div className="kyc-set">
                                    KYC
                                    <img
                                      style={{ cursor: "pointer" }}
                                      src="assets/images/admin/attach.png"
                                      className="img-fluid"
                                      alt="icon"
                                    />
                                  </div>
                                </td>

                                <td className="">$434 USD</td>
                                <td>
                                  <a href="">
                                    <i className="fa fa-eye"></i>
                                  </a>
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
                      </div>
                    </Tab>
                    <Tab eventKey="tab5" title="Orders">
                      <div className="shadow-admin-box mt-3">
                        <div>
                          <Tabs
                            defaultActiveKey="ordertab1"
                            className="mb-3 mt-0"
                          >
                            <Tab eventKey="ordertab1" title="Open Order">
                              <div className="filter-sort-sec">
                                <Row>
                                  <Col md="12">
                                    <h4 className="filter-icon">
                                      <img
                                        src="assets/images/filter.png"
                                        alt=""
                                      />{" "}
                                      Filter
                                    </h4>
                                    <div className="outer-box-filter">
                                      <InputGroup className="outer-input-search ">
                                        <Form.Control
                                          placeholder="Search..."
                                          name="OldPassword"
                                        />
                                        <InputGroup.Text className="search-space">
                                          <i
                                            className="fa fa-search"
                                            aria-hidden="true"
                                          ></i>
                                        </InputGroup.Text>
                                      </InputGroup>
                                      <Dropdown className="dropdwon-border-box">
                                        <Dropdown.Toggle>
                                          Sort By
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#">
                                            Newest
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#">
                                            Oldest
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#">
                                            Something else
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                      <button className="common-btn">
                                        Clear Filter
                                      </button>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                              <hr />
                              <div className="table-responsive">
                                <Table className="table-common-new">
                                  <thead>
                                    <tr>
                                      <th>Sr. No</th>
                                      <th>Name</th>
                                      <th>
                                        <span className="d-flex">
                                          Name{" "}
                                          <span className="arrow-filter">
                                            <a href="" className="up">
                                              <img
                                                src="assets/images/arrow-up.png"
                                                alt=""
                                              />
                                            </a>
                                            <a className="down" href="">
                                              <img
                                                src="assets/images/arrow-down.png"
                                                alt=""
                                              />
                                            </a>
                                          </span>
                                        </span>
                                      </th>
                                      <th>
                                        <span className="d-flex">
                                          {" "}
                                          Email{" "}
                                          <span className="arrow-filter">
                                            <a href="" className="up">
                                              <img
                                                src="assets/images/arrow-up.png"
                                                alt=""
                                              />
                                            </a>
                                            <a className="down" href="">
                                              <img
                                                src="assets/images/arrow-down.png"
                                                alt=""
                                              />
                                            </a>
                                          </span>
                                        </span>
                                      </th>
                                      <th>Phone Number</th>
                                      <th>KYC</th>
                                      <th>Wallet</th>
                                      <th>Profile</th>
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
                                      <td className="">User</td>
                                      <td className="">user@gmail.com</td>

                                      <td className="">
                                        +91 &nbsp; 8782772877
                                      </td>

                                      <td>
                                        <div className="kyc-set">
                                          KYC
                                          <img
                                            style={{ cursor: "pointer" }}
                                            src="assets/images/admin/attach.png"
                                            className="img-fluid"
                                            alt="icon"
                                          />
                                        </div>
                                      </td>

                                      <td className="">$434 USD</td>
                                      <td>
                                        <a href="">
                                          <i className="fa fa-eye"></i>
                                        </a>
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
                            </Tab>
                            <Tab eventKey="ordertab2" title="Order History">
                              <div className="filter-sort-sec">
                                <Row>
                                  <Col md="12">
                                    <h4 className="filter-icon">
                                      <img
                                        src="assets/images/filter.png"
                                        alt=""
                                      />{" "}
                                      Filter
                                    </h4>
                                    <div className="outer-box-filter">
                                      <InputGroup className="outer-input-search ">
                                        <Form.Control
                                          placeholder="Search..."
                                          name="OldPassword"
                                        />
                                        <InputGroup.Text className="search-space">
                                          <i
                                            className="fa fa-search"
                                            aria-hidden="true"
                                          ></i>
                                        </InputGroup.Text>
                                      </InputGroup>
                                      <Dropdown className="dropdwon-border-box">
                                        <Dropdown.Toggle>
                                          Sort By
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#">
                                            Newest
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#">
                                            Oldest
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#">
                                            Something else
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                      <button className="common-btn">
                                        Clear Filter
                                      </button>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                              <hr />
                              <div className="table-responsive">
                                <Table className="table-common-new">
                                  <thead>
                                    <tr>
                                      <th>Sr. No</th>
                                      <th>Name</th>
                                      <th>
                                        <span className="d-flex">
                                          Name{" "}
                                          <span className="arrow-filter">
                                            <a href="" className="up">
                                              <img
                                                src="assets/images/arrow-up.png"
                                                alt=""
                                              />
                                            </a>
                                            <a className="down" href="">
                                              <img
                                                src="assets/images/arrow-down.png"
                                                alt=""
                                              />
                                            </a>
                                          </span>
                                        </span>
                                      </th>
                                      <th>
                                        <span className="d-flex">
                                          {" "}
                                          Email{" "}
                                          <span className="arrow-filter">
                                            <a href="" className="up">
                                              <img
                                                src="assets/images/arrow-up.png"
                                                alt=""
                                              />
                                            </a>
                                            <a className="down" href="">
                                              <img
                                                src="assets/images/arrow-down.png"
                                                alt=""
                                              />
                                            </a>
                                          </span>
                                        </span>
                                      </th>
                                      <th>Phone Number</th>
                                      <th>KYC</th>
                                      <th>Wallet</th>
                                      <th>Profile</th>
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
                                      <td className="">User</td>
                                      <td className="">user@gmail.com</td>

                                      <td className="">
                                        +91 &nbsp; 8782772877
                                      </td>

                                      <td>
                                        <div className="kyc-set">
                                          KYC
                                          <img
                                            style={{ cursor: "pointer" }}
                                            src="assets/images/admin/attach.png"
                                            className="img-fluid"
                                            alt="icon"
                                          />
                                        </div>
                                      </td>

                                      <td className="">$434 USD</td>
                                      <td>
                                        <a href="">
                                          <i className="fa fa-eye"></i>
                                        </a>
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
                            </Tab>
                            <Tab eventKey="ordertab3" title="Trade History">
                              <div className="filter-sort-sec">
                                <Row>
                                  <Col md="12">
                                    <h4 className="filter-icon">
                                      <img
                                        src="assets/images/filter.png"
                                        alt=""
                                      />{" "}
                                      Filter
                                    </h4>
                                    <div className="outer-box-filter">
                                      <InputGroup className="outer-input-search ">
                                        <Form.Control
                                          placeholder="Search..."
                                          name="OldPassword"
                                        />
                                        <InputGroup.Text className="search-space">
                                          <i
                                            className="fa fa-search"
                                            aria-hidden="true"
                                          ></i>
                                        </InputGroup.Text>
                                      </InputGroup>
                                      <Dropdown className="dropdwon-border-box">
                                        <Dropdown.Toggle>
                                          Sort By
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                          <Dropdown.Item href="#">
                                            Newest
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#">
                                            Oldest
                                          </Dropdown.Item>
                                          <Dropdown.Item href="#">
                                            Something else
                                          </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                      <button className="common-btn">
                                        Clear Filter
                                      </button>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                              <hr />
                              <div className="table-responsive">
                                <Table className="table-common-new">
                                  <thead>
                                    <tr>
                                      <th>Sr. No</th>
                                      <th>Name</th>
                                      <th>
                                        <span className="d-flex">
                                          Name{" "}
                                          <span className="arrow-filter">
                                            <a href="" className="up">
                                              <img
                                                src="assets/images/arrow-up.png"
                                                alt=""
                                              />
                                            </a>
                                            <a className="down" href="">
                                              <img
                                                src="assets/images/arrow-down.png"
                                                alt=""
                                              />
                                            </a>
                                          </span>
                                        </span>
                                      </th>
                                      <th>
                                        <span className="d-flex">
                                          {" "}
                                          Email{" "}
                                          <span className="arrow-filter">
                                            <a href="" className="up">
                                              <img
                                                src="assets/images/arrow-up.png"
                                                alt=""
                                              />
                                            </a>
                                            <a className="down" href="">
                                              <img
                                                src="assets/images/arrow-down.png"
                                                alt=""
                                              />
                                            </a>
                                          </span>
                                        </span>
                                      </th>
                                      <th>Phone Number</th>
                                      <th>KYC</th>
                                      <th>Wallet</th>
                                      <th>Profile</th>
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
                                      <td className="">User</td>
                                      <td className="">user@gmail.com</td>

                                      <td className="">
                                        +91 &nbsp; 8782772877
                                      </td>

                                      <td>
                                        <div className="kyc-set">
                                          KYC
                                          <img
                                            style={{ cursor: "pointer" }}
                                            src="assets/images/admin/attach.png"
                                            className="img-fluid"
                                            alt="icon"
                                          />
                                        </div>
                                      </td>

                                      <td className="">$434 USD</td>
                                      <td>
                                        <a href="">
                                          <i className="fa fa-eye"></i>
                                        </a>
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
                            </Tab>
                          </Tabs>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="tab6" title="Refferal">
                      <div className="shadow-admin-box mt-3">
                        <div className="filter-sort-sec">
                          <Row>
                            <Col md="12">
                              <h4 className="filter-icon">
                                <img src="assets/images/filter.png" alt="" />{" "}
                                Filter
                              </h4>
                              <div className="filter-with-show-data">
                                <div className="outer-box-filter">
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>Sort By</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">
                                        Newest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Oldest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Something else
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">
                                    Clear Filter
                                  </button>
                                </div>
                                <Dropdown className="dropdwon-border-box">
                                  <Dropdown.Toggle>Show</Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                      1 - 25
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      25 - 50
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      50 - 75
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      75 - 100
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <hr />
                        <div className="table-responsive">
                          <Table className="table-common-new">
                            <thead>
                              <tr>
                                <th>Sr. No</th>
                                <th>Name</th>
                                <th>
                                  <span className="d-flex">
                                    Name{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>
                                  <span className="d-flex">
                                    {" "}
                                    Email{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>Phone Number</th>
                                <th>KYC</th>
                                <th>Wallet</th>
                                <th>Profile</th>
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
                                <td className="">User</td>
                                <td className="">user@gmail.com</td>

                                <td className="">+91 &nbsp; 8782772877</td>

                                <td>
                                  <div className="kyc-set">
                                    KYC
                                    <img
                                      style={{ cursor: "pointer" }}
                                      src="assets/images/admin/attach.png"
                                      className="img-fluid"
                                      alt="icon"
                                    />
                                  </div>
                                </td>

                                <td className="">$434 USD</td>
                                <td>
                                  <a href="">
                                    <i className="fa fa-eye"></i>
                                  </a>
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
                      </div>
                    </Tab>
                    <Tab eventKey="tab7" title="Swap">
                      <div className="shadow-admin-box mt-3">
                        <div className="filter-sort-sec">
                          <Row>
                            <Col md="12">
                              <h4 className="filter-icon">
                                <img src="assets/images/filter.png" alt="" />{" "}
                                Filter
                              </h4>
                              <div className="filter-with-show-data">
                                <div className="outer-box-filter">
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>Sort By</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">
                                        Newest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Oldest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Something else
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">
                                    Clear Filter
                                  </button>
                                </div>
                                <Dropdown className="dropdwon-border-box">
                                  <Dropdown.Toggle>Show</Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                      1 - 25
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      25 - 50
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      50 - 75
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      75 - 100
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <hr />
                        <div className="table-responsive">
                          <Table className="table-common-new">
                            <thead>
                              <tr>
                                <th>Sr. No</th>
                                <th>Name</th>
                                <th>
                                  <span className="d-flex">
                                    Name{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>
                                  <span className="d-flex">
                                    {" "}
                                    Email{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>Phone Number</th>
                                <th>KYC</th>
                                <th>Wallet</th>
                                <th>Profile</th>
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
                                <td className="">User</td>
                                <td className="">user@gmail.com</td>

                                <td className="">+91 &nbsp; 8782772877</td>

                                <td>
                                  <div className="kyc-set">
                                    KYC
                                    <img
                                      style={{ cursor: "pointer" }}
                                      src="assets/images/admin/attach.png"
                                      className="img-fluid"
                                      alt="icon"
                                    />
                                  </div>
                                </td>

                                <td className="">$434 USD</td>
                                <td>
                                  <a href="">
                                    <i className="fa fa-eye"></i>
                                  </a>
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
                      </div>
                    </Tab>
                    <Tab eventKey="tab8" title="P2P">
                      <div className="shadow-admin-box mt-3">
                        <div className="filter-sort-sec">
                          <Row>
                            <Col md="12">
                              <h4 className="filter-icon">
                                <img src="assets/images/filter.png" alt="" />{" "}
                                Filter
                              </h4>
                              <div className="filter-with-show-data">
                                <div className="outer-box-filter">
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space">
                                      <i
                                        className="fa fa-search"
                                        aria-hidden="true"
                                      ></i>
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>Sort By</Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      <Dropdown.Item href="#">
                                        Newest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Oldest
                                      </Dropdown.Item>
                                      <Dropdown.Item href="#">
                                        Something else
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                  <button className="common-btn">
                                    Clear Filter
                                  </button>
                                </div>
                                <Dropdown className="dropdwon-border-box">
                                  <Dropdown.Toggle>Show</Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                      1 - 25
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      25 - 50
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      50 - 75
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      75 - 100
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <hr />
                        <div className="table-responsive">
                          <Table className="table-common-new">
                            <thead>
                              <tr>
                                <th>Sr. No</th>

                                <th>
                                  <span className="d-flex">
                                    Transfer Date{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>Beneficiary Name</th>

                                <th>Currency</th>
                                <th>
                                  <span className="d-flex">
                                    Amount{" "}
                                    <span className="arrow-filter">
                                      <a href="" className="up">
                                        <img
                                          src="assets/images/arrow-up.png"
                                          alt=""
                                        />
                                      </a>
                                      <a className="down" href="">
                                        <img
                                          src="assets/images/arrow-down.png"
                                          alt=""
                                        />
                                      </a>
                                    </span>
                                  </span>
                                </th>
                                <th>Status</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Feb 28, 2025 2:11 PM</td>
                                <td>Krishna Dobariya</td>
                                <td>USDT</td>
                                <td>1.000000</td>
                                <td className="text-green">Successs</td>
                              </tr>

                              {/* <tr>
                                        <td colSpan={8} className="text-center">
                                        No Data Found
                                        </td>
                                    </tr> */}
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </AdminLayout>
    </>
  );
};
