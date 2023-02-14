import React, { Fragment } from "react";

import { TiShoppingCart } from "react-icons/ti";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import classes from "./Popup.module.css";

const Popup = (props) => {
  // hàm đóng popup
  const closePopupHandler = () => {
    props.closePopupHandler();
  };
  // Hàm khi click nút viewDetail
  const viewDetailHandler = () => {
    props.viewDetailHandler();
  };

  return (
    <Fragment>
      <Modal
        show={props.show}
        onHide={closePopupHandler}
        backdrop="static"
        keyboard={false}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container className={classes.popup}>
            <Row>
              <Col>
                <img src={props.src} alt="alt" className={classes.img} />
              </Col>
              <Col>
                <h3>{props.name}</h3>
                <h5>{props.price} VNĐ</h5>
                <p>{props.desc}</p>

                <Button
                  onClick={viewDetailHandler}
                  size="lg"
                  variant="dark"
                  className={classes.btn}
                >
                  <TiShoppingCart className={classes.icon} />
                  View Detail
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Popup;
