import React from "react";
import './variants-drop-list.css';

const VariantsDropList = (props) => {
    return (
        <ul className='variants-list'>
            {
                props.list.map( item => {
                    return (
                        <li key={item.id} onClick={() => props.selectNeeded(item.name)}>
                            {item.name}
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default VariantsDropList;