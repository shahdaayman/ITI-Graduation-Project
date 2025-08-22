import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import HomePage from "./Pages/HomePage";
import WishlistPage from "./Pages/WishlistPage";

import product1 from "./Assets/cart-img1.svg";
import product2 from "./Assets/cart-img2.svg";
import product3 from "./Assets/cart-img3.svg";
import product4 from "./Assets/cart-img4.svg";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, title: "Gucci duffle bag", price: "$960", oldPrice: "$1160", img: product1, discount: "-35%" },
    { id: 2, title: "RGB liquid CPU Cooler", price: "$1960", img: product2 },
    { id: 3, title: "GP11 Shooter USB Gamepad", price: "$550", img: product3 },
    { id: 4, title: "Quilted Satin Jacket", price: "$750", img: product4 },
  ]);

  const handleAddToCart = (productId) => {
    if (cartItems.includes(productId)) {
      setCartItems(cartItems.filter((id) => id !== productId));
    } else {
      setCartItems([...cartItems, productId]);
    }
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
    setCartItems(cartItems.filter((id) => id !== productId)); 
  };

  return (
    <Router>
      <Header cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/wishlist"
          element={
            <WishlistPage
              products={products}
              cartItems={cartItems}
              onAddToCart={handleAddToCart}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
