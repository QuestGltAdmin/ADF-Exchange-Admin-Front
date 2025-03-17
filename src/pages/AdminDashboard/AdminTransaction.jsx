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
import { debounce } from "lodash";
import axiosMain from "../../http/axios/axios_main";
import moment from "moment/moment";

const AdminTransaction = () => {
  //===============================Global State===============================//
  const { user } = useAuth();
  //===============================End Of Code===============================//

  //===============================Local State===============================//
  const [showData, setShowData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalOrderCount, setTotalOrderCount] = useState(1);
  const [search, setSearch] = useState("");
  const [checkForCount, setCheckForCount] = useState(0);
  const [date, setDate] = useState({
    from: "",
    to: "",
  });
  const [filter, setFilter] = useState({
    coloumName: "createdAt",
    orderBy: "asc",
  });
  const [type, setType] = useState("all-trx");
  //===============================End Of Code===============================//

  //===============================Get Data===============================//
  const getProperty = async (pageNumber, search, filter, type, date) => {
    setCheckForCount(0);
    let typeData = type == "all-trx" ? "" : type;
    try {
      const URL = `admin/get-transactions?page=${pageNumber}&limit=10&search=${search}&trx_status=PENDING&date_from=${date?.from}&date_to=${date?.to}&type=${typeData}`;
      const getApiData = await axiosMain.get(URL, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user?.token}`,
        },
      });
      console.log("getApiData", getApiData);

      if (getApiData?.data?.status) {
        if (getApiData?.data?.data?.content?.length > 0) {
          setCheckForCount(1);

          setShowData(getApiData?.data?.data?.content);
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

  const incressFunction = () => {
    if (pageNumber < Math.ceil(totalOrderCount / 10)) {
      setPageNumber(pageNumber + 1);
    }
  };
  const decressFunction = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const filterData = useCallback(debounce(getProperty, 500), []);
  useEffect(() => {
    filterData(pageNumber, search, filter, type, date);
  }, [pageNumber, search, filter, type, date]);
  //===============================End Of Code===============================//
  return (
    <>
      <AdminLayout>
        <div>
          <Container fluid>
            <Row className="">
              <Col md="12">
                <h3 className="common-page-heading">All Transactions</h3>

                <div className="user-all-tabs">
                  <Tabs
                    activeKey={type}
                    className="mb-3"
                    onSelect={(k) => setType(k)}
                  >
                    <Tab eventKey="all-trx" title="All Transaction">
                      <div className="shadow-admin-box mt-3">
                        <div className="filter-sort-sec">
                          <Row>
                            <Col md="12">
                              <h4 className="filter-icon">
                                <img src="assets/images/filter.png" alt="" />{" "}
                                Filter
                                <button className="common-btn ms-3">
                                  Clear Filter
                                </button>
                              </h4>
                              <div className="filter-with-show-data">
                                <div className="outer-box-filter">
                                  <InputGroup className="outer-input-search ">
                                    <Form.Control
                                      placeholder="Search..."
                                      name="search"
                                      onChange={(e) => {
                                        setSearch(e.target.value);
                                      }}
                                      value={search}
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
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Sort By User
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
                                  <InputGroup className="outer-input-search date-search">
                                    <Form.Control
                                      placeholder="DD/MM/YYYY"
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space ml-3">
                                      From
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <InputGroup className="outer-input-search date-search ">
                                    <Form.Control
                                      placeholder="DD/MM/YYYY"
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space ml-3">
                                      To
                                    </InputGroup.Text>
                                  </InputGroup>
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
                                <th>Profile</th>
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
                                <th>Date</th>
                                <th>Phone Number</th>
                                <th>From Amt</th>
                                <th>To Amt</th>
                                <th>Status</th>
                              </tr>
                            </thead>

                            <tbody>
                              {checkForCount == 1 && showData?.map((items, index) => {
                                const adjustedIndex =
                                  index + 1 + (pageNumber - 1) * 10;
                                return (
                                  <tr>
                                    <td>{adjustedIndex}</td>
                                    <td className="admin-table-img">
                                      <img
                                        src={
                                          items?.receiver_user?.profile
                                            ? items?.receiver_user?.profile
                                            : "/assets/images/admin/table-img.png"
                                        }
                                        className="img-fluid"
                                        alt="icon"
                                      />
                                    </td>
                                    <td className="">
                                      {items?.receiver_user?.full_name}
                                    </td>
                                    <td className="">
                                      {items?.receiver_user?.email}
                                    </td>
                                    <td className="">
                                      {moment(items?.createdAt).format("lll")}
                                    </td>

                                    <td className="">
                                      +{items?.receiver_user?.country_code}{" "}
                                      &nbsp; {items?.receiver_user?.mobile_no}
                                    </td>

                                    <td>
                                      {(items?.from?.amount * 1)?.toFixed(4)}{" "}
                                      {items?.from?.currency_code}
                                    </td>

                                    <td className="">
                                      {" "}
                                      {(items?.to?.amount * 1)?.toFixed(4)}{" "}
                                      {items?.to?.currency_code}
                                    </td>
                                    <td>
                                      <span
                                        className={
                                          items?.status == "PENDING"
                                            ? "text-red"
                                            : "text-green"
                                        }
                                      >
                                        {" "}
                                        {items?.status}
                                      </span>
                                    </td>
                                  </tr>
                                );
                              })}

                              {checkForCount == 0 && (
                                <tr>
                                  <td colSpan={8} className="text-center">
                                    <img
                                      width={50}
                                      src="/assets/images/admin/orange-loader.gif"
                                    />
                                  </td>
                                </tr>
                              )}

                              {checkForCount == 2 && (
                                <tr>
                                  <td colSpan={8} className="text-center">
                                    No Data Found
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </Table>
                        </div>
                        <div className="mt-3">
                          <div className="d-flex justify-content-end list-pagination pb-5 pt-0">
                            <button
                              className="page-link"
                              onClick={() => {
                                decressFunction();
                              }}
                            >
                              <i className="fa fa-angle-left"></i>
                            </button>
                            <button className="page-link">
                              {" "}
                              Page {pageNumber} of{" "}
                              {Math.ceil(totalOrderCount / 10)}
                            </button>
                            <button
                              className="page-link"
                              onClick={() => {
                                incressFunction();
                              }}
                            >
                              <i className="fa fa-angle-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Tab>

                    <Tab eventKey="ADD_FUND" title="Buy">
                      <div className="shadow-admin-box mt-3">
                        <div className="filter-sort-sec">
                          <Row>
                            <Col md="12">
                              <h4 className="filter-icon">
                                <img src="assets/images/filter.png" alt="" />{" "}
                                Filter
                                <button className="common-btn ms-3">
                                  Clear Filter
                                </button>
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
                                  <Dropdown className="dropdwon-border-box">
                                    <Dropdown.Toggle>
                                      Sort By User
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
                                  <InputGroup className="outer-input-search date-search">
                                    <Form.Control
                                      placeholder="DD/MM/YYYY"
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space ml-3">
                                      From
                                    </InputGroup.Text>
                                  </InputGroup>
                                  <InputGroup className="outer-input-search date-search ">
                                    <Form.Control
                                      placeholder="DD/MM/YYYY"
                                      name="OldPassword"
                                    />
                                    <InputGroup.Text className="search-space ml-3">
                                      To
                                    </InputGroup.Text>
                                  </InputGroup>
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

                    <Tab eventKey="SWAP" title="Swap">
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

                    <Tab eventKey="DEPOSIT" title="Deposit">
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

                    <Tab eventKey="WITHDRAW" title="Withdraw">
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

                    <Tab eventKey="tab6" title="Orders">
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

                    <Tab eventKey="tab7" title="Refferal">
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

                    <Tab eventKey="TRANSFER" title="P2P">
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

                    <Tab eventKey="tab9" title="Stakes">
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

export default AdminTransaction;
