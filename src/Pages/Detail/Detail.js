import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useRequest from "../../Hook/use-request";
import { cartActions } from "../../store/cart";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import classes from "./Detail.module.css";
import ProductItem from "../../component/Products/ProductItem";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { sendRequest } = useRequest();
  const dispatch = useDispatch();

  const [prodData, setProdData] = useState();
  const [relatedProd, setRelatedProd] = useState();
  const [prodDetail, setProdDetail] = useState();
  const [srcView, setSrcView] = useState();
  const [quantity, setQuantity] = useState(1); //Set giá trị số lượng ban đầu là 1

  const currentUserCart = useSelector((state) => state.cart);
  const isLogin = useSelector((state) => state.login.isLogin);

  const { productId } = params;

  // Lấy data từ API, dùng custom hook
  useEffect(() => {
    const getData = (data) => {
      setProdData(data);
    };
    sendRequest(getData);
  }, [sendRequest]);

  useEffect(() => {
    if (prodData) {
      const [detail] = prodData.filter((p) => p._id.$oid === productId); //Lấy thông tin chi tiết sản phẩm theo Id

      // Lọc các sản phẩm cùng loại 
      setRelatedProd(
        prodData
          .filter((p) => p.category === detail.category)
          .filter((p) => p._id.$oid !== productId)
      );
      setProdDetail(detail);
    }
  }, [prodData, productId]);

  // Hàm xem ảnh
  const clickViewImg = (e) => {
    setSrcView(e.target.src);
  };

  // Hàm chuyển hướng khi click vào sản phẩm
  const clickHandler = (p) => {
    navigate(`/detail/${p._id.$oid}`);
  };

  // Hàm tăng số lượng
  const increaseHandler = () => {
    setQuantity(quantity + 1);
  };
 
  //Hàm giảm số lượng
  const decreaseHandler = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCartHandler = () => {
    const currentUserItem = {
      name: prodDetail.name,
      amount: quantity,
      id: prodDetail._id.$oid,
      price: prodDetail.price,
      img: prodDetail.img1,
    };

    // Nếu đang login, mảng chứa giỏ hàng đang rỗng thì add luôn
    if (isLogin === true) {
      if (currentUserCart.length === 0) {
        dispatch(cartActions.addCart(currentUserItem));
      } else {
        let checkId = currentUserCart.findIndex(
          (item) => item.id === currentUserItem.id
        );
        console.log({ checkId });
        console.log("checkId >= 0", checkId);

        // Nếu giỏ hàng đã có sp, check xem sp đang add đã có trong giỏ hàng chưa, nếu có thì update số lượng, chưa có thì add
        if (checkId >= 0) {
          dispatch(cartActions.updateCart(currentUserItem));
        } else {
          dispatch(cartActions.addCart(currentUserItem));
        }
      }
      // Thông báo đã add thành công sản phẩm vào giỏ hàng
      alert("This product has been add to your cart");
    } else return;
  };
  return (
    <React.Fragment>
      {prodDetail && (
        <div>
          <Container fluid className={classes.detail}>
            <Row>
              <Col sm={1}>
                <img src={prodDetail.img1} onClick={clickViewImg} alt="" />
                <img src={prodDetail.img2} onClick={clickViewImg} alt="" />
                <img src={prodDetail.img3} onClick={clickViewImg} alt="" />
                <img src={prodDetail.img4} onClick={clickViewImg} alt="" />
              </Col>
              <Col sm={4}>
                <img src={srcView ? srcView : prodDetail.img1} alt="" />
              </Col>
              <Col sm={6}>
                <h2>{prodDetail.name}</h2>
                <h4>{Number(prodDetail.price).toLocaleString("de-DE")} VNĐ</h4>
                <p>{prodDetail.short_desc}</p>
                <h5>CATEGORY: {prodDetail.category}</h5>
                <div className={classes.addToCart}>
                  <h3>QUANTITY</h3>
                  <button onClick={decreaseHandler} className={classes.btn}>
                    <AiFillCaretLeft />
                  </button>
                  <h5>{quantity}</h5>
                  <button onClick={increaseHandler} className={classes.btn}>
                    <AiFillCaretRight />
                  </button>
                  <Button size="lg" variant="dark" onClick={addToCartHandler}>
                    Add to cart
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
          <h4 className={classes.title}>DESCRITION</h4>
          <h3 className={classes.pro_desc}>PRODUCT DESCRITION</h3>
          <p className={classes.desc}>{prodDetail.long_desc}</p>
          <h3 className={classes.related_prod}>RELATED PRODUCTS</h3>
          <Container fluid className={classes.relate_container}>
            <Row>
              {relatedProd &&
                relatedProd.map((p) => (
                  <Col sm={2} key={p._id.$oid}>
                    <ProductItem
                      name={p.name}
                      price={p.price}
                      src={p.img1}
                      clickHandler={clickHandler.bind(this, p)}
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default Detail;
