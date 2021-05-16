import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NotFoundBody = styled.div`
    text-align: center;
    margin: 5rem;

    p {
        font-size: 2rem;
        color: #333;
    }

    div {
        margin-top: 2rem;
        font-size: 1.5rem;
    }
`

function NotFound() {
    return (
        <NotFoundBody>
            <p><strong>404</strong> Found page doesn't exist or Page in <strong>development mode</strong></p>
            <div>Return back to <Link to="/">Home</Link></div>
        </NotFoundBody>
    )
}

export default NotFound;
