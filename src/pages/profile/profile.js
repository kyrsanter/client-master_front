import React, {useEffect} from "react";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Avatar from "../../components/avatar/avatar";
import {getProfile} from "../../actions/user.action";
import Preloader from "../../components/preloader/preloader";
import {startFetchingUserData} from "../../actions/user.action";
import ProfileHeader from "../../components/profile-header/profile-header";
import ProfileConfig from "../../components/profile-config/profile-config";
import './profile.css';

const Profile = (props) => {
    useEffect(() => {
        props.startFetching();
        let {id} = props.match.params;
        props.getProfile(id);
    }, [props.match.params.id]);

    if (!props.fetchingUser) {
        return <Preloader/>
    }
    return (
        <div className="profile-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Avatar />
                    </div>
                    <div className="col-lg-9">
                        <ProfileHeader name={props.user.name} phone={props.user.phone}/>
                        <ProfileConfig dispatch={props.dispatch}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        fetchingUser: state.userReducer.fetchingUser,
        user: state.userReducer.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile:(id) => dispatch(getProfile(id)),
        startFetching: () => dispatch(startFetchingUserData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));