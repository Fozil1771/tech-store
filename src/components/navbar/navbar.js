import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import NavBody from './NavBody'
import NavHead from './NavTop'

const Navbar = () => {
    return (
        <BrowserRouter>
            <NavHead />
            <NavBody />
        </BrowserRouter>
    )
}


export default Navbar;