import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ShowHideIcon from "../../Components/show-hide-icon";
import toast from "react-hot-toast";
import axiosMain from "../../http/axios/axios_main";
import { encryptRequestData } from "../../utils/encrypt";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [disable, setDisable] = useState(false);

  const HandleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const HandleLogin = async () => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!regex.test(inputValue?.email)) {
      setFormError("Please enter valid email");
    } else if (!inputValue?.password) {
      setFormError("Please enter your password");
    } else {
      setDisable(true);
      setFormError("");
      const payload = {
        email: inputValue?.email,
        password: inputValue?.password,
      };
      const RowData = await encryptRequestData(payload);
      try {
        const sendData = await axiosMain.post("/admin/login", {
          data: RowData,
        });
        if (sendData?.data?.status) {
          toast.success("Admin login successfully. Please verify otp");
          setDisable(false);
          setTimeout(() => {
            navigate("/verify-otp", { state: { data: inputValue?.email } });
          }, 3000);
        }
      } catch (err) {
        setDisable(false);
        toast.error(err?.response?.data?.message);
      }
    }
  };
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
                      onChange={HandleInput}
                      value={inputValue.email}
                    />
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
                        onChange={HandleInput}
                        value={inputValue.password}
                      />
                      <InputGroup.Text className="search-space">
                        <ShowHideIcon
                          hidden={!showPassword}
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <p>{formError}</p>
              <div className="text-center btn-box verify-btn">
                <button
                  className="common-btn w-100 mt-4"
                  type="submit"
                  onClick={() => {
                    HandleLogin();
                  }}
                  disabled={disable}
                >
                  {disable ? "Processing" : "Login"}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
