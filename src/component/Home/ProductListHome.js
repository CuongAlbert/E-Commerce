import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { popupActions } from "../../store/popup";
import useRequest from "../../Hook/use-request";
import "bootstrap/dist/css/bootstrap.css";
import ProductItem from "../Products/ProductItem";
import Popup from "./Popup";

const ProductListHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isShowPopup = useSelector((state) => state.popup.isShowPopup);

  const [prodData, setProdData] = useState();
  const [prodDetail, setProdDetail] = useState();
  const { sendRequest } = useRequest();

  useEffect(() => {
    //Lấy dữ liệu từ custom hook
    const getData = (data) => {
      setProdData(data);
    };
    sendRequest(getData);
  }, [sendRequest]);

  //Hàm đóng popup
  const closePopupHandler = () => {
    dispatch(popupActions.hidePopup());
  };

  //Hàm mở popup
  const clickHandler = (p) => {
    dispatch(popupActions.showPopup());
    setProdDetail(p);
  };

  //Hàm click vào viewDetail chuyển hướng sang trang Detail sản phẩm
  const viewDetailHandler = () => {
    navigate(`/detail/${prodDetail._id.$oid}`);
  };

  return (
    <div className="container-fluid text-center bg-light products-home">
      <div className="row row-cols-4">
        {prodData &&
          prodData.map((p) => (
            <div className="col" key={p._id.$oid}>
              <ProductItem
                name={p.name}
                price={p.price}
                src={p.img1}
                clickHandler={clickHandler.bind(this, p)} //Lấy dữ liệu từng sản phẩm
              />
            </div>
          ))}
      </div>
      {isShowPopup && prodDetail && (
        <Popup
          show={isShowPopup}
          name={prodDetail.name}
          desc={prodDetail.long_desc}
          src={prodDetail.img1}
          price={Number(prodDetail.price).toLocaleString("de-DE")}
          closePopupHandler={closePopupHandler}
          viewDetailHandler={viewDetailHandler}
        />
      )}
    </div>
  );
};

export default ProductListHome;
