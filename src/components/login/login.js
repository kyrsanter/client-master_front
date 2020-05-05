import React from "react";
import {reduxForm, Field} from "redux-form";
import './login.css';
import InputField from "../input-field/input-field";

const LoginComponent = (props) => {
    return (
            <form className="login-form" onSubmit={props.handleSubmit}>
                <Field component={InputField}
                       name="phone"
                       type="text"
                       required={true}
                       id="phone"
                       label="Введите ваш телефон" />
                <Field component={InputField}
                       name="pass"
                       type="password"
                       required={true}
                       id="pass"
                       label="Введите пароль" />
                <div className="button-wrapper">
                    <button>Войти</button>
                </div>
            </form>
    )
};

export default reduxForm({form: 'login-form'})(LoginComponent)