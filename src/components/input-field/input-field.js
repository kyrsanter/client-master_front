import React from "react";

import './input-field.css';

const InputField = ({input, meta, type, label, ...props}) => {
    let dataType = type === 'checkbox' ? 'checkbox' : null;
    //console.log(props.text, 'selectedRegion')
    return (
        <div className="input-field">
            <input type={type} {...input} {...props} value={props.text} />
            <label data-type={dataType} htmlFor={props.id}>
                {
                    type=== 'checkbox' ? (<div className="ch-wrap">
                        <span></span>
                    </div>) :null
                }
                {label}
            </label>
        </div>
    )
};

export default InputField;