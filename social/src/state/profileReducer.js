import { profileAPI, friendsAPI } from './../api/api'

const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_STATUS = 'SET-STATUS',
    IS_FETCHING = 'IS-FETCHING',
    SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS',
    CHANGE_LOOKING_FOR_A_JOB = 'CHANGE_LOOKING_FOR_A_JOB',
    IS_FRIEND = 'IS_FRIEND',
    TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

let initialState = {
    postsData: [
        { id: 1, message: 'text', likesCount: 12 },
        { id: 2, message: 'second text', likesCount: 9 }
    ],
    newPostText: '',
    profile: null,
    status: '',
    isFetching: true,
    isFriend: false,
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
        case (SAVE_PHOTO_SUCCESS): {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };
        }
        case (IS_FETCHING): {
            return { ...state, isFetching: action.loading }
        }
        case (CHANGE_LOOKING_FOR_A_JOB): {
            return {
                ...state,
                profile: { ...state.profile, lookingForAJob: state.profile.lookingForAJob ? false : true }
            };
        }
        case (IS_FRIEND): {
            return { ...state, isFriend: action.friendsArr.some(el => el.id === Number(action.id)) };
        }
        case (TOGGLE_FOLLOW): {
            return { ...state, isFriend: !state.isFriend };
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
export const savePhotoSuccess = (photos) => {
    return { type: SAVE_PHOTO_SUCCESS, photos }
}
export const getUserProfile = (userId) => {
    return async (dispatch) => {
        dispatch(isFetchingToggle(true))
        const response = await profileAPI.openProfile(userId);
        dispatch(setUserProfile(response))
        dispatch(isFetchingToggle(false))
    }
}
export const getStatus = (profileId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(profileId)
        dispatch(setStatus(response))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateStatus(status)
        dispatch(setStatus(response))
    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.updatePhoto(file)
        dispatch(savePhotoSuccess(response.data.photos))
    }
}
export const isFetchingToggle = (loading) => {
    return { type: IS_FETCHING, loading }
}
export const changeLookingForAJobSuccess = () => {
    return { type: CHANGE_LOOKING_FOR_A_JOB }
}
export const changeLookingForAJob = (profile) => {
    return async (dispatch) => {
        await profileAPI.updateLookingJob({ ...profile, lookingForAJob: profile.lookingForAJob ? false : true })
        dispatch(changeLookingForAJobSuccess())
    }
}
export const isFriendCheck = (friendsArr, id) => {
    return { type: IS_FRIEND, friendsArr, id }
}
export const toggleFollow = () => {
    return { type: TOGGLE_FOLLOW }
}
export const isFriendThunc = (id) => {
    return async (dispatch) => {
        const response = await friendsAPI.getFriendsAll()
        dispatch(isFriendCheck(response.items, id))
    }
}

export default profileReducer;