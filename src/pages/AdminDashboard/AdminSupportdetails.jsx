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
import moment from "moment/moment";
import toast from "react-hot-toast";
import { encryptRequestData } from "../../utils/encrypt";

export const AdminSupportdetails = () => {
  const { user } = useAuth();
  const { state } = useLocation();
  const { id } = state || "";
  console.log("id", id);

  const [showData, setShowDate] = useState([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);
  const getData = async () => {
    try {
      const get_date = await axiosMain.get(`/admin/get-query?query_id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${user?.token}`,
        },
      });
      console.log(get_date);
      if (get_date?.data?.status) {
        setShowDate(get_date?.data?.data);
        setStatus(get_date?.data?.data?.status);
      }
    } catch (err) {}
  };

  const sendMessage = async () => {
    try {
      const payload = {
        description: message,
        query_id: id,
      };
      const RowData = await encryptRequestData(payload);
      const sendData = await axiosMain.post(
        "/admin/admin-response",
        { data: RowData },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user?.token}`,
          },
        }
      );
      if (sendData?.data?.status) {
        getData();
        setMessage("");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };

  const updateStatus = async () => {
    try {
      setDisable(true);
      const payload = {
        query_id: id,
        status: status,
      };
      const RowData = await encryptRequestData(payload);
      const update = await axiosMain.post(
        "/admin/update-query-status",
        { data: RowData },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${user?.token}`,
          },
        }
      );
      if (update?.data?.status) {
        setDisable(false);
        toast?.success("Status updated successfully");
        getData();
      }
    } catch (err) {
      setDisable(false);
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <>
      <AdminLayout>
        <div>
          <Container fluid>
            <Row className="">
              <Col md="7">
                <h3 className="common-page-heading">Support Details</h3>
                <div className="user-details-outer">
                  <Row>
                    <Col lg="12">
                      <div className="user-profile-box align-items-center">
                        <img
                          src={
                            showData?.user_id?.profile
                              ? showData?.user_id?.profile
                              : "/assets/images/admin/user-img.png"
                          }
                          className="img-fluid user-img"
                          alt="icon"
                        />
                        <div>
                          <h4 className="text-orange">
                            {showData?.user_id?.full_name}
                          </h4>

                          <p>{showData?.user_id?.email}</p>
                          <p>
                            +{showData?.user_id?.country_code}{" "}
                            {showData?.user_id?.mobile_no}
                          </p>
                          <p>
                            Created Date :
                            {moment(showData?.createdAt)?.format("lll")}
                          </p>
                          <p className="d-flex justify-content-between mt-2 align-items-center gap-3">
                            Status :{" "}
                            <Dropdown
                              className="dropdwon-border-box"
                              onSelect={(e) => {
                                setStatus(e);
                              }}
                            >
                              <Dropdown.Toggle>{status}</Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item
                                  className="text-red"
                                  eventKey="RESOLVED"
                                >
                                  RESOLVED
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="REJECTED">
                                  REJECTED
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="ACTIVE">
                                  ACTIVE
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="CLOSED">
                                  CLOSED
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <button
                              className="common-btn"
                              onClick={() => {
                                updateStatus();
                              }}
                              disabled={disable}
                            >
                              {disable ? "Processing" : "Update"}
                            </button>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                {/* <div className="shadow-admin-box query-details-box mt-3">
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro soluta maxime esse
                  </h4>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quam neque id unde, esse totam fuga eos soluta
                    error distinctio perferendis at voluptatem suscipit dolore
                    odit blanditiis obcaecati dolorum? Doloremque.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus quam neque id unde, esse totam fuga eos soluta
                    error distinctio perferendis at voluptatem suscipit dolore
                    odit blanditiis obcaecati dolorum? Doloremque.
                  </p>
                  <p>
                    <img
                      src="/assets/images/admin/user-img.png"
                      className="img-fluid"
                      alt="query image"
                    />
                  </p>
                </div> */}
              </Col>
              <Col md="5">
                <div className="chat-support-outer">
                  <ul className="chat-list-main">
                    {showData?.query?.map((items, index) => {
                      return (
                        <li
                          className={
                            items?.sender == "User"
                              ? "inner-chat-box"
                              : "inner-chat-box right-chat-list"
                          }
                        >
                          {items?.sender == "User" && (
                            <img
                              src="assets/images/admin/table-img.png"
                              alt=""
                            />
                          )}
                          <div>
                            <div className="chat-text">
                              <p>{items?.message}</p>
                              <p>
                                <small>
                                  {moment(items?.date)?.format("lll")}
                                </small>
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="type-box-main">
                    <Form.Control
                      type="text"
                      placeholder="Type message..."
                      onChange={(e) => {
                        setMessage(e?.target?.value);
                      }}
                      value={message}
                    />
                    <div className="d-flex align-items-center">
                      <button
                        className="common-btn"
                        onClick={() => {
                          if (message) {
                            sendMessage();
                          }
                        }}
                      >
                        Send <img src="assets/images/admin/send.png" alt="" />
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
