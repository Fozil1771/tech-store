
import React, { useState } from 'react'
import {
    Link,
    Switch,
    Route,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'


import NavContent from './NavBody.style';
import Logo from '../../assets/icons/logo.svg'


const NavBody = ({ match }) => {
    const [iconBtn, setIconBtn] = useState(true);
    const [inputFlow, setInputFlow] = useState(false);
    const [inputVal, setInputVal] = useState('');
    console.log(match)


    function handleInputFlow() {
        setInputFlow(!inputFlow)
    };

    function handleIcon() {
        setIconBtn(!iconBtn)
    };

    function onChangeInput(el) {
        setInputVal(el.target.value);
    };

    return (
        <NavContent>
            <div className="nav-brand">
                <img src={Logo} alt="tech" />
            </div>

            <Switch className="nav-links">
                <Route exact path="/">
                    <div className="nav-links__content">
                        <Link to="/laptops">Laptops</Link>
                        <Link to="/desktop-pcs">Desktop PCs</Link>
                        <Link to="/networking">Networking Devices</Link>
                        <Link to="/laptops">Printers & Scanners</Link>
                        <Link to="/laptops">PC Parts</Link>
                        <Link to="/laptops">All Other Products</Link>
                        <Link to="/laptops">Repairs</Link>
                        <Link to="/deals">Our deals</Link>
                    </div>
                </Route>
                <Route exact path="/search">
                    <div className="nav-search">

                        <input type="text" placeholder="Search entiere store here..." onChange={onChangeInput} value={inputVal} />

                    </div>
                    <p>{console.log(inputVal)}</p>
                </Route>
            </Switch>

            <div className="nav-btns">
                {iconBtn ? (<Link
                    to='/search'><FontAwesomeIcon onClick={() => { handleIcon(); handleInputFlow() }} icon={faSearch} /></Link>) : (<Link
                        to='/'><FontAwesomeIcon onClick={handleIcon} icon={faTimes} /></Link>)}
                <FontAwesomeIcon className="nav-btns__item" icon={faShoppingBasket} />
                <div className="profile-img nav-btns__item">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </NavContent>
    )
}

export default NavBody;