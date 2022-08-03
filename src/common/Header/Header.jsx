import React from "react";
import "./Header.css";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = ({ cartItems }) => {
  return (
    <>
      <Head />
      <Search cartItems={cartItems} />
      <Navbar />
    </>
  );
};

export default Header;
