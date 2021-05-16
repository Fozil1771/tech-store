import React from 'react'

function FeatureCard(props) {
    return (

        <div className="feature-card">
            <div className="icon">
                <img src={props.icon} alt="feauture-icon" />
            </div>
            <p className="feature-text">{props.text}</p>
        </div>

    )
}

export default FeatureCard;
