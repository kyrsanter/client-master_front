import React from "react";
import {reduxForm, Field} from "redux-form";
import './registration.css';
import InputField from "../input-field/input-field";

const Registartion = (props) => {
    return (
        <form className="login-form reg-form" onSubmit={props.handleSubmit} >
            <Field
                component={InputField}
                name="name"
                id="name"
                type="text"
                label="Введите ваше имя"
                required={true}
            />
            <Field
                component={InputField}
                name="phone"
                id="phone"
                type="text"
                label="Введите ваше телефон"
                required={true}
            />
            <Field
                component={InputField}
                name="pass"
                id="pass"
                type="password"
                required={true}
                label="Введите пароль"
            />
            <Field
                component={InputField}
                name="rpass"
                id="rpass"
                type="password"
                required={true}
                label="Подтвердите пароль"
            />
            <div className="roles-wrapper">
                <Field
                    component={InputField}
                    name="client"
                    id="client"
                    type="checkbox"
                    required={false}
                    label="Клиент"
                />
                <Field
                    component={InputField}
                    name="master"
                    id="master"
                    type="checkbox"
                    required={false}
                    label="Мастер"
                />
            </div>
            <div className="info-block">
                Вы выбрали регистрацию в качестве мастера (человека который предоставляет услуги)
                и клиента (человека, который обращается к мастерам). Если вы не собираетесь
                использовать аккаунт мастера или клиента - снимите метку из ненужного
            </div>
            <div className="button-wrapper">
                <button>Зарегистрироваться</button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'registration-form', multipartForm: true})(Registartion)