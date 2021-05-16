import React from 'react'
import { connect } from 'react-redux'

import Slider from "react-slick";
import { Link } from 'react-router-dom'

import MainBanner from './MainBanner'
import CardBlock from './cards-ui/CardBlock'
// importing images
import Zip from '../../assets/icons/zip.svg'
import SectionProducts from './SectionProducts';
import Brands from './Brands';
import Blogs from './blogs/Blogs';
import Reviews from './footer/Reviews';
import Services from './footer/Services';
import Footer from './footer/Footer';


const MainPage = ({ products, fetched }) => {

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 6,
        infinite: false,
        slidesToScroll: 3,
        initialSlide: 0,
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
        <>
            <main className="main-page page">
                <section className="ad-product">
                    <MainBanner />
                    <h3 className="title">New Products</h3>
                    <Slider {...settings}>
                        {fetched && products != null ? products.products.map(product => {
                            return product.status === 'new' && product.category !== "custom-build" ? (<CardBlock key={Date.now() + Math.random()}
                                dir={product.id}
                                status={product.status}
                                inStock={product.inStock}
                                image={product.image}
                                description={product.description}
                                name={product.name}
                                review={product.reviews}
                                oldPrice={product.oldPrice}
                                price={product.price}
                            />) : ''
                        }) : 'no data'}

                    </Slider>
                </section>
                <div className="zip">
                    <div className="zip-logo">
                        <img src={Zip} alt="zip" />
                    </div>
                    <span className="v-line">|</span>
                    <p className="zip-text"><span className="zip-text-bold">own</span> it now, up to 6 months interest free <Link to="/zip">learn more</Link></p>
                </div>

                {/* section custom-products */}
                <SectionProducts title="Custom Builds" category="custom-build" />
                {/* section laptop-products */}
                <SectionProducts title="Laptops" category="laptop" />
                {/* section pc-products */}
                <SectionProducts title="Portable computers" category="pc" />
                {/* section monitor-products */}
                <SectionProducts title="Monitors" category="monitor" />


                <Brands />

                <Blogs />

                <Reviews />
                <Services />
            </main>

            <Footer />

        </>

    )
}



const mapStateToProps = (state) => {
    return {
        products: state.products,
        fetched: state.fetched
    }
}


export default connect(mapStateToProps)(MainPage);