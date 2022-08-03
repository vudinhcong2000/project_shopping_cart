import React from "react";
import FlashCard from "../common/components/flashDeals/FlashCard";
import FlashDeals from "../common/components/flashDeals/FlashDeals";
import Home from "../common/components/mainpage/Home";

const Pages = ({ productItems, cartItems, addToCart }) => {
  return (
    <>
      <Home cartItems={cartItems} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </>
  );
};

export default Pages;
