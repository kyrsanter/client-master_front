let serviceState = {
    fetchingServices: false,
    services: [],
};

export const servicesReducer = (state = serviceState, action) => {
    switch (action.type) {
        case 'START_FETCHING_ALL_SERVICES':
            return {
                ...state,
                fetchingServices: false
            };
        case 'GET_SERVICES':
            return {
                ...state,
                fetchingServices: true,
                services: action.payload
            };
        default:
            return state;
    }
}