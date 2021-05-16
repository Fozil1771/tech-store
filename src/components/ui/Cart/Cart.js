import React, { useState } from 'react'
import { connect } from 'react-redux'
import { removeItem, addQuantity, subtractQuantity } from '../../redux/actions/actions'
import { Link } from 'react-router-dom'
import { CartSection } from './cart.style'
import Breadcrumbs from '../Breadcrumbs'
import Services from '../footer/Services'
import Footer from '../footer/Footer'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faSortDown, faSortUp, faTimes } from '@fortawesome/free-solid-svg-icons'



const Cart = (props) => {

    let pathName = props.location.pathname;
    let breadlink = pathName.split('/');

    const [dropShip, setDropShip] = useState(false)
    const [dropTax, setDropTax] = useState(false)


    const subtractQty = (id) => {
        props.subtractQuantity(id);
    }
    const handleAddToQty = (id) => {
        props.addQuantity(id);
    }
    const handleRemoveItem = (id) => {
        props.removeItem(id);
    }

    let subTotal = props.addedItems.reduce((sum, item) => sum += +item.price * item.addedQuantity, 0)






    return (
        <>
            {
                props.addedItems.length ? <CartSection className="page">
                    <div className="lines">
                        <hr />
                    </div>
                    <div className="section-header">
                        <Breadcrumbs breadCrumblink={breadlink} />

                        <h2 className="section-header-title">Shopping Cart</h2>
                    </div>

                    <div className="cart-content">
                        <div className="cart-content-items">

                            <table>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Sub Total</th>
                                        <th> </th>
                                    </tr>
                                </thead>

                                {props.addedItems.map((item, id) => {
                                    return <tbody key={id}>
                                        <tr>
                                            <td>
                                                <div className="table-product">
                                                    <div className="table-product__img">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                    <div className="table-product__info">
                                                        <h4><Link to={`/product/${item.status}/${item.id}`}>{item.name}</Link></h4>
                                                        <p>{item.description.length > 160 ? item.description.substring(0, 160) + "..." : props.description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="product-price">{(item.price)} $</p>
                                            </td>
                                            <td>
                                                <div className="table-product-counter">
                                                    <span>{item.addedQuantity}</span>
                                                    <div className="counter">
                                                        <button className="counter-btn" onClick={() => { handleAddToQty(item.id) }}><FontAwesomeIcon icon={faSortUp} /></button>
                                                        {item.addedQuantity >= 1 ? <button className="counter-btn" onClick={() => { subtractQty(item.id) }}><FontAwesomeIcon icon={faSortDown} /></button> : <button className="counter-btn"><FontAwesomeIcon icon={faSortDown} /></button>}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="product-price">{(item.price * item.addedQuantity).toFixed(2)} $</p>
                                            </td>
                                            <td>
                                                <button className="btn-remove" onClick={() => { handleRemoveItem(item.id) }}><FontAwesomeIcon icon={faTimes} /></button>
                                            </td>
                                        </tr>

                                    </tbody>
                                })}


                            </table>



                        </div>
                        <div className="cart-content-summary">
                            <h2 className="summary-title">Summary</h2>
                            <div className="dropdown dropdown-ship">
                                <div onClick={() => { setDropShip(!dropShip) }} className="dropdown-label">
                                    <h4>Estimate Shipping and Tax</h4>
                                    <FontAwesomeIcon icon={faSortDown} />
                                </div>

                                <div className={`dropdown-body ${dropShip ? 'active' : ''}`}>
                                    <h5>Enter your destination to get a shipping estimate.</h5>
                                    <div className="input-block">
                                        <label htmlFor="">Country</label>
                                        <input type="text" placeholder="England" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">State/Province</label>
                                        <input type="text" placeholder="State/Province" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Zip/Postal Code</label>
                                        <input type="text" placeholder="Zip/Postal Code" />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Standart Rate</label>
                                        <div className="input-checkbox">
                                            <input type="checkbox" />
                                            <p>Price may vary depending on the item/destination.<br />Shop Staff will contact you. $21.00</p>
                                        </div>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="">Pickup from store</label>
                                        <div className="input-checkbox">
                                            <input type="checkbox" />
                                            <p>1234 Street Adress City Address, 1234 $0.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-discount">
                                <div onClick={() => { setDropTax(!dropTax) }} className="dropdown-label">
                                    <h4>Apply Discount Code</h4>
                                    <FontAwesomeIcon icon={faSortDown} />
                                </div>
                                <div className={`dropdown-body ${dropTax ? 'active' : ''}`}>
                                    <div className="input-block">
                                        <label htmlFor="">Enter discount</label>
                                        <input type="text" placeholder="Enter discount" />
                                    </div>
                                    <button className="btn-default btn-discount">Apply Discount</button>
                                    <br />
                                    <hr style={{ margin: "1rem" }} />
                                    <br />
                                    <div className="total-price">
                                        <div className="total-price__block">
                                            <span><strong>Subtotal</strong></span>
                                            <span><strong>$ {subTotal}</strong></span>
                                        </div>
                                        <div className="total-price__block">
                                            <span><strong>Shipping</strong></span>
                                            <span><strong>$ 21.00</strong></span>
                                        </div>
                                        <p className="sub-text">
                                            (Standard Rate - Price may vary depending on the item/destination. Shop Staff will contact you.)
                                </p>
                                        <div className="total-price__block">
                                            <span><strong>Tax</strong></span>
                                            <span><strong>$ {subTotal / 100}</strong></span>
                                        </div>
                                        <div className="total-price__block">
                                            <span><strong>Order Total</strong></span>
                                            <span><strong>$ {subTotal + subTotal / 100 + 21}</strong></span>
                                        </div>
                                    </div>
                                    <button className="btn-primary">Proceed to Checkout</button>
                                    <button className="btn-pay">Check out with <i>Paypal</i></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </CartSection> :
                    <div className="empty">
                        <h2>Basket is empty :(</h2>
                        <h3>Return to <Link to='/'>shop <FontAwesomeIcon icon={faShoppingBag} /></Link></h3>
                    </div>
            }
            <Services />
            <Footer />
        </>
    )
}

const mapStateToProps = (state) => {

    return {
        addedItems: state.addedItems,
        total: state.total,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)