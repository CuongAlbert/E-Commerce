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
            <li
              onClick={clickHandler}
              className={category === "all" ? classes.active : undefined}
            >
              All
            </li>
            <h3 className={classes.title}>IPHONE & MAC</h3>
            <li
              onClick={clickHandler}
              className={category === "iphone" ? classes.active : undefined}
            >
              IPhone
            </li>
            <li
              onClick={clickHandler}
              className={category === "ipad" ? classes.active : undefined}
            >
              Ipad
            </li>
            <li
              onClick={clickHandler}
              className={category === "macbook" ? classes.active : undefined}
            >
              Macbook
            </li>
            <h3 className={classes.title}>WIRELESS</h3>
            <li
              onClick={clickHandler}
              className={category === "airpod" ? classes.active : undefined}
            >
              Airpod
            </li>
            <li
              onClick={clickHandler}
              className={category === "watch" ? classes.active : undefined}
            >
              Watch
            </li>
            <h3 className={classes.title}>OTHERS</h3>
            <li
              onClick={clickHandler}
              className={category === "mouse" ? classes.active : undefined}
            >
              Mouse
            </li>
            <li
              onClick={clickHandler}
              className={category === "keyboard" ? classes.active : undefined}
            >
              Keyboard
            </li>
            <li
              onClick={clickHandler}
              className={category === "other" ? classes.active : undefined}
            >
              Other
            </li>
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
