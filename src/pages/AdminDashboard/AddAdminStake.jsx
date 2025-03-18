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
import { encryptRequestData } from "../../utils/encrypt";
import axiosMain from "../../http/axios/axios_main";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AddAdminStake = () => {
  const { user } = useAuth();
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [inputValue, setInputValue] = useState({
    currency: "",
    title: "",
    minAmount: 0,
    maxAmount: 0,
    intrestRate: 0,
  });
  const [disable, setDisable] = useState(false);
  const [formError, setFormError] = useState("");

  const HandleInput = async (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  // Function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split("T")[0]; // Extract YYYY-MM-DD
  };

  useEffect(() => {
    if (numberOfDays) {
      const today = new Date();
      setStartDate(formatDate(today));
      const calculatedEndDate = new Date(today);
      calculatedEndDate.setDate(today.getDate() + parseInt(numberOfDays));
      setEndDate(formatDate(calculatedEndDate));
    }
  }, [numberOfDays]);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const difference = (end - start) / (1000 * 60 * 60 * 24);
      setNumberOfDays(difference);
    }
  }, [startDate, endDate]);

  const HandleSubmit = async () => {
    if (!inputValue?.currency) {
      setFormError("Please enter currency name");
    } else if (!inputValue?.title) {
      setFormError("Please enter stake title");
    } else if (
      !inputValue?.minAmount ||
      parseFloat(inputValue?.minAmount) <= 0
    ) {
      setFormError("Please enter valid min amount");
    } else if (
      !inputValue?.maxAmount ||
      parseFloat(inputValue?.maxAmount) <= 0
    ) {
      setFormError("Please enter valid min amount");
    } else if (!inputValue?.intrestRate) {
      setFormError("Please enter intreset rate");
    } else if (!numberOfDays) {
      setFormError("Please enter valid duration");
    } else if (!startDate) {
      setFormError("Please select stake start date");
    } else if (!endDate) {
      setFormError("Please select stake end date");
    } else {
      setFormError("");
      setDisable(true);
      try {
        const payload = {
          title: inputValue?.title,
          amount: inputValue?.minAmount,
          currency: inputValue?.currency,
          duration: numberOfDays,
          duration_cycle: "Day",
          interest_rate: inputValue?.intrestRate,
          start_date: startDate,
          end_date: endDate,
          max_amount: inputValue?.maxAmount,
        };
        const RowData = await encryptRequestData(payload);
        const submitData = await axiosMain.post(
          "/admin/add",
          { data: RowData },
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${user?.token}`,
            },
          }
        );
        if (submitData?.data?.status) {
          toast.success("Stake created successfully");
          setDisable(false);
          setTimeout(() => {
            navigate("/admin-stakes")
          }, 3000);
        }
      } catch (err) {
        toast.error(err?.response?.data?.status);
        setDisable(false);
      }
    }
  };
  return (
    <>
      <AdminLayout>
        <div>
          <Container fluid>
            <Row className="">
              <Col md="12">
                <h3 className="common-page-heading mb-4">Add New Stake</h3>
                <div className="shadow-admin-box form-inner-admin m-0 mb-1">
                  {/* <Row>
                    <Col lg={4}>
                      <Form.Group className="d-flex align-items-center gap-3 mb-3">
                        <div className=" ">
                          <Form.Label>Coin Image</Form.Label>

                          <div class="upload-photo-box">
                            <Form.Control type="file" placeholder="" />
                            <button disabled="" class="border-btn">
                              Upload
                            </button>
                          </div>
                        </div>
                        <div class="outer-img-box-upload mt-3">
                          <img src="assets/images/admin/user-img.png" alt="" />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row>
                    <Col lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Currency </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ex:- BTC"
                          onChange={HandleInput}
                          value={inputValue?.currency}
                          name="currency"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Stake Title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          onChange={HandleInput}
                          value={inputValue?.title}
                          name="title"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Min Amount</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder=""
                          onChange={HandleInput}
                          value={inputValue?.minAmount}
                          name="minAmount"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Max Amount</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder=""
                          onChange={HandleInput}
                          value={inputValue?.maxAmount}
                          name="maxAmount"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Interest Rate</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="text"
                            placeholder=""
                            onChange={HandleInput}
                            value={inputValue?.intrestRate}
                            name="intrestRate"
                          />
                          <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Duration</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="text"
                            placeholder=""
                            onChange={(e) => {
                              setNumberOfDays(e.target.value);
                            }}
                            value={numberOfDays}
                          />
                          <InputGroup.Text>Days</InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder=""
                          onChange={(e) => {
                            setStartDate(e.target.value);
                          }}
                          value={startDate}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder=""
                          onChange={(e) => {
                            setEndDate(e.target.value);
                          }}
                          value={endDate}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <p className="text-red">{formError}</p>
                  <Row>
                    <Col lg={3}>
                      <button
                        className="common-btn w-100 mt-3"
                        onClick={() => {
                          HandleSubmit();
                        }}
                        disabled={disable}
                      >
                        {disable ? "Processing" : "Submit"}
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </AdminLayout>
    </>
  );
};
