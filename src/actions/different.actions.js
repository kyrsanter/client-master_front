/*get all services*/
/*work with cities and regions of Ukraine*/

import serviceHTTP from "../service/serviceHTTP";
import {getMessage} from "./message.action";

let service = new serviceHTTP();


export const startFetchingAllServices = () => {
    return {
        type: 'START_FETCHING_ALL_SERVICES'
    }
};

const getServices = (services) => {
    return {
        type: 'GET_SERVICES',
        payload: services,
    }
};

export const startFetchingCities = () => {
    return {
        type: 'START_FETCHING_CITIES'
    }
};

const getCities = (cities) => {
    return {
        type: 'GET_CITIES',
        payload: cities,
    }
};

export const getCitiesThunk = () => async (dispatch) => {
    let response = await service.getCitiesAPI();
    if (response.status >= 400) {
        dispatch(getMessage({msg: 'Что то пошло не так'}))
    }
    else {
        let result = await response.json();
        dispatch(getCities(result))
    }
};

export const getServicesThunk = () => async (dispatch) => {
    let response = await service.getServices();
    let result;
    if (response.status >= 400) {
        result = await response.json();
        dispatch(getMessage(result))
    }
    else {
        result = await response.json();
        dispatch(getServices(result))
    }
};