import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../component/Home/Banner";
import Categories from "../../component/Shop/Categories";
import classes from "./Shop.module.css";

const Shop = () => {
  const [category, setCategory] = useState("all");

  const clickHandler = (e) => { 
    // Bắt nội dung khi click vào sidebar
    setCategory(e.target.textContent.toLowerCase());
  };
  return (
    <React.Fragment>
      <Banner />
      <Container fluid className={classes.shop}>
        <Row>
          <Col sm={2}>
            <h3>CATEGORIES</h3>
            <ul>APPLE</ul>
            <li onClick={clickHandler}>All</li>
            <h3 className={classes.title}>IPHONE & MAC</h3>
            <li onClick={clickHandler}>IPhone</li>
            <li onClick={clickHandler}>Ipad</li>
            <li onClick={clickHandler}>Macbook</li>
            <h3 className={classes.title}>WIRELESS</h3>
            <li onClick={clickHandler}>Airpod</li>
            <li onClick={clickHandler}>Watch</li>
            <h3 className={classes.title}>OTHERS</h3>
            <li onClick={clickHandler}>Mouse</li>
            <li onClick={clickHandler}>Keyboard</li>
            <li onClick={clickHandler}>Other</li>
          </Col>
          <Col sm={10}>
            <Categories category={category} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Shop;
