export const getMessage = (message) => {
    return {
        type: 'GET_MESSAGE',
        payload: message
    }
}; //exported to login thunk


export const clearMessage = () => {
    return {
        type: 'CLEAR_MESSAGE',
    }
};



