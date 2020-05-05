let peopleState = {
    people: [],
    fetchingPeople: false,
    queryParams: {
        skip: 0,
        limit: 10,
    },
    hasMore: true,
    gettedPeople: 0,
    hasScrollLoading: false
};

export const peopleReducer = (state = peopleState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'FETCHING_PEOPLE':
            return {
                ...state,
                fetchingPeople: true,
            };
        case 'GET_PEOPLE':
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    skip: state.queryParams.limit + state.queryParams.skip,
                },
                fetchingPeople: false,
                people: [...state.people, ...action.people],
                gettedPeople: state.gettedPeople + action.people.length,
                hasScrollLoading: false,
            };
        case 'HAS_MORE_TOGGLE':
            return {
                ...state,
                hasMore: false
            };
        case 'SET_SCROLL_LOADING':
            return {
                ...state,
                hasScrollLoading: true,
            };
        default: return state;
    }
}