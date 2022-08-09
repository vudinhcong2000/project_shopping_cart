import React from "react";
import Annu from "../common/components/annocuments/Annu";
import Discount from "../common/components/discount/Discount";
import FlashCard from "../common/components/flashDeals/FlashCard";
import FlashDeals from "../common/components/flashDeals/FlashDeals";
import Home from "../common/components/mainpage/Home";
import NewArrivals from "../common/components/newarriavals/NewArrivals";
import Shop from "../common/components/shop/Shop";
import TopCate from "../common/components/top/TopCate";
import Wrapper from "../common/components/wrapper/Wrapper";

const Pages = ({ productItems, cartItems, addToCart, shopItems }) => {
  // console.log(productItems);
  return (
    <>
      <Home cartItems={cartItems} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annu />
      <Wrapper />
    </>
  );
};

export default Pages;
