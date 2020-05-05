import ServiceHTTP from "../service/serviceHTTP";

const fetchingPeopleAction = () => {
    return {
        type: 'FETCHING_PEOPLE'
    }
};

const getPeopleAction = (people, count) => {
    return {
        type: 'GET_PEOPLE',
        people,
        count
    }
};

const hasMoreToggleAction = () => {
    return {
        type: 'HAS_MORE_TOGGLE'
    }
};

const setScrollLoading = () => {
    return {
        type: 'SET_SCROLL_LOADING'
    }
};

let service = new ServiceHTTP();

export const getPeople = (params, gettedPeople) => async (dispatch) => {
    dispatch(fetchingPeopleAction());
    if (gettedPeople >= 10) {
        dispatch(setScrollLoading())
    }
    let response = await service.getUsers(params);
    let result = await response.json();
    let {count, people} = result;
    dispatch(getPeopleAction(people, count));
    if (gettedPeople + people.length === count) {
        dispatch(hasMoreToggleAction())
    }
};