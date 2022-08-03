import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./common/Header/Header";
import Pages from "./pages/Pages";
import Data from "./common/components/flashDeals/Data";
import Cart from "./common/cart/Cart";

function App() {
  //fetch data from database
  const { productItems } = Data;

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const productExits = cartItems.find((item) => item.id === product.id);
    if (productExits) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExits, quantity: productExits.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages
                productItems={productItems}
                addToCart={addToCart}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart addToCart={addToCart} cartItems={cartItems} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
