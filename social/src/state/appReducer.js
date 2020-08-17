import {getAuthUserData} from './authReducer';

const SET_INIT = 'SET_INIT';

let initialState = {
    initUser: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_INIT): {
            return {...state, initUser: true }
        }
        default: break;
    }
    return state;
}
export const initSuccess = () => {
    return { type: SET_INIT }
}
export const initApp = () => {
    return (dispatch) => {
        Promise.all([
            dispatch(getAuthUserData())
        ]).then(() => {
            dispatch(initSuccess())
        })
    }
}

export default appReducer;