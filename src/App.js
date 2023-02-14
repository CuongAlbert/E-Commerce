import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import HomePage from "./Pages/Home/Home";
import DetailPage from "./Pages/Detail/Detail";
import ShopPage from "./Pages/Shop/Shop";
import CartPage from "./component/Cart/Cart";
import LoginPage from "./Pages/Login/Login";
import Navbar from "./component/Layout/Nav/Navbar";
import Footer from "./component/Layout/Footer/Footer";
import CheckoutPage from "./component/Cart/Checkout";
import Register from "./Pages/Register/Register";
import Chatbox from "./component/Chatbox/Chatbox";

import { FaFacebookMessenger } from "react-icons/fa";
import { popupActions } from "./store/popup";

function App() {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.popup.isShowChatbox);

  // Hàm mở chatbox
  const showChatboxHandler = () => {
    if (isShow === false) {
      dispatch(popupActions.showChatbox());
    } else {
      dispatch(popupActions.hideChatbox());
    }
  };

  // Hàm đóng chatbox
  const closeChatboxHandler = () => {
    dispatch(popupActions.hideChatbox());
  };
  return (
    <Fragment>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/detail/:productId" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <button
        style={{
          fontSize: "3rem",
          border: "none",
          backgroundColor: "none",
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          color: "rgb(59, 59, 243)",
        }}
        onClick={showChatboxHandler}
      >
        <FaFacebookMessenger />
      </button>
      {isShow && <Chatbox closeChatboxHandler={closeChatboxHandler} />}
      <Footer />
    </Fragment>
  );
}

export default App;
