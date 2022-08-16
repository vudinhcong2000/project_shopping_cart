import React, { Fragment } from 'react';
import Tdata from './Tdata';
import Slider from 'react-slick';

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <Slider {...settings}>
                {Tdata.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <div className="box product">
                                <div className="nametop d_flex">
                                    <span className="tleft">{item.para}</span>
                                    <span className="tright">{item.desc}</span>
                                </div>
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
            </Slider>
        </>
    );
};

export default TopCart;
