import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    GlassMagnifier,

} from "react-image-magnifiers";
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import { addToCart } from '../../redux/actions/actions'
import Footer from '../footer/Footer'
import Services from '../footer/Services'

import { DetailsBody, DetailsProduct } from './SingleProduct.style'
import Zip from '../../../assets/icons/zip.svg'
import aboutBg from '../../../assets/img/info-bg.png';
import qaBg from '../../../assets/img/info-bg2.png';

import rtx from '../../../assets/icons/rtx-icon.svg'
import ddr from '../../../assets/icons/ddr-icon.svg'
import ssd from '../../../assets/icons/sdd-icon.svg'
import intel from '../../../assets/icons/intel-icon.svg'
import FeatureCard from './FeatureCard';
import Breadcrumbs from '../Breadcrumbs';




const SingleProduct = (props) => {

    const [about, setAbout] = useState(true)
    const [details, setDetails] = useState(false)
    const [specs, setSpecs] = useState(false)

    function handleAbout() {
        setAbout(true)
        setDetails(false)
        setSpecs(false)
    }
    function handleDetails() {
        setAbout(false)
        setDetails(true)
        setSpecs(false)
    }
    function handleSpecs() {
        setAbout(false)
        setDetails(false)
        setSpecs(true)
    }

    // retrieving exact product
    let singleProd = props.fetched ? props.products.products.find(product => product.id === Number(props.match.params.id)) : "no data"

    let pathName = props.location.pathname;
    let breadlink = pathName.split('/');

    // const [addItem, setAddItem] = useState(1)
    const handleAddToCart = (id) => {
        props.addToCart(id);
    }

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,

    };

    return (

        <>
            <DetailsProduct className="page">
                <div>
                    <div className="lines">
                        <hr />
                    </div>
                    <div className="page-nav">
                        <ul className="page-nav__tab">
                            <li onClick={handleAbout} className={`tab-links ${about ? 'active' : ''}`}>About Product</li>
                            <li onClick={handleDetails} className={`tab-links ${details ? 'active' : ''}`}>Details</li>
                            <li onClick={handleSpecs} className={`tab-links ${specs ? 'active' : ''}`}>Specs</li>
                        </ul>
                        <div className="page-nav__buy">
                            <div className="page-nav__counter">
                                <p>On sales from <strong>{singleProd.price}$</strong></p>
                            </div>
                            <div className="page-nav__add">
                                <button onClick={() => { handleAddToCart(singleProd.id) }} className="btn btn-secondary">Add to Cart</button>
                                <Link to="/payment" className="btn btn-pay">Paypal</Link>
                            </div>
                        </div>
                    </div>
                    <div className="lines">
                        <hr />
                    </div>
                </div>

                <div className="product-body">
                    <Breadcrumbs breadCrumblink={breadlink} />
                    <div className="product-info">
                        <div className="product-info__content">
                            <div className="description tab-content">



                                <h3 className="description-title">{singleProd.name}</h3>
                                <p className="description-review" onClick={() => alert('in development mode')}>Be the first to review this product</p>
                                {
                                    about ? <p className="description-text">{singleProd.description}</p>
                                        : details ? <p className="description-detail">{singleProd.specs}</p>
                                            : <div className="description-specs">
                                                <div>
                                                    <p>CPU</p>
                                                    <span>N/A</span>
                                                </div>
                                                <div>
                                                    <p>Featured</p>
                                                    <span>N/A</span>
                                                </div>
                                                <div>
                                                    <p>I/O Ports</p>
                                                    <span>N/A</span>
                                                </div>
                                            </div>
                                }



                                <div className="product-colors">
                                    <span className="red active"></span>
                                    <span className="white"></span>
                                    <span className="black"></span>
                                </div>
                                <div className="contact-us">
                                    <span>Have a Question? </span>
                                    <Link to="/contact-us">Contact Us</Link>
                                </div>
                            </div>
                            <div className="more-info" onClick={() => alert('in development mode')}>
                                + More information
                            </div>
                        </div>
                        <div className="product-info__gallery">
                            <div className="product-image">
                                <GlassMagnifier
                                    imageSrc={singleProd.mainImage}
                                    imageAlt={singleProd.name}
                                    magnifierBorderColor='gray'
                                    magnifierSize="30%"
                                    className="magnifier"
                                />
                            </div>
                            <div className="zip">
                                <div className="zip-logo">
                                    <img src={Zip} alt="zip" />
                                </div>
                                <span className="v-line">|</span>
                                <p className="zip-text"><span className="zip-text-bold">own</span> it now, up to 6 months interest free <Link to="/zip">learn more</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

            </DetailsProduct>
            <DetailsBody>
                <div className="product-about">
                    <div className="product-about__img">
                        <img src={aboutBg} alt="" />
                    </div>
                    <div className="product-about__slider">
                        <Slider {...settings}>
                            <div className="slider-content">
                                <h3>Outplay the Competittion</h3>
                                <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                                <p>*Performance compared to i7-9700. Specs varies by model.</p>
                            </div>
                            <div className="slider-content">
                                <h3>Outplay the Competittion</h3>
                                <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                                <p>*Performance compared to i7-9700. Specs varies by model.</p>
                            </div>
                            <div className="slider-content">
                                <h3>Outplay the Competittion</h3>
                                <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                                <p>*Performance compared to i7-9700. Specs varies by model.</p>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="product-qa">
                    <div className="product-qa__img">
                        <img src={qaBg} alt="qa_image" />
                    </div>
                    <div className="qa-link">
                        <div className="qa-link-block">
                            <Link><span>Product Support</span> <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                        <div className="qa-link-block">
                            <Link><span>FAQ</span> <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                        <div className="qa-link-block">
                            <Link><span>Our Buyer Guide</span> <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                </div>
                <div className="product-features">
                    <div className="wrapper">
                        <div className="product-features__content">
                            <h4>Features</h4>
                            <p>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
                        </div>
                        <div className="product-features__cards">
                            <FeatureCard icon={intel} text={"Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience."} />

                            <FeatureCard icon={rtx} text={"The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs."} />

                            <FeatureCard icon={ddr} text={"Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD."} />

                            <FeatureCard icon={ssd} text={"Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience."} />


                        </div>
                    </div>
                </div>
            </DetailsBody>
            <Services />
            <Footer />
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        products: state.products,
        fetched: state.fetched,
        fetching: state.fetching
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
