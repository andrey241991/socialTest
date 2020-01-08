const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogs: [
        { name: 'Dimich', id: '1' },
        { name: 'Dimich2', id: '2' }],
    messages: [
        { message: 'hi22' },
        { message: 'hi33' }],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = { message: state.newMessageBody };
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, newMessage],
            }
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }
        default:
            return state;
    }

}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text })


export default dialogsReducer;