import React from "react";
import {connect} from 'react-redux'
import LoginComponent from "../../components/login/login";
import {userLoginThunk, userRegThunc} from "../../actions/user.action";
import {withRouter} from 'react-router-dom';
import Registartion from "../../components/registration/registration";

const Enter = (props) => {
    let {where} = props.match.params;

    const loginHandler = async (values) => {
        await props.fetchLogin(values, props.history);
    };

    const registrationSubmit = async (values) => {
        props.fetchRegistration(values, props.history);
    };

    const log = (
        <div className="col-lg-6">
            <LoginComponent onSubmit={loginHandler}/>
        </div>
    );

    const reg = (
        <div className="col-lg-6">
            <Registartion onSubmit={registrationSubmit}/>
        </div>
    );

    return (
        <div className="enter">
            <div className="container">
                <div className="row justify-content-center">
                    {
                        where === 'login' ? log : where === 'registration' ? reg : <h2>Ошибка</h2>
                    }
                </div>
            </div>
        </div>
    )
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogin: (loginData, history) => dispatch(userLoginThunk(loginData, history)),
        fetchRegistration: (regData, history) => dispatch(userRegThunc(regData, history))
    }
};

export default connect(null, mapDispatchToProps)(withRouter(Enter))