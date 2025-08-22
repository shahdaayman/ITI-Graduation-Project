import React from "react";
import "../HomeProducts/HomeProducts";

import product21 from "../../Assets/homeproduct21.svg";
import product22 from "../../Assets/homeproduct22.svg";
import product23 from "../../Assets/homeproduct23.svg";
import product24 from "../../Assets/homeproduct24.svg";

const HomeProducts = () => {
  const products = [
    {
      id: 1,
      img: product21,
      name: "The north coat",
      price: "$260",
      oldPrice: "$360",
      rating: 5,
      reviews: 65,
    },
    {
      id: 2,
      img: product22,
      name: "Gucci duffle bag",
      price: "$960",
      oldPrice: "$1160",
      rating: 4,
      reviews: 65,
    },
    {
      id: 3,
      img: product23,
      name: "RGB liquid CPU Cooler",
      price: "$160",
      oldPrice: "$170",
      rating: 5,
      reviews: 65,
    },
    {
      id: 4,
      img: product24,
      name: "Small BookSelf",
      price: "$360",
      rating: 5,
      reviews: 65,
    },
  ];

  return (
    <div className="home-products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="card-img">
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
