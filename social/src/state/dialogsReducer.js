const ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'alina', dialog: ['one', 'two', 'alina',] },
        { id: 2, name: 'alex', dialog: ['one', 'alex', 'three',] },
        { id: 3, name: 'anton', dialog: ['one', 'two', 'anton',] },
        { id: 4, name: 'valeria', dialog: ['valeria', 'two', 'three',] }
      ],
      newDialogMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_MESSAGE):
            let newMessage = state.newDialogMessage;
            let stateCopy = {...state};
            stateCopy.dialogsData = [...state.dialogsData];
            state.dialogsData.map((el, i) => stateCopy.dialogsData[i].dialog = [...el.dialog] )
            stateCopy.dialogsData[action.id - 1].dialog.push(newMessage);
            stateCopy.newDialogMessage = '';
            return stateCopy;
        case (UPDATE_NEW_MESSAGE_TEXT):
            let stateCopy2 = {...state};
            stateCopy2.newDialogMessage = action.newText;
            return stateCopy2;
        default: break;
    }
    return state;
}
export const addMessage = (id) => {
    return { type: ADD_MESSAGE, id: id }
}
export const updateNewMessage = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}
export default dialogsReducer;