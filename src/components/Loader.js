import React from 'react'
import Loader from "react-loader-spinner";

const Spinner = () => {
    //other logic
    return (
        <div className="spin-box">
            <Loader
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={5000} //5 secs
                className="spinner"
            />
        </div>
    );
}

export default Spinner;