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

const AdminKyc = () => {
  //===============================Global State===============================//
  const { user } = useAuth();
  const navigate = useNavigate();
  //===============================End Of Code===============================//

  //===============================Local State===============================//
  const [showData, setShowData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(10);
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
  //===============================End Of Code===============================//

  //===============================Get Data===============================//
  const getProperty = async (pageNumber, search, filter) => {
    setCheckForCount(0);
    try {
      const URL = `/admin/get-all-kyc-details?page=${pageNumber}&limit=${limit}&search=${search}&date_from=${date?.from}&date_to=${date?.to}&columnName=${filter?.coloumName}&orderBy=${filter?.orderBy}`;
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
    filterData(pageNumber, search, filter);
  }, [pageNumber, search, filter]);
  //===============================End Of Code===============================//
  return (
    <>
      <AdminLayout>
        <div>
          <Container>
            <Row className="">
              <Col md="12">
                <h3 className="common-page-heading">KYC Management</h3>
                <Row>
                  <Col lg="6">
                    <div className="outer-box-flex">
                      <div className="box-total-user limit-balance-box mb-2">
                        <h5>Total KYC Approved</h5>
                        <h3>
                          <span className="text-orange">24</span>
                        </h3>
                      </div>
                      <div className="box-total-user limit-balance-box mb-2">
                        <h5>Total KYC Rejected</h5>
                        <h3>
                          <span className="text-orange">12</span>
                        </h3>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="shadow-admin-box mt-3">
                  <div className="filter-sort-sec">
                    <Row>
                      <Col md="12">
                        <h4 className="filter-icon">
                          <img src="assets/images/filter.png" alt="" /> Filter
                          <button
                            className="common-btn ms-3"
                            onClick={() => {
                              clearFilter();
                            }}
                          >
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
                            <Dropdown
                              className="dropdwon-border-box"
                              onSelect={(e) => {
                                setFilter({
                                  ...filter,
                                  coloumName: "createdAt",
                                  orderBy: e,
                                });
                              }}
                            >
                              <Dropdown.Toggle>
                                {" "}
                                {filter?.coloumName == "createdAt" &&
                                filter?.orderBy == "asc"
                                  ? "Newest"
                                  : filter?.coloumName == "createdAt" &&
                                    filter?.orderBy == "desc"
                                  ? "Oldest"
                                  : "Sort By"}
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item eventKey="asc">
                                  Newest
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="desc">
                                  Oldest
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="dropdwon-border-box">
                              <Dropdown.Toggle>Sort By User</Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#">Newest</Dropdown.Item>
                                <Dropdown.Item href="#">Oldest</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <InputGroup className="outer-input-search date-search">
                              <Form.Control
                                type="date"
                                placeholder="DD/MM/YYYY"
                                onChange={(e) => {
                                  setDate({ ...date, from: e.target.value });
                                }}
                                value={date?.from}
                              />
                              <InputGroup.Text className="search-space ml-3">
                                From
                              </InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="outer-input-search date-search ">
                              <Form.Control
                                type="date"
                                placeholder="DD/MM/YYYY"
                                onChange={(e) => {
                                  setDate({ ...date, to: e.target.value });
                                }}
                                value={date?.to}
                              />
                              <InputGroup.Text className="search-space ml-3">
                                To
                              </InputGroup.Text>
                            </InputGroup>
                          </div>
                          <Dropdown
                            className="dropdwon-border-box"
                            onSelect={(e) => {
                              setLimit(e);
                              setPageNumber(1);
                            }}
                          >
                            <Dropdown.Toggle>{limit}</Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item eventKey={10}>10</Dropdown.Item>
                              <Dropdown.Item eventKey={25}>25</Dropdown.Item>
                              <Dropdown.Item eventKey={50}>50</Dropdown.Item>
                              <Dropdown.Item eventKey={75}>75 </Dropdown.Item>
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
                              <span
                                className="arrow-filter"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  setFilter({
                                    ...filter,
                                    coloumName: "full_name",
                                    orderBy:
                                      filter?.orderBy == "asc" ? "desc" : "asc",
                                  });
                                }}
                              >
                                <a className="up">
                                  <img
                                    src="assets/images/arrow-up.png"
                                    alt=""
                                  />
                                </a>
                                <a className="down">
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
                              <span
                                className="arrow-filter"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  setFilter({
                                    ...filter,
                                    coloumName: "email",
                                    orderBy:
                                      filter?.orderBy == "asc" ? "desc" : "asc",
                                  });
                                }}
                              >
                                <a className="up">
                                  <img
                                    src="assets/images/arrow-up.png"
                                    alt=""
                                  />
                                </a>
                                <a className="down">
                                  <img
                                    src="assets/images/arrow-down.png"
                                    alt=""
                                  />
                                </a>
                              </span>
                            </span>
                          </th>
                          <th>Phone Number</th>
                          <th>DOC Status</th>
                          <th>Detail Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {checkForCount == 1 &&
                          showData?.map((items, index) => {
                            const adjustedIndex =
                              index + 1 + (pageNumber - 1) * limit;
                            return (
                              <tr>
                                <td>{adjustedIndex}</td>
                                <td className="admin-table-img">
                                  <img
                                    src={
                                      items?.user_details?.profile
                                        ? items?.user_details?.profile
                                        : "/assets/images/admin/table-img.png"
                                    }
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </td>
                                <td className="">
                                  {items?.user_details?.full_name}
                                </td>
                                <td className="">
                                  {items?.user_details?.email}
                                </td>

                                <td className="">
                                  +{items?.user_details?.country_code} &nbsp;{" "}
                                  {items?.user_details?.mobile_no}
                                </td>

                                <td>
                                  <span
                                    className={
                                      items?.document_status == "COMPLETE"
                                        ? "text-green"
                                        : "text-red"
                                    }
                                  >
                                    {" "}
                                    {items?.document_status}
                                  </span>
                                </td>
                                <td>
                                  <span
                                    className={
                                      items?.kyc_personal_detail_status ==
                                      "COMPLETE"
                                        ? "text-green"
                                        : "text-red"
                                    }
                                  >
                                    {" "}
                                    {items?.kyc_personal_detail_status}
                                  </span>
                                </td>

                              
                                <td>
                                  <button className="common-btn table-btn green-btn me-2">
                                    Approve
                                  </button>
                                  <button className="common-btn table-btn red-btn">
                                    Reject
                                  </button>
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
                        onClick={() => {
                          decressFunction();
                        }}
                      >
                        <i className="fa fa-angle-left"></i>
                      </button>
                      <button className="page-link">
                        {" "}
                        Page {pageNumber} of{" "}
                        {Math.ceil(totalOrderCount / limit)}
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
              </Col>
            </Row>
          </Container>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminKyc;
