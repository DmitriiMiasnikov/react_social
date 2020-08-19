import { profileAPI } from './../api/api'

const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_STATUS = 'SET-STATUS',
    IS_FETCHING = 'IS-FETCHING';

let initialState = {
    postsData: [
        { id: 1, message: 'text', likesCount: 12 },
        { id: 2, message: 'second text', likesCount: 9 }
    ],
    newPostText: '',
    profile: null,
    status: '',
    isFetching: true,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_POST): {
            let newPost = { id: state.postsData.length + 1, message: state.newPostText, likesCount: 0 };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }
        }
        case (UPDATE_NEW_POST_TEXT): {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case (SET_USER_PROFILE): {
            return {
                ...state,
                profile: action.profile
            };
        }
        case (SET_STATUS): {
            return {
                ...state,
                status: action.status
            };
        }
        case (IS_FETCHING): {
            return { ...state, isFetching: action.loading }
        }
        default: break;
    }
    return state;
}
export const addPost = () => {
    return { type: ADD_POST }
}
export const updateNewPost = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}
export const setStatus = (status) => {
    return { type: SET_STATUS, status }
}
export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(isFetchingToggle(true))
        profileAPI.openProfile(userId).then(data => {
            dispatch(setUserProfile(data))
            dispatch(isFetchingToggle(false))
        })
    }
}
export const getStatus = (profileId) => {
    return (dispatch) => {
        profileAPI.getStatus(profileId).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const isFetchingToggle = (loading) => {
    return { type: IS_FETCHING, loading }
}
export default profileReducer;