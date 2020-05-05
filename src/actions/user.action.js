import serviceHTTP from "../service/serviceHTTP";
import {getMessage} from "./message.action";

let service = new serviceHTTP();

export const startFetchingUserData = () => {
    return {
        type: 'START_FETCHING_USER_DATA'
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
};

const fetchUserData = (userData) => {
    return {
        type: 'FETCH_USER_DATA',
        payload: userData
    }
};

const updateUserPhoto = (image) => {
    return {
        type: 'UPDATE_USER_PHOTO',
        payload: image
    }
};

export const userLoginThunk = (userData, history) => async (dispatch) => {
    let res = await service.loginUser(userData);
    if (res.status === 401) {
        let data = await res.json();
        dispatch(getMessage(data.message));
        return;
    }
    dispatch(fetchUserData(res.user));
    dispatch(getMessage(res.messages));
    localStorage.setItem('user', res.token);
    history.push(`/profile/${res.user._id}`)
};

export const userRegThunc = (values, history) => async (dispatch) => {
    let res = await service.registrUser(values);
    let result = await res.json();
    dispatch(getMessage(result));
    history.push(`/auth/login`)
};

export const getProfile = (id) => async (dispatch) => {
    let res = await service.getProfile(id);
    if (res.status >= 400) {
        let data = await res.json();
        dispatch(getMessage(data.message));
        return;
    }
    let result = await res.json();
    // console.log(result, 'result');
    let {_id, name, phone, photo, roles, admin} = result;
    let user;
    if (photo) {
        user = {
            photo,
            name,
            phone,
            admin,
            roles,
            id: _id
        };
    }
    else {
        user = {
            roles,
            admin,
            name,
            phone,
            id: _id
        };
    }
    dispatch(fetchUserData(user));
};

export const updateUserPhotoThunk = (id, file, prevPhoto) => async (dispatch) => {
    let response = await service.updatePhoto(id, file, prevPhoto);
    let result = await response.json();
    dispatch(updateUserPhoto(result));
};

export const startAppInitialization = (history) => async (dispatch) => {
    let response = await service.init();
    let result;
    if (!response || response.status >= 400) {
        history.push('/auth/login');
    }
    else {
        result = await response.json();
        history.push(`/profile/${result._id}`)
    }
};
