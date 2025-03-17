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
} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { debounce } from "lodash";
import axiosMain from "../../http/axios/axios_main";

const AdminUser = () => {
  //===============================Global State===============================//
  const { user } = useAuth();
  console.log("userData", user);

  //===============================End Of Code===============================//

  //===============================Local State===============================//
  const [showData, setShowData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalOrderCount, setTotalOrderCount] = useState(1);
  const [search, setSearch] = useState("");
  const [checkForCount, setCheckForCount] = useState(0);
  const [filter, setFilter] = useState({
    coloumName: "createdAt",
    orderBy: "asc",
  });
  //===============================End Of Code===============================//

  //===============================Get Data===============================//
  const getProperty = async (pageNumber, search, filter) => {
    setCheckForCount(0);
    try {
      const URL = `/admin/user-list?page=${pageNumber}&limit=10&search=${search}&columnName=${filter?.coloumName}&orderBy=${filter?.orderBy}`;
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
          <Container fluid>
            <Row className="">
              <Col md="12">
                <h3 className="common-page-heading">Users Data</h3>
                <div className="shadow-admin-box mt-3">
                  <div className="filter-sort-sec">
                    <Row>
                      <Col md="12">
                        <h4 className="filter-icon">
                          <img src="assets/images/filter.png" alt="" /> Filter
                        </h4>
                        <div className="filter-with-show-data">
                          <div className="outer-box-filter">
                            <InputGroup className="outer-input-search ">
                              <Form.Control
                                placeholder="Search..."
                                name="OldPassword"
                                onChange={(e)=>{setSearch(e?.target?.value)}}
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
                            <button className="common-btn">Clear Filter</button>
                          </div>
                          <Dropdown className="dropdwon-border-box">
                            <Dropdown.Toggle>Show</Dropdown.Toggle>

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
                  <hr />
                  <div className="table-responsive">
                    <Table className="table-common-new">
                      <thead>
                        <tr>
                          <th>Sr. No</th>
                          <th>Image</th>
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
                          <th>kyc Status</th>
                          <th>2FA Status</th>
                          <th>Wallet</th>
                          <th>Profile</th>
                        </tr>
                      </thead>

                      <tbody>
                        {checkForCount == 1 &&
                          showData?.map((items, index) => {
                            const adjustedIndex =
                              index + 1 + (pageNumber - 1) * 10;
                            return (
                              <tr>
                                <td>{adjustedIndex}</td>
                                <td className="admin-table-img">
                                  <img
                                    src={
                                      items?.profile
                                        ? items?.profile
                                        : "/assets/images/admin/table-img.png"
                                    }
                                    className="img-fluid"
                                    alt="icon"
                                  />
                                </td>
                                <td className="">{items?.full_name}</td>
                                <td className="">{items?.email}</td>

                                <td>
                                  <span
                                    className={
                                      items?.kyc_status
                                        ? "text-green"
                                        : "text-red"
                                    }
                                  >
                                    {items?.kyc_status ? "Enable" : "Disable"}
                                  </span>
                                </td>

                                <td>
                                  <span
                                    className={
                                      items?.two_fa_status
                                        ? "text-green"
                                        : "text-red"
                                    }
                                  >
                                    {" "}
                                    {items?.two_fa_status
                                      ? "Enable"
                                      : "Disable"}
                                  </span>
                                </td>

                                <td className="">
                                  {(items?.wallet * 1)?.toFixed(6)} USDT
                                </td>
                                <td>
                                  <a href="">
                                    <small>View More</small>
                                  </a>
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
                        Page {pageNumber} of {Math.ceil(totalOrderCount / 10)}
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

export default AdminUser;
