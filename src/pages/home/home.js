import React from "react";
import {Redirect} from 'react-router-dom';

const Home = () => {

    let token = localStorage.getItem('user');
    if (!token) {
        return <Redirect to='/auth/login'/>
    }
    return (
        <div className="home-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Home page</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;