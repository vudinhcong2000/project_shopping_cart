import React from "react";

const Cart = ({ cartItems, addToCart }) => {
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItems.length === 0 && (
              <h1 className="no-items product">no items cart</h1>
            )}
            {cartItems.map((item, index) => {
              const productQty = item.price * item.productQty;
              return (
                <div className="cart-list-product d_flex" key={index}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
