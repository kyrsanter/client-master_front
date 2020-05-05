import React from "react";
import './profile-header.css';

const ProfileHeader = (props) => {
    return (
        <header className="profile-header">
            <div className="profile-name">
                <h3>{props.name}</h3>
            </div>
            <div className="profile-phone">
                <a href={`tel:${props.phone}`}>{props.phone}</a>
            </div>
        </header>
    )
};

export default ProfileHeader;