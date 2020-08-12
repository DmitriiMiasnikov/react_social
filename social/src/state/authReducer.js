import { usersAPI } from './../api/api'

const SET_USER_DATA = 'SET-USER-DATA',
LEFT_LOGIN = 'LEFT-LOGIN',
LOGIN = 'LOGIN'

let initialState = {
    id: 9749,
    email: null,
    login: null,
    isFetching: true, 
    isAuth: true,
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
        default: break;
    }
    return state;
}
export const setAuthUserData = (id, email, login) => {
    return { type: SET_USER_DATA, data: {id, email, login} }
}
export const leftLogin = () => {
    return { type: LEFT_LOGIN }
}
export const authLogin = () => {
    return { type: LOGIN }
}
export const authUserThunk = () => {
    return (dispatch) => {
        usersAPI.authUser().then(data => {
            if (data.resultCode === 0) {
              let {id, login, email} = data.data;
              dispatch(setAuthUserData(id, email, login))
            }
          })
    }
}
export default authReducer;