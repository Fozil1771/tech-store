import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import Slider from "react-slick";


import CardBlock from './cards-ui/CardBlock'
import CustomImg from '../../assets/img/customP.png'

function SectionProducts(props) {

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        infinite: false,
        slidesToScroll: 3,
        initialSlide: 0,
        margin: 5,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 1

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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

        <section className="productsRow">
            <div className="productsRow-banner">
                <div className="productsRow-banner__img">
                    <img src={CustomImg} alt="custom" />
                </div>
                <div className="productsRow-banner__text">
                    <h5>{props.title}</h5>
                    <Link to={`/product/${props.category}`}>See all products</Link>
                </div>
            </div>

            <Slider {...settings}>
                {props.fetched && props.products != null ? props.products.products.map(product => {
                    return product.category === props.category ? (<CardBlock key={Date.now() + Math.random()}
                        dir={product.id}
                        status={props.category}
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
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        fetched: state.fetched,
        fetching: state.fetching
    }

}

export default connect(mapStateToProps)(SectionProducts);
