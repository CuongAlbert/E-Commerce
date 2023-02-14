import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";

import Banner from "../Home/Banner";
import classes from "./Cart.module.css";

const Cart = () => {
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Lấy mảng sản phẩm trong giỏ từ store
  const currentUserCart = useSelector((state) => state.cart);

  useEffect(() => {
    // Tính tổng giá trị sản phẩm
    let subTotal = 0;
    for (let i = 0; i < currentUserCart.length; i++) {
      subTotal =
        subTotal + currentUserCart[i].amount * currentUserCart[i].price;
    }
    setTotal(subTotal);
  }, [currentUserCart]);

  // Lưu vào storage
  localStorage.setItem("totalBill", total);

  // Hàm xóa sản phẩm khỏi cart
  const deleteItemHandler = (item) => {
    const del = window.confirm("Do you wanna delete this product?");
    if (del === true) {
      dispatch(cartActions.deleteCart(item));
    } else return;
  };

  let amount;
  //Hàm giảm số lượng trong cart
  const deAmountHandler = (item) => {
    console.log(item);

    if (item.amount > 1) {
      amount = item.amount - 1;
      item = { ...item, amount };
      // Update lại giỏ hàng
      dispatch(cartActions.updateCart(item));
    } else return;
  };

  // Hàm tăng số lượng trong cart
  const inAmountHandler = (item) => {
    amount = item.amount + 1;
    item = { ...item, amount };
    // Update lại giỏ hàng
    dispatch(cartActions.updateCart(item));
  };

  const shoppingHandler = () => {
    navigate("/shop");
  };
  const checkoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <Banner />
      <h1>CART SHOPPING</h1>
      <Container bsPrefix className={classes.cart}>
        <Row>
          <Col lg="9" md="12">
            <Table className={classes.table} hover>
              <thead>
                <tr>
                  <th>IMAGE</th>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {currentUserCart &&
                  currentUserCart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.img} alt="" />
                      </td>
                      <td>
                        <h5>{item.name}</h5>
                      </td>
                      <td>{Number(item.price).toLocaleString("de-DE")}</td>
                      <td>
                        <div className={classes.amount}>
                          <button onClick={deAmountHandler.bind(this, item)}>
                            <AiFillCaretLeft />
                          </button>

                          {item.amount}
                          <button onClick={inAmountHandler.bind(this, item)}>
                            <AiFillCaretRight />
                          </button>
                        </div>
                      </td>
                      <td>
                        {Number(item.amount * item.price).toLocaleString(
                          "de-DE"
                        )}
                      </td>
                      <td>
                        <button
                          className={classes.remove}
                          onClick={deleteItemHandler.bind(this, item)}
                        >
                          <RiDeleteBin5Line />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            <div className={classes.redirect}>
              <Button
                className={classes.btn}
                onClick={shoppingHandler}
                variant="info"
              >
                <HiOutlineArrowNarrowLeft />
                Continue shopping
              </Button>
              <Button
                className={classes.btn}
                onClick={checkoutHandler}
                variant="info"
              >
                Proceed to checkout
                <HiOutlineArrowNarrowRight />
              </Button>
            </div>
          </Col>
          <Col lg="3" className={classes.cart_total}>
            <h2 className={classes.title}>CART TOTAL</h2>
            <span className={classes.total}>
              <h3>SUBTOTAL</h3>
              <h5>{Number(total).toLocaleString("de-DE")} VNĐ</h5>
            </span>
            <hr />
            <span className={classes.total}>
              <h3>TOTAL</h3>
              <h4>{Number(total).toLocaleString("de-DE")} VNĐ</h4>
            </span>

            <div className={classes.coupon}>
              <input
                placeholder="Enter your coupon"
                label="coupon"
                type="text"
              ></input>
              <Button variant="dark">Apply Coupon</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
