import React, { Fragment } from 'react';
import Ddata from './Ddata';
import Slider from 'react-slick';

// import "./newarriavals/style.css";

const Dcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autotoplay: true,
        margin: 20,
    };
    return (
        <>
            <Slider {...settings}>
                {Ddata.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <div className="product">
                                <div className="box">
                                    <div className="img">
                                        <img src={item.cover} alt="" width="100%" />
                                    </div>
                                    <h4>{item.name}</h4>
                                    <span>{item.price}</span>
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
            </Slider>
        </>
    );
};

export default Dcard;
