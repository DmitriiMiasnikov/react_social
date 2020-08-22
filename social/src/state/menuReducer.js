import { friendsAPI } from './../api/api'

const GET_FRIENDS = 'GET_FRIENDS',
  IS_FETCHING = 'IS-FETCHING';

let initialState = {
  friendsData: null,
  menuItems: [
    { id: 1, link: 'profile' },
    { id: 2, link: 'dialogs' },
    { id: 3, link: 'users' },
    { id: 4, link: 'music' },
    { id: 5, link: 'news' },
    { id: 6, link: 'settings' }
  ],
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case (GET_FRIENDS): {
      return { ...state, friendsData: action.friendsData.filter(el => el.followed) };
    }
    case (IS_FETCHING): {
      return { ...state, isFetching: action.loading }
    }
    default: break;
  }
  return state;
}

export const isFetchingToggle = (loading) => {
  return { type: IS_FETCHING, loading }
}
export const getFriends = (friendsData) => {
  return { type: GET_FRIENDS, friendsData }
}
export const getFriendsThunc = () => {
  return async (dispatch) => {
    dispatch(isFetchingToggle(true))
    const response = await friendsAPI.getFriendsList()
    dispatch(isFetchingToggle(false))
    dispatch(getFriends(response.items))
  }
}

export default menuReducer;