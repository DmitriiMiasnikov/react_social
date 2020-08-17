let initialState = {
    friendsData: [
        { id: 3, name: 'anton' },
        { id: 2, name: 'alex' },
        { id: 2, name: 'alex' },
        { id: 2, name: 'alex' },
        { id: 4, name: 'valeria' }
      ],
    menuItems: [
        {id: 1, link: 'profile'},
        {id: 2, link: 'dialogs'},
        {id: 3, link: 'users'},
        {id: 4, link: 'music'},
        {id: 5, link: 'news'},
        {id: 6, link: 'settings'}
      ],
}

const menuReducer = (state = initialState, action) => {
    return state;
}
export default menuReducer;