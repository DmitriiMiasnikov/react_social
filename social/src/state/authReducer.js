import { authAPI } from './../api/api';

const SET_USER_DATA = 'SET-USER-DATA',
    LEFT_LOGIN = 'LEFT-LOGIN',
    VALIDATE_REGISTRATION = 'VALIDATE_REGISTRATION'

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    registrationData: null,
    registrationNewText: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_USER_DATA): {
            return { ...state, ...action.data }
        }
        case (VALIDATE_REGISTRATION): {
            return { ...state, registrationNewText: action.data }
        }
        default: break;
    }
    return state;
}
export const setAuthUserData = (id, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: { id, email, login, isAuth } }
}
export const leftLogin = () => {
    return { type: LEFT_LOGIN }
}
export const getAuthUserData = () => {
    return async (dispatch) => {
        const response = await authAPI.me();
        if (response.resultCode === 0) {
            let { id, login, email } = response.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}
export const changeTextInput = (data) => {
    return { type: VALIDATE_REGISTRATION, data: data }
}
export const login = (email, password, rememberme) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, rememberme);
        if (response.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    }
}
export const logout = (email, password, rememberme) => {
    return async (dispatch) => {
        const response = await authAPI.logout(email, password, rememberme)
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }
}

export default authReducer;