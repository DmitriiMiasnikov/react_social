import { usersAPI, authAPI } from './../api/api'

const SET_USER_DATA = 'SET-USER-DATA',
LEFT_LOGIN = 'LEFT-LOGIN',
LOGIN = 'LOGIN',
ON_SUBMIT_REGISTRATION = 'ON_SUBMIT_REGISTRATION',
VALIDATE_REGISTRATION = 'VALIDATE_REGISTRATION'

let initialState = {
    id: 9749,
    email: null,
    login: null,
    isFetching: true, 
    isAuth: true,
    registrationData: null,
    registrationNewText: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SET_USER_DATA): {
            return {...state, ...action.data, isAuth: true }
        }
        case (LEFT_LOGIN): {
            return {...state, isAuth: false }
        }
        case (LOGIN): {
            return {...state, isAuth: true }
        }
        case (ON_SUBMIT_REGISTRATION): {
            return {...state, registrationData: action.data }
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
export const sendRegistrationData = (data) => {
    return { type: ON_SUBMIT_REGISTRATION, data: data }
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
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(null, null, null, false))
            }
          })
    }
}

export default authReducer;