import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    let state = props.store.getState().messagesPage;

    const dialogElements =
        state.dialogs.map(dialog =>
            <DialogItem name={dialog.name} id={dialog.id} />
        );

    const messagesElements =
        state.messages.map(message =>
            <Message message={message.message} />
        );

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const updateNewMessageBody = (e) => {
        let text = e.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea
                className={s.messageTextArea}
                onChange={updateNewMessageBody}
                value={state.newMessageBody}></textarea>
            <div>
                <button onClick={addMessage}>Add New Message</button>
            </div>
        </div>
    );
}

export default Dialogs;