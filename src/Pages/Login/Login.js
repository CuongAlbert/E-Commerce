import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  FormGroup,
  FloatingLabel,
  Container,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { isEmpty, checkEmail } from "../../store/validate";
import banner1 from "../../Resource Assignment 03/banner1.jpg";

import classes from "./Login.module.css";
import { loginActions } from "../../store/login";

const Login = () => {
  //Lấy dữ liệu mảng người dùng đã đăng ký
  const useArr = JSON.parse(localStorage.getItem("useArr")); 

  const navigate = useNavigate();
  const [passwordValid, setPasswordValid] = useState(true);

  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    // Lấy giá trị ở ô input
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //Trả về mảng để check trùng email (gọi hàm từ store)
    const userEmail = checkEmail(enteredEmail, useArr);

    // Check ô email, nếu có giá trị hợp lệ, check password
    if (!isEmpty(enteredEmail)) {
      if (userEmail.length === 0) {
        alert("You are not sign up. Please SIGN UP now");
        navigate("/register");
      } else if (userEmail[0].password !== enteredPassword) {
        setPasswordValid(false);
        passwordInputRef.current.value = "";
      } else {
        setPasswordValid(true);

        dispatch(loginActions.onLogin(userEmail[0]));

        navigate("/", { replace: true });
      }
    } else {
      alert("please input valid email");
    }
  };

  const classesPassword = `${passwordValid ? "" : classes.invalid}`;

  // Hàm chuyển hướng sang trang register nếu chưa đăng ký
  const signupHandler = () => {
    navigate("/register");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >
      <Container fluid="sm" className={classes.login}>
        <Col>
          <Row>
            <h1>Sign In</h1>
          </Row>
          <Row>
            <Form onSubmit={submitHandler}>
              <FormGroup className="mb-3">
                <FloatingLabel label="Email" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    ref={emailInputRef}
                  />
                </FloatingLabel>
                <FloatingLabel
                  label={passwordValid ? "Password" : "Incorrect password"}
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={passwordInputRef}
                    className={classesPassword}
                  />
                </FloatingLabel>
              </FormGroup>
              <Button type="submit" className={classes.btn} variant="success">
                SIGN IN
              </Button>
              <p>Create an account?</p>
              <Button
                onClick={signupHandler}
                className={classes.btn}
                variant="secondary"
              >
                SIGN UP
              </Button>
            </Form>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Login;
