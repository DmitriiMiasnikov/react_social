import { usersAPI, authAPI } from './../api/api'

const SET_USER_DATA = 'SET-USER-DATA',
LEFT_LOGIN = 'LEFT-LOGIN',
LOGIN = 'LOGIN',
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
            return {...state, ...action.data }
        }
        case (LOGIN): {
            return {...state, isAuth: true }
        }
        case (VALIDATE_REGISTRATION): {
            return {...state, registrationNewText: action.data }
        }
        default: break;
    }
    return state;
}
export const setAuthUserData = (id, email, login, isAuth) => {
    return { type: SET_USER_DATA, data: {id, email, login, isAuth} }
}
export const leftLogin = () => {
    return { type: LEFT_LOGIN }
}
export const authLogin = () => {
    return { type: LOGIN }
}
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
              let {id, login, email} = data.data;
              dispatch(setAuthUserData(id, email, login, true))
            }
          })
    }
}
export const changeTextInput = (data) => {
    return { type: VALIDATE_REGISTRATION, data: data }
}
export const login = (email, password, rememberme) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberme).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
          })
    }
}
export const logout = (email, password, rememberme) => {
    return (dispatch) => {
        authAPI.logout(email, password, rememberme).then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
          })
    }
}

export default authReducer;