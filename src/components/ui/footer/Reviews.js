import React from 'react'
import Slider from 'react-slick'

const Reviews = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,

    };

    return (
        <div className="reviewBlock">
            <Slider {...settings}>
                <div className="codepen-wrapper">
                    <figure className="review">
                        <blockquote className="review__text">
                            My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.
                        </blockquote>
                        <figcaption className="review__person">
                            <img src="http://alexsommers.com/codepen/user-6.jpg" alt="User 1" className="review__photo" />
                            <div className="review__info">
                                <p className="review__info--name">Nikki Smith</p>
                                <p className="review__info--date"> April 26, 2020</p>
                            </div>
                            <div className="review__rating">7.8</div>
                        </figcaption>
                        <div className="leave-review">
                            <button className="btn-default">Leave Us A Review</button>
                        </div>
                    </figure>
                </div>
                <div className="codepen-wrapper">
                    <figure className="review">
                        <blockquote className="review__text">
                            My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.
                        </blockquote>
                        <figcaption className="review__person">
                            <img src="http://alexsommers.com/codepen/user-6.jpg" alt="User 1" className="review__photo" />
                            <div className="review__info">
                                <p className="review__info--name">Nikki Smith</p>
                                <p className="review__info--date"> April 26, 2020</p>
                            </div>
                            <div className="review__rating">7.8</div>
                        </figcaption>
                        <div className="leave-review">
                            <button className="btn-default">Leave Us A Review</button>
                        </div>
                    </figure>
                </div>
                <div className="codepen-wrapper">
                    <figure className="review">
                        <blockquote className="review__text">
                            My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.
                        </blockquote>
                        <figcaption className="review__person">
                            <img src="http://alexsommers.com/codepen/user-6.jpg" alt="User 1" className="review__photo" />
                            <div className="review__info">
                                <p className="review__info--name">Nikki Smith</p>
                                <p className="review__info--date"> April 26, 2020</p>
                            </div>
                            <div className="review__rating">7.8</div>
                        </figcaption>
                        <div className="leave-review">
                            <button className="btn-default">Leave Us A Review</button>
                        </div>
                    </figure>
                </div>
            </Slider>
        </div>
    )
}

export default Reviews;
