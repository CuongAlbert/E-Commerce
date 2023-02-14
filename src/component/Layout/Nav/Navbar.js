import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginActions } from "../../../store/login";
import { cartActions } from "../../../store/cart";
import { FaLuggageCart } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const personalInfor = JSON.parse(localStorage.getItem("personalInfor")); //Lấy dữ liệu người dùng

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin); //lấy giá trị từ store xem người dùng có đang login k

  const logoutHandler = () => {
    dispatch(loginActions.onLogout());
    dispatch(cartActions.logoutCart());

    navigate("/login");
  };

  const toHomePageHandler = () => {
    navigate("/");
  };

  const toShopPageHandler = () => {
    navigate("/shop");
  };

  const toLoginPageHandler = () => {
    navigate("/login");
  };

  return (
    <header className={classes["main-header"]}>
      <nav>
        <ul>
          <li className={classes.btn} onClick={toHomePageHandler}>
            Home
          </li>
          <li className={classes.btn} onClick={toShopPageHandler}>
            Shop
          </li>
        </ul>
      </nav>
      <li className="centered">
        <h1>BOUTIQUE</h1>
      </li>

      <nav>
        {/* Nếu người dùng đang login thì hiển thị */}
        {isLogin === true && personalInfor && (
          <ul>
            <li>
              <FaLuggageCart className={classes.icon} />
              <Link to="/cart" className={classes.btn}>
                Cart
              </Link>
            </li>
            <li className={classes.name}>
              <BsPersonFill className={classes.icon} />
              <p className={classes.btn}>{personalInfor.name}</p>
              <AiFillCaretDown className={classes.icon} />
            </li>
            <li>
              <button className={classes.btn} onClick={logoutHandler}>
                Logout
              </button>
            </li>
          </ul>
        )}

        {/* Nếu người dùng chưa login thì chỉ hiển thị login để đăng nhập */}
        {isLogin === false && (
          <ul>
            <li className={classes.btn} onClick={toLoginPageHandler}>
              <BsPersonFill className={classes.icon} />
              Login
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
