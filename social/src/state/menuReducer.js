import { friendsAPI } from './../api/api'

const GET_FRIENDS = 'GET_FRIENDS',
GET_FRIENDS_MENU = 'GET_FRIENDS_MENU';

let initialState = {
  friendsData: [],
  friendsMenu: [],
  menuItems: [
    { id: 1, link: 'profile' },
    { id: 2, link: 'dialogs' },
    { id: 3, link: 'users' },
  ],
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case (GET_FRIENDS): {
      return { ...state, friendsData: action.friendsData.filter(el => el.followed) };
    }
    case (GET_FRIENDS_MENU): {
      return { ...state, friendsMenu: action.friendsMenu.filter(el => el.followed) };
    }
    default: break;
  }
  return state;
}

export const getFriendsAll = (friendsData) => {
  return { type: GET_FRIENDS, friendsData }
}
export const getFriendsMenu = (friendsMenu) => {
  return { type: GET_FRIENDS_MENU, friendsMenu }
}
export const getFriendsMenuThunc = () => {
  return async (dispatch) => {
    const response = await friendsAPI.getFriendsMenu()
    dispatch(getFriendsMenu(response.items))
  }
}
export const getFriendsAllThunc = () => {
  return async (dispatch) => {
    const response = await friendsAPI.getFriendsAll()
    dispatch(getFriendsAll(response.items))
  }
}

export default menuReducer;