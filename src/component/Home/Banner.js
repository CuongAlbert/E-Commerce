import { Link } from "react-router-dom";

import banner1 from "../../Resource Assignment 03/banner1.jpg";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <img src={banner1} alt="banner.jpg" />
      <div className={classes.content}>
        <p>NEW INSPIRATION 2020</p>
        <h1>20% OFF ON NEW SEASON</h1>
        <button className={classes.btn}>
          <Link to="/shop">Browse collections</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
