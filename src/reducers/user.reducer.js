let userState = {
    fetchingUser: false,
    user: null,
};

export const userReducer = (state = userState, action) => {
    switch (action.type) {
        case 'START_FETCHING_USER_DATA':
            return {
                ...state,
                fetchingUser: false
            };
        case 'FETCH_USER_DATA':
            return {
                ...state,
                user: action.payload,
                fetchingUser: true
            };
        case 'UPDATE_USER_PHOTO':
            return {
                ...state,
                user: {
                    ...state.user,
                    photo: action.payload,
                }
            };
        default:
            return state;
    }
};