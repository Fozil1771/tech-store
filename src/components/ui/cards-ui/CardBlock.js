import React from 'react'
import { Link } from 'react-router-dom'
import InStock from '../../../assets/icons/tick.svg'
import OutStock from '../../../assets/icons/phone.svg'
import StarFill from '../../../assets/icons/star-fill.svg'
import StarEmpty from '../../../assets/icons/star-empty.svg'
import { ProdCard } from './cards.style'


const CardBlock = (props) => {

    return (
        <ProdCard>
            <Link to={`/product/${props.status}/${props.dir}`} >
                <div className="card-block-img">
                    <div className="card-block-img-status">
                        {props.inStock ? <span className="instock"><img src={InStock} alt="instock" /> in stock</span> : <span className="outstock"><img src={OutStock} alt="outstock" /> out of stock</span>}
                    </div>
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="card-block-reviews">
                    <div className="card-block-reviews-stars">
                        <img src={StarFill} alt="star-fill" />
                        <img src={StarFill} alt="star-fill" />
                        <img src={StarFill} alt="star-fill" />
                        <img src={StarFill} alt="star-fill" />
                        <img src={StarEmpty} alt="star-empty" />
                    </div>
                    <span>Reviews ({props.review})</span>
                </div>
                <h5 className="card-block-title">{props.description.length > 45 ? props.description.substring(0, 45) + "..." : props.description}</h5>
                <div>
                    <p className="card-block-priceOld">${props.oldPrice}</p>
                    <p className="card-block-priceNew">${props.price}</p>
                </div>
            </Link>
        </ProdCard>
    )
}


export default CardBlock;


