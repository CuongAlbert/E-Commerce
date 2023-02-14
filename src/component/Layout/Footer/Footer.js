import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark footer">
      <div className="row align-items-end">
        <div className="col">
          <p className="footer-title">CUSTOMER SERVICES</p>
          <ul>
            <li>
              <a href="#">Help & Contact Us</a>
            </li>
            <li>
              <a href="#">Returns & Refunds Us</a>
            </li>
            <li>
              <a href="#">Online Store</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <p className="footer-title">COMPANY</p>
          <ul>
            <li>
              <a href="#">What we do</a>
            </li>
            <li>
              <a href="#">Available Servies</a>
            </li>
            <li>
              <a href="#">Lastest Posts</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <p className="footer-title">SOCIAL MEDIA</p>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
