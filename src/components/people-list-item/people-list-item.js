import React from "react";
import './people-list-item.css';
import avatar from './user.svg'
import {Link} from "react-router-dom";

const PeopleLIstItem = (props) => {
    let {roles, _id, name, phone, photo} = props;
    let hasPhoto = !!photo;
    return (
        <div className="people-list-item">
            <Link to={`/profile/${props._id}`}>
                {
                    hasPhoto ? <img src={`http://127.0.0.1:3333/${props.photo}`} alt=""/> : <img src={avatar} alt=""/>
                }
            </Link>
            <div className="person-details">
                <div className="roles">
                    <div className="roles-item">
                        {
                            roles.master ? <span className='green'></span> : <span></span>
                        }
                        <p>Мастер</p>
                    </div>
                    <div className="roles-item">
                        {
                            roles.client ? <span className='green'></span> : <span></span>
                        }
                        <p>Клиент</p>
                    </div>
                </div>
                <div className='person-contacts'>
                    <h2 className="person-name">{name}</h2>
                    <a href={`tel:${phone}`}>{phone}</a>
                </div>
                <Link to={`/profile/${_id}`}>Посмотреть профиль</Link>
            </div>
        </div>
    )
};

export default PeopleLIstItem;