import React, { Fragment } from "react";

import product_1 from "../../Resource Assignment 03/product_1.png";
import product_2 from "../../Resource Assignment 03/product_2.png";
import product_3 from "../../Resource Assignment 03/product_3.png";
import product_4 from "../../Resource Assignment 03/product_4.png";
import product_5 from "../../Resource Assignment 03/product_5.png";
import "bootstrap/dist/css/bootstrap.css";
import "./CategoriesHome.css";
import { useNavigate } from "react-router-dom";

const CategoriesHome = () => {
  const navigate = useNavigate();

  // Hàm chuyển hướng sang shoppage
  const toShoppageHandler = () => {
    navigate("/shop");
  };
  return (
    <Fragment>
      <div className="container-fluid text-center bg-light categories">
        <div className="row">
          <div className="col">
            <img src={product_1} alt="product_1" onClick={toShoppageHandler} />
          </div>
          <div className="col">
            <img onClick={toShoppageHandler} src={product_2} alt="product_2" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img onClick={toShoppageHandler} src={product_3} alt="product_3" />
          </div>
          <div className="col">
            <img onClick={toShoppageHandler} src={product_4} alt="product_4" />
          </div>
          <div className="col">
            <img onClick={toShoppageHandler} src={product_5} alt="product_5" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CategoriesHome;
