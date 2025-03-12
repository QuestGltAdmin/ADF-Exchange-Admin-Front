import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import OTPInput from "otp-input-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginSaga } from "../../store/reducers/authReducer";
import { encryptRequestData } from "../../utils/encrypt";
import axiosMain from "../../http/axios/axios_main";
import toast from "react-hot-toast";

export const VerifyOtp = () => {
  const { state } = useLocation();
  const { data } = state || "";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [disable, setDisable] = useState(false);
  const [formError, setFormError] = useState("");
  const [disableResend, setDisableResend] = useState(false);
  const HandleLogin = async () => {
    if (!data) {
      setFormError("Please go back and login again");
    } else if (otp?.length < 6) {
      setFormError("Please enter valid otp");
    } else {
      setDisable(true);
      setFormError("");
      const payload = {
        email: data,
        otp: otp,
      };
      const RowData = await encryptRequestData(payload);
      try {
        dispatch(userLoginSaga({ RowData, navigate, setDisable }));
      } catch (err) {
        setDisable(false);
        toast.error(err?.response?.data?.message);
      }
    }
  };

  const HandleResend = async () => {
    setDisableResend(true);

    const payload = {
      email: data,
    };
    const RowData = await encryptRequestData(payload);
    try {
      const sendData = await axiosMain.post("/admin/resend-otp", {
        data: RowData,
      });
      if (sendData?.data?.status) {
        toast.success("Otp resend successfully");
        setDisableResend(false);
      }
    } catch (err) {
      setDisableResend(false);
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <section className="section-login-main">
      <Container>
        <Row>
          <Col lg={6} md={6} className="m-auto">
            <div className="shadow-admin-box">
              <h3 className="mb-2">Verify Your Email</h3>
              <p className="verify-line">
                Please enter the code we sent you by email to verify
              </p>
              <Row>
                <Col lg={12}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" value={data} disabled />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>OTP*</Form.Label>
                    <div className="otp-field">
                      <OTPInput
                        value={otp}
                        onChange={setOtp}
                        autoFocus
                        className="otp_box"
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        //   secure
                        name="inputAgentVerifyOtp"
                      />
                    </div>
                  </Form.Group>

                  <Row>
                    <Col lg={4}>
                      <button
                        className="common-btn "
                        onClick={() => {
                          HandleResend();
                        }}
                        disabled={disableResend}
                      >
                        {disableResend ? "Processing" : "Resend OTP"}
                      </button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <p>{formError}</p>
              <div className="text-center btn-box verify-btn">
                <button
                  className="common-btn w-100 mt-4"
                  onClick={() => {
                    HandleLogin();
                  }}
                  disabled={disable}
                >
                  {disable ? "Processing" : "Submit"}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
