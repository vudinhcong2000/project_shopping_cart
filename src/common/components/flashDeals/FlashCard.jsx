import React, { useState } from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const FlashCard = ({ productItems, addToCart }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  //   set count-heart
  const [count, setCount] = useState(0);
  const handelClickCount = () => {
    setCount(count + 1);
  };

  console.log(setCount);

  return (
    <>
      <Slider {...settings}>
        {productItems.map((item, index) => {
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
      </Slider>
    </>
  );
};

export default FlashCard;
