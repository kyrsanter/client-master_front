let citiesState = {
    cities: [],
    fetchingCities: false,
};

export const citiesReducer = (state = citiesState, action) => {
    switch (action.type) {
        case 'START_FETCHING_CITIES':
            return {
                ...state,
                fetchingCities: false
            };
        case 'GET_CITIES':
            return {
                ...state,
                fetchingCities: true,
                cities: action.payload
            };
        default:
            return state;
    }
};