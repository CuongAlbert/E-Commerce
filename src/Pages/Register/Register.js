import { useRef, useState } from "react";

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

import { isEmpty, checkEmail, correctPassword } from "../../store/validate";
import banner1 from "../../Resource Assignment 03/banner1.jpg";
import classes from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  // Lấy mảng người dùng từ local, nếu chưa có set mảng rỗng
  const useArr = JSON.parse(localStorage.getItem("useArr"))
    ? JSON.parse(localStorage.getItem("useArr"))
    : [];

  const [formInputValidate, setFormInputValidate] = useState({
    name: true,
    email: true,
    password: true,
    phone: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const phoneInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const emailIsValid =
      checkEmail(enteredEmail, useArr).length === 0 && !isEmpty(enteredEmail);
    const passwordIsValid = correctPassword(enteredPassword);
    const phoneIsValid = !isEmpty(enteredPhone);

    setFormInputValidate({
      name: nameIsValid,
      email: emailIsValid,
      password: passwordIsValid,
      phone: phoneIsValid,
    });

    const formIsValid =
      nameIsValid && emailIsValid && passwordIsValid && phoneIsValid;

    if (!formIsValid) {
      return;
    } else {
      // Thêm giá trị vừa validate thành công vào mảng thông tin người dùng
      useArr.push({
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      });
      // Lưu vào Local Storage
      localStorage.setItem("useArr", JSON.stringify(useArr));

      alert("You have successfully registered. Please login and enjoy!!");

      navigate("/login");
    }
  };

  // Thông báo thông tin chưa được chấp nhận
  const classesName = `${formInputValidate.name ? "" : classes.invalid}`;
  const classesEmail = `${formInputValidate.email ? "" : classes.invalid}`;
  const classesPassword = `${
    formInputValidate.password ? "" : classes.invalid
  }`;
  const classesPhone = `${formInputValidate.phone ? "" : classes.invalid}`;

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${banner1})`,
      }}
    >
      <Container fluid="sm" className={classes.register}>
        <Col>
          <Row>
            <h1>Sign Up</h1>
          </Row>
          <Row>
            <Form onSubmit={submitHandler}>
              <FormGroup className="mb-3">
                <FloatingLabel
                  label={
                    formInputValidate.name
                      ? "Full Name"
                      : "Please input validate value"
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    ref={nameInputRef}
                    className={classesName}
                  />
                </FloatingLabel>
                <FloatingLabel
                  label={
                    formInputValidate.email
                      ? "Email address"
                      : "Email must be not used and has '@' or '.@' character"
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    ref={emailInputRef}
                    className={classesEmail}
                  />
                </FloatingLabel>
                <FloatingLabel
                  label={
                    formInputValidate.password
                      ? "Password"
                      : "Password has atleast 9 characters"
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={passwordInputRef}
                    className={classesPassword}
                  />
                </FloatingLabel>
                <FloatingLabel
                  label={
                    formInputValidate.name
                      ? "Phone"
                      : "Please input validate value"
                  }
                >
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    ref={phoneInputRef}
                    className={classesPhone}
                  />
                </FloatingLabel>
              </FormGroup>
              <Button type="submit" className={classes.btn} variant="secondary">
                SIGN UP
              </Button>
              <Button
                onClick={loginHandler}
                className={classes.btn}
                variant="success"
              >
                LOGIN
              </Button>
            </Form>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Register;
