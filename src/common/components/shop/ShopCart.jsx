import React, { useState } from "react";

const ShopCart = ({ shopItems, addToCart }) => {
  //   set count-heart
  const [count, setCount] = useState(0);
  const handelClickCount = () => {
    setCount(count + 1);
  };

  //   console.log(setCount);

  return (
    <>
      {shopItems.map((item, index) => {
        return (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <span className="discount">{item.discount}% Off</span>
                <img src={item.cover} alt="" />
                <div className="product-like">
                  <label>0</label>
                  <br />
                  <i
                    className="fa-regular fa-heart"
                    onClick={handelClickCount}
                  ></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{item.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>{item.price}.00</h4>
                  <button>
                    <i
                      className="fa fa-plus"
                      onClick={() => addToCart(item)}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
