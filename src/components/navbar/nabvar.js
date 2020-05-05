import React from "react";
import {Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import './navbar.css';
import {logout} from "../../actions/user.action";

const Navbar = (props) => {
    let links;
    let history = useHistory();
    let logoutHandler = () => {
        localStorage.removeItem('user');
        props.logout();
        history.push('/auth/login');
    };
    if (props.id) {
        links = (
            <>
                <li className="white-border-btn">
                    <Link to="/people">Поиск людей</Link>
                </li>
                <li className="white-border-btn">
                    <span className='exit-btn' onClick={logoutHandler}>Выход</span>
                </li>
            </>
        )
    }
    else {
        links = (
            <>
                <li className="white-border-btn">
                    <Link to="/auth/login">Вход</Link>
                </li>
                <li className="white-border-btn">
                    <Link to="/auth/registration">Регистрация</Link>
                </li>
            </>
        )
    }
    return (
        <nav className="navig">
            <div className="white-border-btn">
                {
                    props.id ? <Link to={`/profile/${props.id}`}>Моя страница</Link> : null
                }
            </div>
            <ul className="navbar-list">
                {links}
            </ul>
        </nav>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(null, mapDispatchToProps)(Navbar);
