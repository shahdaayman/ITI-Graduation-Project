import React from "react";
import "./HomeProducts4.css";
import { FaHeart, FaEye, FaShoppingCart, FaStar } from "react-icons/fa";

import product41 from "../../Assets/homeproduct41.svg";
import product42 from "../../Assets/homeproduct42.svg";
import product43 from "../../Assets/homeproduct43.svg";
import product44 from "../../Assets/homeproduct44.svg";

const products = [
  {
    id: 1,
    name: "Kids Electric Car",
    price: 960,
    oldPrice: 1160,
    image: product41, 
    isNew: true,
    rating: 5,
    reviews: 65,
    colors: ["#FB1314", "#DB4444"],
  },
  {
    id: 2,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    oldPrice: null,
    image: product42,
    isNew: false,
    rating: 5,
    reviews: 35,
    colors: ["#EEFF61", "#DB4444"],
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    oldPrice: null,
    image: product43,
    isNew: true,
    rating: 5,
    reviews: 55,
    colors: ["#000000", "#DB4444"],
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 660,
    oldPrice: null,
    image: product44,
    isNew: false,
    rating: 4,
    reviews: 55,
    colors: ["#000000", "#DB4444"],
  },
];

const HomeProducts = () => {
  return (
    <div className="home-products">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <div className="card-img">
            {item.isNew && <span className="discount2">NEW</span>}
            <div className="heart">
              <FaHeart />
            </div>
            <div className="eye">
              <FaEye />
            </div>
            <img src={item.image} alt={item.name} />
          </div>

          <div className="card-content">
            <h3>{item.name}</h3>
            <div>
              <span className="price">${item.price}</span>
              {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
            </div>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < item.rating ? "" : "rate-not-active"}
                />
              ))}
              <span>({item.reviews})</span>
            </div>
            <div className="color-options">
              {item.colors.map((color, index) => (
                <span
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeProducts;
