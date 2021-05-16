import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumbs(props) {

    return (
        <div className="breadcrumbs">
            {props.breadCrumblink.map((link, id) => {
                let linkUpper = link.charAt(0).toUpperCase() + link.slice(1)
                let linkPath = (link === " " ? "/" : link)
                let lastEl = props.breadCrumblink.slice(-1).pop()
                return <Link key={id} to={linkPath === lastEl ? window.location.pathname : ("/" + linkPath)}>{linkUpper === "" ? "Home" : linkUpper} {'>'} </Link>
            })}

        </div>
    )
}

export default Breadcrumbs;
