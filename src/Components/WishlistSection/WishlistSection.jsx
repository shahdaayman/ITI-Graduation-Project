import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./WishlistSection.css";

const WishlistSection = ({ products, cartItems, onAddToCart, onDelete }) => {
  return (
    <div className="body-container">
      <div className="content-area">
        <div className="carts-nav">
          <h3 className="wishlist-title">Wishlist ({products.length})</h3>
          <button className="btn1">Move All To Bag</button>
        </div>

        <div className="product-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              inCart={cartItems.includes(product.id)}
              onAddToCart={() => onAddToCart(product.id)}
              onDelete={() => onDelete(product.id)}
              showDelete
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistSection;
