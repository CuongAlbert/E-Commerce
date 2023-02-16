import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
    // hỏi người dùng trước khi logout
    const logout = window.confirm("Do you wanna logout?");
    if (logout) {
      dispatch(loginActions.onLogout());
      dispatch(cartActions.logoutCart());
    } else return;

    navigate("/login");
  };

  const toLoginPageHandler = () => {
    navigate("/login");
  };

  return (
    <header className={classes["main-header"]}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.btn}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.btn}`
              }
            >
              Shop
            </NavLink>
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
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.btn}`
                }
              >
                <FaLuggageCart className={classes.icon} />
                Cart
              </NavLink>
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
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? `${classes.active}` : `${classes.btn}`
                }
                onClick={toLoginPageHandler}
              >
                <BsPersonFill className={classes.icon} />
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
