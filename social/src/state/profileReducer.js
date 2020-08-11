import { usersAPI } from './../api/api'

const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
      postsData: [
        { id: 1, message: 'text', likesCount: 12 },
        { id: 2, message: 'second text', likesCount: 9 }
      ],
      newPostText: '',
      profile: null,
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
export const getUserProfile = (userId) => {
    return (dispatch) => {
            usersAPI.openProfile(userId).then(data => {
                dispatch(setUserProfile(data))
              })
    }
}
export default profileReducer;