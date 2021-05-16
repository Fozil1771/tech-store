import React from 'react'
import Slider from "react-slick";

import MSI from '../../assets/brands/msi.svg'
import ADATA from '../../assets/brands/adata.svg'
import HP from '../../assets/brands/hp.svg'
import ROCCAT from '../../assets/brands/roccat.svg'
import THERAMLTAKE from '../../assets/brands/theramltake.svg'
import RAZER from '../../assets/brands/razer.svg'
import GIGABYTE from '../../assets/brands/gigabyte.svg'

const Brands = () => {
    const settings = {
        dots: false,

        slidesToShow: 6,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToScroll: 1,
        margin: 5,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 1

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="brands">
            <Slider {...settings}>
                <div>
                    <img src={ROCCAT} alt="ROCCAT" />
                </div>
                <div>
                    <img src={ADATA} alt="ADATA" />
                </div>
                <div>
                    <img src={HP} alt="HP" />
                </div>
                <div>
                    <img src={MSI} alt="MSI" />
                </div>
                <div>
                    <img src={THERAMLTAKE} alt="THERAMLTAKE" />
                </div>
                <div>
                    <img src={RAZER} alt="RAZER" />
                </div>
                <div>
                    <img src={GIGABYTE} alt="GIGABYTE" />
                </div>
            </Slider>
        </div>
    )
}

export default Brands;
