import { usersAPI } from './../api/api'

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW',
    SET_USERS = 'SET-USERS',
    SET_USERS_COUNT = "SET-USERS-COUNT",
    IS_FETCHING = 'IS-FETCHING',
    SET_PAGE = 'SET-PAGE',
    FOLLOWING_PROGRESS = 'FOLLOWING-PROGRESS';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_FOLLOW): {
            return {
                ...state,
                usersData: state.usersData.map(el => el.id === action.userID ? { ...el, followed: el.followed ? false : true } : { ...el }),
            };
        }
        case (SET_USERS): {
            return { ...state, usersData: action.usersData }
        }
        case (SET_USERS_COUNT): {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case (IS_FETCHING): {
            return { ...state, isFetching: action.loading }
        }
        case (SET_PAGE): {
            return { ...state, currentPage: action.page }
        }
        case (FOLLOWING_PROGRESS): {
            return {
                ...state, followingProgress: action.isFetching
                    ? [...state.followingProgress, action.id]
                    : state.followingProgress.filter(id => id !== action.id)
            }
        }
        default: break;
    }
    return state;
}
export const toggleFollow = (userID) => {
    return { type: TOGGLE_FOLLOW, userID }
}
export const setUsers = (usersData) => {
    return { type: SET_USERS, usersData }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return { type: SET_USERS_COUNT, totalUsersCount }
}
export const setCurrentPage = (page) => {
    return { type: SET_PAGE, page }
}
export const isFetchingToggle = (loading) => {
    return { type: IS_FETCHING, loading }
}
export const toggleFollowingProgress = (id, isFetching) => {
    return { type: FOLLOWING_PROGRESS, id, isFetching }
}

export const getUsersThunk = (type, currentPage, pageSize) => {
    switch (type) {
        case ('didMount'): {
            return async (dispatch) => {
                const response = await usersAPI.getUsers(currentPage, pageSize)
                dispatch(isFetchingToggle(false))
                dispatch(setUsers(response.items))
                dispatch(setTotalUsersCount(response.totalCount))
            }
        }
        case ('setCurrentPage'): {
            return async (dispatch) => {
                dispatch(isFetchingToggle(true))
                dispatch(setCurrentPage(currentPage))
                const response = await usersAPI.getUsers(currentPage, pageSize)
                dispatch(isFetchingToggle(false))
                dispatch(setUsers(response.items))
            }
        }
    }
}
export const followThunk = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(id, true));
        await usersAPI.followUser(id)
        dispatch(toggleFollow(id))
        dispatch(toggleFollowingProgress(id, false));
    }
}
export const unfollowThunk = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(id, true));
        await usersAPI.unfollowUser(id)
        dispatch(toggleFollow(id))
        dispatch(toggleFollowingProgress(id, false));
    }
}


export default usersReducer;