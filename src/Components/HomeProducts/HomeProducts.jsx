import React from "react";
import "./HomeProducts.css";

import product1 from "../../Assets/HAVIT HV-G92 Gamepad.svg";
import product2 from "../../Assets/AK-900 Wired Keyboard.svg";
import product3 from "../../Assets/IPS LCD Gaming Monitor.svg";
import product4 from "../../Assets/S-Series Comfort Chair .svg";

const HomeProducts = () => {
  const products = [
    {
      id: 1,
      discount: "-40%",
      img: product1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      oldPrice: "$160",
      rating: 5,
      reviews: 88,
    },
    {
      id: 2,
      discount: "-35%",
      img: product2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      oldPrice: "$1160",
      rating: 4,
      reviews: 75,
      hasCartBtn: true,
    },
    {
      id: 3,
      discount: "-30%",
      img: product3,
      name: "IPS LCD Gaming Monitor",
      price: "$370",
      oldPrice: "$400",
      rating: 5,
      reviews: 99,
    },
    {
      id: 4,
      discount: "-25%",
      img: product4,
      name: "S-Series Comfort Chair",
      price: "$375",
      oldPrice: "$400",
      rating: 5,
      reviews: 99,
    },
  ];

  return (
    <div className="home-products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="card-img">
            <span className="discount">{product.discount}</span>
            <i className="fa-solid fa-heart heart"></i>
            <i className="fa-regular fa-eye eye"></i>
            <img src={product.img} alt={product.name} />
          </div>

          {product.hasCartBtn && (
            <button className="btn-add-cart cartBtn">
              <i className="fa-solid fa-cart-shopping"></i> Add To Cart
            </button>
          )}

          <div className="card-content">
            <p>{product.name}</p>
            <div>
              <span className="price">{product.price}</span>
              <span className="old-price">{product.oldPrice}</span>
            </div>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`fa-solid fa-star ${
                    index >= product.rating ? "rate-not-active" : ""
                  }`}
                ></i>
              ))}
              <span>({product.reviews})</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeProducts;
