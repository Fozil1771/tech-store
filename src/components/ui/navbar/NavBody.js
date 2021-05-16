
import React, { useState } from 'react'
import {
    Link

} from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faUserAstronaut, faEllipsisV } from '@fortawesome/free-solid-svg-icons'


import NavContent from './NavBody.style';
import Logo from '../../../assets/icons/logo.svg'
import Basket from '../../../assets/icons/shopping-cart.svg'
import { connect } from 'react-redux';


const NavBody = ({ match, addedItems }) => {
    const [iconBtn, setIconBtn] = useState(true);
    const [inputFlow, setInputFlow] = useState(false);
    const [inputVal, setInputVal] = useState('');

    const [dot, setDot] = useState(false);

    function showItems() {
        setDot(!dot)
    };

    function handleInputFlow() {
        setInputFlow(!inputFlow)
    };

    function handleIcon() {
        setIconBtn(!iconBtn)
    };

    function onChangeInput(el) {
        setInputVal(el.target.value);
    };

    let cartProductsNum = addedItems.length;






    return (
        <NavContent>
            <div className="nav-brand">
                <Link to="/"><img src={Logo} alt="tech" /></Link>

            </div>


            {
                iconBtn ? (<div className="nav-links">
                    <div className="nav-links__content">
                        {/* <Link to="/laptops" onMouseOut={() => console.log('left')} onMouseMove={() => console.log("hovered")}>Laptops</Link>
                        <Link to="/desktop-pcs">Desktop PCs</Link>
                        <Link to="/networking">Networking Devices</Link>
                        <Link to="/laptops">Printers & Scanners</Link>
                        <Link to="/laptops">PC Parts</Link>
                        <Link to="/laptops">All Other Products</Link>
                        <Link to="/laptops">Repairs</Link> */}
                        <Link className="btn-default" to="/category">Category</Link>
                    </div>
                </div>) :

                    (<div className="nav-search">

                        <input type="text" placeholder="Search entiere store here..." onChange={onChangeInput} value={inputVal} />

                    </div>)
            }

            <button onClick={showItems} className="menu-dot"><FontAwesomeIcon icon={dot ? faTimes : faEllipsisV} /></button>

            <div className={`nav-btns ${dot ? 'active' : ''}`}>
                {/* {iconBtn ? <button onClick={() => { handleIcon(); handleInputFlow() }}><FontAwesomeIcon icon={faSearch} /></button> : <button onClick={handleIcon}><FontAwesomeIcon icon={faTimes} /></button>} */}
                <button className="btn btn-toggle-nav nav-btns__item" onClick={() => { handleIcon(); handleInputFlow() }}><FontAwesomeIcon icon={iconBtn ? faSearch : faTimes} /></button>
                <div className="basket nav-btns__item">

                    <Link to="/cart">
                        <span className="badge">{cartProductsNum}</span>
                        <img src={Basket} alt="Basket" />
                    </Link>
                </div>
                <div className="profile-img nav-btns__item">
                    <Link to="/profile"><FontAwesomeIcon icon={faUserAstronaut} /></Link>
                </div>
            </div>
        </NavContent>
    )
}

const mapStateToProps = (state) => {

    return {
        addedItems: state.addedItems,
    }
}

export default connect(mapStateToProps)(NavBody);