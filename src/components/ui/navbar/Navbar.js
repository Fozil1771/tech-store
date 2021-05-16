import React from 'react'


import NavBody from './NavBody'
import NavHead from './NavTop'

const Navbar = (props) => {
    return (
        <React.Fragment>
            <NavHead />
            <NavBody />
        </React.Fragment>
    )
}


export default Navbar;