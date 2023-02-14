import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const clickHandler = () => {
    props.clickHandler();
  };
  return (
    <div>
      <img
        src={props.src}
        alt="product-img"
        className={classes.img}
        onClick={clickHandler}
      ></img>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.price}>
        {/* Chuyển đổi sang kiểu số Việt Nam */}
        {Number(props.price).toLocaleString("de-DE")} VNĐ
      </p>
    </div>
  );
};

export default ProductItem;
