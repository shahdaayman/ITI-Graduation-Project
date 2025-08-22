import React from "react";
import WishlistSection from "../Components/WishlistSection/WishlistSection";
import JustForYouSection from "../Components/JustForYouSection/JustForYouSection";

import product5 from "../Assets/cart-img5.svg";
import product6 from "../Assets/cart-img6.svg";
import product7 from "../Assets/cart-img7.svg";
import product8 from "../Assets/cart-img8.svg";

const WishlistPage = ({ products, cartItems, onAddToCart, onDelete }) => {
  const justForYouProducts = [
    { id: 5, title: "ASUS FHD Gaming Laptop", price: "$960", oldPrice: "$1160", discount: "-35%", img: product5, rating: 65 },
    { id: 6, title: "IPS LCD Gaming Monitor", price: "$1160", img: product6, rating: 65 },
    { id: 7, title: "HAVIT HV-G92 Gamepad", price: "$560", img: product7, newTag: "NEW", rating: 65 },
    { id: 8, title: "AK-900 Wired Keyboard", price: "$200", img: product8, rating: 65 },
  ];

  return (
    <div>
      <WishlistSection
        products={products}
        cartItems={cartItems}
        onAddToCart={onAddToCart}
        onDelete={onDelete}
      />
      <JustForYouSection
        products={justForYouProducts}
        cartItems={cartItems}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default WishlistPage;
