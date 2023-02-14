import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Banner from "../Home/Banner";

import classes from "./Checkout.module.css";

const Checkout = () => {
  // Lấy dữ liệu giỏ hàng từ Storage
  const currentUserCart = useSelector((state) => state.cart);

  const total = localStorage.getItem("totalBill");

  return (
    <div>
      <Banner />
      <h2 className={classes.title}>BILLING DETAILS</h2>
      <Container bsPrefix className={classes.bill}>
        <Row>
          <Col lg="7" md="12">
            <Form className={classes.form}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>FULL NAME:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Fullname Here!"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>EMAIL:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email Here!"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>PHONE NUMBER:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Your Phone Number Here!"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>ADDRESS:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Address Here!"
                />
              </Form.Group>

              <Button variant="dark" type="submit" className={classes.btn}>
                Place order
              </Button>
            </Form>
          </Col>
          <Col lg="5">
            {/* Render tóm tắt giỏ hàng */}
            <h2 className={classes.title}>YOUR ORDER</h2>
            {currentUserCart.map((item) => (
              <div key={item.id} className={classes.billTotal}>
                <p className={classes.name}>{item.name}</p>
                <div className={classes.billDetail}>
                  <p>{Number(item.price).toLocaleString("de-DE")} VNĐ</p>
                  <span>x</span>
                  <span>{item.amount}</span>
                </div>
              </div>
            ))}
            <div className={classes.billTotal}>
              <h4>TOTAL</h4>
              <h4>{Number(total).toLocaleString("de-DE")} VNĐ</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
