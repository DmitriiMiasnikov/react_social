import { combineReducers, createStore, applyMiddleware } from 'redux';
import menuReducer from './menuReducer';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    menu: menuReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)) );
window.__store__ = store;

export default store;