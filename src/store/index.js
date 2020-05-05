import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form';
import {userReducer} from "../reducers/user.reducer";
import {messageReducer} from "../reducers/message.reducer";
import {servicesReducer} from "../reducers/services.reducer";
import {citiesReducer} from "../reducers/cities.reducer";
import {peopleReducer} from '../reducers/people.reducer'
import thunk from 'redux-thunk'

let initialState = combineReducers({
    form: formReducer,
    userReducer,
    messageReducer,
    citiesReducer,
    peopleReducer,
    servicesReducer
});

const store = createStore(initialState, applyMiddleware(thunk));
window.st = store.getState;

export {store}