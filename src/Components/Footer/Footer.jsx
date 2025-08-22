import React from "react";
import "./Footer.css";

import qrCode from "../../Assets/Qr Code.svg";
import googlePlay from "../../Assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg";
import appStore from "../../Assets/download-appstore.svg";
import sendIcon from "../../Assets/icon-send.svg";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="col-1">
          <span className="logo">Exclusive</span>
          <span style={{ fontWeight: 400 }}>Subscribe</span>
          <p>Get 10% off your first order</p>
          <form style={{ width: "180px" }}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">
              <img src={sendIcon} alt="Send" />
            </button>
          </form>
        </div>

        <div className="col-2">
          <span>Support</span>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="col-3">
          <span>Account</span>
          <Link to="/profile">My Account</Link>
          <Link to="/login">Login / Register</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/shop">Shop</Link>
        </div>

        <div className="col-4">
          <span>Quick Link</span>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms Of Use</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="col-5">
          <h1>Download App</h1>
          <p style={{ paddingBottom: 0, marginBottom: 0 }}>
            Save $3 with App New User Only
          </p>

          <div className="download-section">
            <img src={qrCode} alt="QR Code" style={{ width: "75px", marginTop: "20px" }} />
            <div>
              <br />
              <img src={googlePlay} alt="Google Play" />
              <br />
              <img src={appStore} alt="App Store" />
            </div>
          </div>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
