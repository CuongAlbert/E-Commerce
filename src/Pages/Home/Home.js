import React, { Fragment } from "react";

import Banner from "../../component/Home/Banner";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import ProductListHome from "../../component/Home/ProductListHome";
import CategoriesHome from "../../component/Home/CategoriesHome";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <span className="centered">
        <p className="p">CAREFULLY CREATED COLLECTIONS</p>
        <h1 className="h1">BROWSE OUT CATEGORIES</h1>
      </span>
      <CategoriesHome />
      <ProductListHome />
      <span className="container-fluid bg-light extra-service">
        <div className="row text-center">
          <div className="col">
            <h1 className="h1">FREE SHIPPING</h1>
            <p className="p">Free shipping worldwide</p>
          </div>
          <div className="col">
            <h1 className="h1">24 X 7 SERVICE</h1>
            <p className="p">Free shipping worldwide</p>
          </div>
          <div className="col">
            <h1 className="h1">FESTIVAL OFFER</h1>
            <p className="p">Free shipping worldwide</p>
          </div>
        </div>
        <div className="row infor">
          <div className="col">
            <h1 className="h1">LET'S BE FRIENDS!</h1>
            <p className="p">Nisi nisi tempor consequat laboris nisi</p>
          </div>
          <div className="col input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email address"
              aria-label="Enter your email address"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary bg-dark"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </span>
    </Fragment>
  );
};

export default Home;
