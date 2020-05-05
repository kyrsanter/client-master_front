import React from "react";
import {Field} from "redux-form";
import InputField from "../input-field/input-field";
import './profile-service-list.css'

const ProfileServicesList = (props) => {
    return (
        <ul className='profile-service-list'>
            {
                props.services.map( (s)=> {
                    return (
                        <li key={s._id}>
                            <Field name={s.title} id={s.title} label={s.title} type='checkbox' component={InputField}/>
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default ProfileServicesList;