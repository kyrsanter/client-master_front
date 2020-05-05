import React from "react";
import './preloader.css'

export const Preloader = () => {
    return (
        <div className='preloader'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <h1>Loading</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Preloader;