import React from 'react'
import { Link } from 'react-router-dom'

function UserProfile() {
    return (
        <div className="user-temporarily">
            <h1>Seems user not found.</h1>
            <h4>User is out, come back later...</h4>
            <h3>Return to <Link to='/'>Home</Link></h3>

        </div>
    )
}

export default UserProfile
