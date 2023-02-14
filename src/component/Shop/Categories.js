import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useRequest from "../../Hook/use-request";
import ProductItem from "../Products/ProductItem";

const Categories = (props) => {
  const [prodData, setProdData] = useState();
  const { sendRequest } = useRequest();

  const navigate = useNavigate();

  // Lấy dữ liệu API từ custom hook
  useEffect(() => {
    const getData = (data) => {
      setProdData(data);
    };
    sendRequest(getData);
  }, [sendRequest]);

  // Hàm chuyển hướng sang trang detail theo từng sản phẩm
  const clickHandler = (p) => {
    navigate(`/detail/${p._id.$oid}`);
  };

  // Lấy thông tin để hiển thị theo thành phần
  const prodCategory = (category) => {
    if (prodData && category !== "all")
      return prodData.filter((cat) => cat.category === category);
    if (prodData && category === "all") return prodData;
  };

  return (
    <React.Fragment>
      <div className="container-fluid text-center bg-light">
        <div className="row row-cols-3">
          {prodCategory(props.category) &&
            prodCategory(props.category).map((p) => (
              <div className="col" key={p._id.$oid}>
                <ProductItem
                  name={p.name}
                  price={p.price}
                  src={p.img1}
                  clickHandler={clickHandler.bind(this, p)}
                />
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
