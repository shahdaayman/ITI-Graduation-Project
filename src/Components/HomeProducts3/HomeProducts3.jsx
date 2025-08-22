import React from "react";
import "../HomeProducts/HomeProducts";

import product31 from "../../Assets/homeproduct31.svg";
import product32 from "../../Assets/homeproduct32.svg";
import product33 from "../../Assets/homeproduct33.svg";
import product34 from "../../Assets/homeproduct34.svg";

const HomeProducts = () => {
  const products = [
    {
      id: 1,
      img: product31,
      name: "Breed Dry Dog Food",
      price: "$100",
      rating: 3,
      reviews: 35,
    },
    {
      id: 2,
      img: product32,
      name: "CANON EOS DSLR Camera",
      price: "$360",
      rating: 4,
      reviews: 95,
      hasCartBtn: true,
    },
    {
      id: 3,
      img: product33,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 5,
      reviews: 325,
    },
    {
      id: 4,
      img: product34,
      name: "Curology Product Set ",
      price: "$500",
      rating: 4,
      reviews: 145,
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
