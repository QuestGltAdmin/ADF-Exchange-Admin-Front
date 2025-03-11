import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import ShowHideIcon from "../../Components/show-hide-icon";
import { login, verifyOtp } from "../../actions/admin";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    otp: "",
  });
  const [screen, setScreen] = useState("login");
  const [errors, setErrors] = useState({});

  const handleChange = (key, val) => {
    setUserData({ ...userData, [key]: val });
    setErrors({ ...errors, [key]: "" });
  };

  const validateLoginData = () => {
    const newErrors = {};

    if (!userData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!userData.password) {
      newErrors.password = "Password is required.";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return !Object.keys(newErrors).length;
  };

  const handleLogin = async () => {
    if (!validateLoginData()) return;

    const response = await login(userData.email, userData.password);

    if (response?.status) {
      toast.success("Login successful");

      setScreen("verify-otp");
    }
  };

  const handleVerify = async () => {
    const response = await verifyOtp(userData.email, userData.otp);

    if (response?.status) {
      toast.success("Otp verification successful");
    }
  };

  switch (screen) {
    case "login": {
      return (
        <section className="section-login-main">
          <Container>
            <Row>
              <Col lg={6} md={6} className="m-auto">
                <div className="shadow-admin-box">
                  <h3 className="common-page-heading mb-4">Login now</h3>
                  <Row>
                    <Col lg={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="mb-0 email"
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                        />
                        <small className="text-red">{errors.email}</small>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Form.Group className="mb-3 password-eye-field">
                        <Form.Label className="d-flex justify-content-between">
                          <span>Password</span>{" "}
                          
                        </Form.Label>
                        <InputGroup className="outer-input-group ">
                              <Form.Control
                                type={showPassword ? "text" : "password"}
                                className="mb-0"
                                placeholder="Enter your password"
                                name="password"
                                onChange={(e) =>
                                  handleChange("password", e.target.value)
                                }
                              />
                               <InputGroup.Text className="search-space">
                                      <ShowHideIcon
                                    hidden={!showPassword}
                                    onClick={() => setShowPassword(!showPassword)}
                                  />
                              </InputGroup.Text>
                             
                        </InputGroup>
                        
                        <small className="text-red">{errors.password}</small>
                      </Form.Group>
                    </Col>
                  </Row>
                  {/* <Link to="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </Link> */}
                  <div className="text-center btn-box verify-btn">
                    <button
                      className="common-btn w-100 mt-4"
                      type="submit"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                    {/* <p className="mt-4">
                  Don't have an account? <Link to="/signup">Signup</Link>{" "}
                </p> */}
                  </div>
                  {/* <div>
                <button
                  type="button"
                  className="common-btn w-100 mt-4"
                  onClick={() => googleLogin()}
                  disabled={disablegoogle}
                >
                  <img src="assets/img/Google.png" />{" "}
                  {disablegoogle === true ? "Processing" : "Continue with Google"}
                </button>
              </div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
    }
    case "verify-otp": {
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
                        <Form.Control
                          type="email"
                          value={userData.email}
                          disabled
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>OTP*</Form.Label>
                        <div className="otp-field">
                          <OtpInput
                            className=""
                            name="otp"
                            value={userData.otp}
                            renderInput={(props) => <input {...props} />}
                            numInputs={6}
                            onChange={(val) => handleChange("otp", val)}
                          />
                        </div>
                      </Form.Group>

                      {/* <Row>
                <Col lg={8}>
                  {resendTime > 0 && (
                    <p className="resend-otp-line">
                      Resend OTP in <span>{formatResendTime(resendTime)}</span>
                    </p>
                  )}
                </Col>
                <Col lg={4}>
                  <button
                    className="resend-otp-btn"
                    onClick={handleResendOtp}
                    disabled={resendTime > 0 || !email}
                  >
                    Resend OTP
                  </button>
                </Col>
              </Row> */}
                    </Col>
                  </Row>
                  <div className="text-center btn-box verify-btn">
                    <button
                      className="common-btn w-100 mt-4"
                      disabled={userData.otp.length !== 6}
                      onClick={handleVerify}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
    }
  }
};

export default Login;
