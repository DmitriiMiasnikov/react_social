import { combineReducers, createStore, applyMiddleware } from 'redux';
import menuReducer from './menuReducer';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    menu: menuReducer,
    users: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;