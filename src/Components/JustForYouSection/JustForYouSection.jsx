import React from "react";
import "../WishlistSection/WishlistSection.css"; 
import ProductCard from "../ProductCard/ProductCard";

import product8 from "../../Assets/cart-img8.svg";
import product7 from "../../Assets/cart-img7.svg";
import product6 from "../../Assets/cart-img6.svg";
import product5 from "../../Assets/cart-img5.svg";

const JustForYouSection = ({ products, cartItems, onAddToCart }) => {
  return (
    <div className="body-container">
      <div className="content-area">
        <div className="carts-nav">
          <div className="just-for-you">Just For You</div>
          <button className="btn2">See All</button>
        </div>

        <div className="product-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              inCart={cartItems.includes(product.id)}
              onAddToCart={() => onAddToCart(product.id)}
              showView
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JustForYouSection;
