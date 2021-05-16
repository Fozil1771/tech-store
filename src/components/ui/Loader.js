import React from 'react'
import Loader from "react-loader-spinner";

const Spinner = () => {
    //other logic
    return (
        <div className="spin-box">
            <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                className="spinner"
            />
        </div>
    );
}

export default Spinner;