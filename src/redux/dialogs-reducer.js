const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessage = { message:state.messagesPage.newMessageBody };
        state.messagesPage.messages.push(newMessage);
        state.messagesPage.newMessageBody = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.messagesPage.newMessageBody = action.newMessageBody;
    }
    return state;
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})
export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text })


export default dialogsReducer;