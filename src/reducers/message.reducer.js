let messageState = {
    message: null,
};

export const messageReducer = (state = messageState, action) => {
    switch (action.type) {
        case 'CLEAR_MESSAGE':
            return {
                ...state,
                message: null
            };
        case 'GET_MESSAGE':
            return {
                ...state,
                message: action.payload
            };
        default:
            return state;
    }
};