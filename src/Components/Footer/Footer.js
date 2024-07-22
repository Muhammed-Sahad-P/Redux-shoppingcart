import React from "react";
import { FaInstagram, FaFacebook} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo">
        <p className="footer-logo-text">Shopping Cart</p>
      </div>
      <p className="footer-contact">xyz,abc | +91 1234567890 | shoppingcart@gmail.com</p>
      <div className="footer-social">
        <FaInstagram className="footer-social-icon instagram" />
        <FaFacebook className="footer-social-icon facebook" />
        <FaXTwitter  className="footer-social-icon twitter" />
      </div>
      <p className="footer-copy">&copy; 2024 Shopping Cart</p>
    </div>
  </footer>
  </>
  );
};

export default Footer;
