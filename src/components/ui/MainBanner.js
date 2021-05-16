import React from 'react'
import Slider from "react-slick";
import Banner from '../../assets/img/mainImg.png'
import Banner_2 from '../../assets/img/intel-banner.jfif'
import Banner_3 from '../../assets/img/pc-cases.png'
import Banner_4 from '../../assets/img/banner_1.jpg'


function MainBanner() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                <div className="slider-img">
                    <img src={Banner} alt="banner" />
                </div>
                <div className="slider-img">
                    <img src={Banner_2} alt="banner-2" />
                </div>
                <div className="slider-img">
                    <img src={Banner_3} alt="banner-3" />
                </div>
                <div className="slider-img">
                    <img src={Banner_4} alt="banner-4" />
                </div>
            </Slider>
        </div>

    )
}

export default MainBanner
