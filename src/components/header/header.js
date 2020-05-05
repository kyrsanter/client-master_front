import React from "react";
import jwtDecode from 'jwt-decode';
import './header.css';
import Navbar from "../navbar";

const Header = (props) => {
    let token = localStorage.getItem('user');
    let hasMyPageLink = Boolean(token);
    let id;
    if (hasMyPageLink) {
        id = jwtDecode(token).userId;
    }
    return (
        <header className='header'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-12">
                        <Navbar id={id}/>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;