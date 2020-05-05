import React from "react";
import {connect} from 'react-redux';
import './avatar.css';
import avatarImg from './user.svg';
import {updateUserPhotoThunk} from "../../actions/user.action";

const Avatar = (props) => {
    let {user: {admin}} = props;
    const updatePhoto = (e) => {
        let {user: {id}, updatePhoto} = props;
        let photo = e.target.files[0];
        let prevPhoto = props.user.photo;
        if (!photo) {
            return;
        }
        updatePhoto(id, photo, prevPhoto);
    };

    return (
        <div className="user-avatar-wrapper">
            {
                props.user.photo ? <img className="user-avatar" src={`http://127.0.0.1:3333/${props.user.photo}`} /> : <img className="user-avatar" src={avatarImg} alt=""/>
            }
            {
                admin ? (
                    <div className="change-avatar">
                        <input
                            type="file"
                            name="photo"
                            id="photo"
                            value={undefined}
                            accept="image/*"
                            onChange={updatePhoto}
                        />
                        <label htmlFor="photo">Изменить фото</label>
                    </div>

                ) : null
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePhoto: (id, photo, prevPhoto) => dispatch(updateUserPhotoThunk(id, photo, prevPhoto))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);