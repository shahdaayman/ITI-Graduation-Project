import React  from "react";
import "./Header.css";
import { FaChevronDown, FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ cartCount = 0, favCount = 0 }) => {


  return (
    <header>
      <div className="top-header">
        <div className="container">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <Link to="/shop">ShopNow</Link>
          <p className="lang">English</p>
          <FaChevronDown />
        </div>
      </div>

      <div className="bottom-header">
        <div className="container">
          <span className="logo">Exclusive</span>

          <nav className="nav">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>

          <form className="search-box">
            <input type="text" placeholder="What are you looking for?" required />
            <button type="submit">
              <FaSearch />
            </button>
          </form>

          <div className="header-icons">
            <div className="icon">
              <Link to="/wishlist">
                <FaHeart />
                <span className="count">{favCount}</span>
              </Link>
            </div>

            <div className="icon">
              <Link to="/cart">
                <FaShoppingCart />
                <span className="count">{cartCount}</span>
              </Link>
            </div>

            <div className="icon">
              <Link to="/profile">
                <FaUser />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
